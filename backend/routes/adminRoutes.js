const {
  createAdmin__controller,
  createUser__controller,
  adminLogin__controller,
  listUsers__controller,
  listAdmins__controller,
  createStudentProfile__controller,
  listStudentProfile__controller,
  deleteUser__controller,
  createTeacherProfile__controller,
  listTeachers__controller,
  totalCounts__controller,
  createCourse__controller,
  listCourses__controller,
  courseDetails__controller,
  deleteCourse__controller,
} = require("../controller/adminController");

const { checkAdmin } = require("../middleware/permission");
const upload = require("../middleware/multer");

const router = require("express").Router();

//routes

router.post("/admin-login", adminLogin__controller);

router.post("/create-admin", checkAdmin, createAdmin__controller);

router.post("/create-user", checkAdmin, createUser__controller);

router.post(
  "/create-student-profile/:studentId",
  checkAdmin,
  upload.single("student_img"),
  createStudentProfile__controller
);

router.post(
  "/create-teacher-profile/:teacherId",
  checkAdmin,
  upload.single("teacher_img"),
  createTeacherProfile__controller
);

router.get("/total-counts", checkAdmin, totalCounts__controller);

router.get("/list-users", checkAdmin, listUsers__controller);

router.get("/list-admins", checkAdmin, listAdmins__controller);

router.get(
  "/list-student-profiles",
  checkAdmin,
  listStudentProfile__controller
);

router.get("/list-teachers", checkAdmin, listTeachers__controller);

router.delete("/delete-user/:userId", checkAdmin, deleteUser__controller);

// Course

router.post("/create-course", checkAdmin, createCourse__controller);

router.get("/list-courses", checkAdmin, listCourses__controller);

router.get("/course-details/:courseId", checkAdmin, courseDetails__controller);

router.delete("/delete-course/:courseId", checkAdmin, deleteCourse__controller);

module.exports = router;
