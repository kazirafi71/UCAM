const { getTeacherProfile__controller } = require("../controller/teacherController");
const { checkLogin, checkTeacher } = require("../middleware/permission");

const router = require("express").Router();

router.get(
  "/teacher-profile/:teacherId",
  checkTeacher,
  getTeacherProfile__controller
);

module.exports = router;
