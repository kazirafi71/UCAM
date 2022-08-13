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
import Image from "next/image";

const columns = [
  "Serial Number",
  "Username",
  "Image",
  "FullName",
  "Gender",
  "Passed University",
  "Passed Department",

  "Blood group",

  "Contact No.",
  "Email",
  "Nationality",
  "Present Address",
  "Permanent Address",
  "Action",
];

const TeacherInfosList = () => {
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
      const result = await Axios.get(`${baseUrl}/api/admin/list-teachers`, {
        headers: {
          Authorization: "Bearer " + admin_token,
        },
      });
      setData(result.data);
    } catch (error) {
      setErrorMsg(error.response?.data?.error);
    }
  };

  React.useEffect(() => {
    getUserList();
  }, []);

  if (!data) {
    return <LoadingComp />;
  }

  if (errorMsg) {
    return (
      <div className="py-4">
        <Alert variant="danger" className="text-center">
          {errorMsg}
        </Alert>
      </div>
    );
  }
  return (
    <div>
      <Container>
        <AdminTitleComp title="Teacher Information's" />
        {/* student info table */}
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
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                            {row.user?.username}
                          </TableCell>
                          <TableCell>
                            <img
                              src={row.profile_img}
                              height={50}
                              width={50}
                              className="rounded-circle"
                              style={{ objectFit: "cover" }}
                            />
                          </TableCell>
                          <TableCell className="text-center">
                            {row.fullName}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.gender}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.passed_university}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.passed_department}
                          </TableCell>

                          <TableCell className="text-center">
                            {row.blood_group}
                          </TableCell>

                          <TableCell className="text-center">
                            {row.contact_no}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.email}
                          </TableCell>

                          <TableCell className="text-center">
                            {row.nationality}
                          </TableCell>

                          <TableCell className="text-center">
                            {row.present_address}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.parament_address}
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
  );
};

export default TeacherInfosList;
