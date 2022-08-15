const {
  getOneStudentCourses__controller,
} = require("../controller/courseController");
const { checkLogin } = require("../middleware/permission");
const router = require("express").Router();

router.get(
  "/student-courses/:studentId",
  checkLogin,
  getOneStudentCourses__controller
);

module.exports = router;
