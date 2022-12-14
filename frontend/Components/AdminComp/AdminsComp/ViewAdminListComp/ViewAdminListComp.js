import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Alert, Container } from "react-bootstrap";
import AdminTitleComp from "../../../CommonComp/AdminTitleComp/AdminTitleComp";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Axios from "axios";
import baseUrl from "../../../../config/baseUrl";
import { getAdminToken } from "../../../../utils/localStorageData";
import LoadingComp from "../../../CommonComp/LoadingComp/LoadingComp";

const columns = ["Serial Number", "Email", "Role", "Action"];

const ViewAdminListComp = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getUserList = async () => {
    const admin_token = getAdminToken();
    try {
      const result = await Axios.get(`${baseUrl}/api/admin/list-admins`, {
        headers: {
          Authorization: "Bearer " + admin_token,
        },
      });
      setData(result.data);
    } catch (error) {
      setErrorMsg(error.response.data.error);
    }
  };

  React.useEffect(() => {
    getUserList();
  }, []);

  if (errorMsg) {
    return (
      <div className="py-4">
        <Alert variant="danger" className="text-center">
          {errorMsg}
        </Alert>
      </div>
    );
  }
  if (!data) {
    return <LoadingComp />;
  }

  return (
    <div>
      <div>
        <Container>
          <AdminTitleComp
            title="Admins"
            btn_text="Add Admin"
            url="/admin/admins/addadmin"
          />

          {/* users table */}
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => (
                      <TableCell className="text-center" key={index}>
                        {column}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={index}
                          >
                            <TableCell className="text-center">
                              {index + 1}
                            </TableCell>
                            <TableCell className="text-center">
                              {row.email}
                            </TableCell>
                            <TableCell className="text-center">
                              {row.role}
                            </TableCell>
                            <TableCell className="text-center">
                              <BiEditAlt className="commonEditIcon" />
                              <MdDeleteOutline className="commonDeleteIcon" />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ViewAdminListComp;
