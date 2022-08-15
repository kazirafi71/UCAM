const {
  getOneStudentCourses__controller,
  getTeacherCourses__controller,
} = require("../controller/courseController");
const { checkLogin, checkTeacher } = require("../middleware/permission");
const router = require("express").Router();

router.get(
  "/student-courses/:studentId",
  checkLogin,
  getOneStudentCourses__controller
);

router.get(
  "/teacher-courses/:teacherId",
  checkTeacher,
  getTeacherCourses__controller
);

module.exports = router;
