const {
  createAdmin__controller,
  createUser__controller,
  adminLogin__controller,
} = require("../controller/adminController");

const router = require("express").Router();

router.post("/create-admin", createAdmin__controller);

router.post("/create-user", createUser__controller);

router.post("/admin-login", adminLogin__controller);

module.exports = router;
