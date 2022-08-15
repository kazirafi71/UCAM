const {
  getStudentProfile__controller,
} = require("../controller/studentController");
const { checkLogin } = require("../middleware/permission");

const router = require("express").Router();

router.get(
  "/student-profile/:studentId",
  checkLogin,
  getStudentProfile__controller
);

module.exports = router;
