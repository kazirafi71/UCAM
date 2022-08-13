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
import { useRouter } from "next/router";
import DeleteModal from "../../../CommonComp/DeleteModal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteModalSlice } from "../../../../redux/deleteModal/deleteModalSlice";
import { courseListAction } from "../../../../redux/course/courseAction";

const columns = [
  "Serial Number",
  "Course Title",
  "Course Code",
  "Credit",
  "Academic Session",
  "Students",
  "Teachers",
  "Action",
];

const CourseListComp = () => {
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const modalText = useSelector((state) => state.deleteModal);
  const dispatch = useDispatch();
  const [deleteItem, setDeleteItem] = React.useState("");
  const { listCourses } = useSelector((state) => state.courses);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    dispatch(courseListAction());
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

  if (!listCourses) {
    return <LoadingComp />;
  }

  return (
    <div>
      <Container>
        <AdminTitleComp
          title="All Courses"
          btn_text="Add Course"
          url="/admin/course/createcourse"
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
                {listCourses &&
                  listCourses
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
                            {row.course_title}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.course_code}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.credit}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.academic_session}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.course_students.length}
                          </TableCell>
                          <TableCell className="text-center">
                            {row.course_teachers.length}
                          </TableCell>
                          <TableCell className="text-center">
                            <BiEditAlt className="commonEditIcon" />
                            <MdDeleteOutline
                              onClick={() => {
                                setDeleteItem(row._id);
                                setModalShow(true);
                              }}
                              className="commonDeleteIcon"
                            />
                            <DeleteModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                              userId={deleteItem}
                              title="user"
                            />
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
            count={listCourses.length}
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

export default CourseListComp;
