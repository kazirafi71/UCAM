const {
  createAdmin__controller,
  createUser__controller,
  adminLogin__controller,
  listUsers__controller,
  listAdmins__controller,
} = require("../controller/adminController");
const { checkAdmin } = require("../middleware/permission");

const router = require("express").Router();

router.post("/create-admin", checkAdmin, createAdmin__controller);

router.post("/create-user", checkAdmin, createUser__controller);

router.get("/list-users", checkAdmin, listUsers__controller);

router.get("/list-admins", checkAdmin, listAdmins__controller);

router.post("/admin-login", adminLogin__controller);

module.exports = router;
