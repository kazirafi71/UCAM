const {
  takeAttendance__controller,
  getAttendanceList__controller,
} = require("../controller/attendanceController");
const { checkTeacher } = require("../middleware/permission");

const router = require("express").Router();

router.put(
  "/create-attendance/:courseId",
  checkTeacher,
  takeAttendance__controller
);

router.get(
  "/get-attendance-list/:courseId",
  checkTeacher,
  getAttendanceList__controller
);

module.exports = router;
