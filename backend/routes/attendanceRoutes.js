const {
  takeAttendance__controller,
  getAttendanceList__controller,
  getTodayAttendanceList__controller,
  listAttendanceSummary__controller,
} = require("../controller/attendanceController");
const { checkTeacher, checkLogin } = require("../middleware/permission");

const router = require("express").Router();

router.put(
  "/create-attendance/:courseId",
  checkTeacher,
  takeAttendance__controller
);

router.get(
  "/get-attendance-list/:courseId/teacher/:teacherId",
  checkTeacher,
  getAttendanceList__controller
);

router.get(
  "/get-today-attendance-list/:courseId",
  checkTeacher,
  getTodayAttendanceList__controller
);

router.get(
  "/list-attendance-summary/:studentId",
  checkLogin,
  listAttendanceSummary__controller
);

module.exports = router;
