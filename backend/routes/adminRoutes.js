const {
  createAdmin__controller,
  createUser__controller,
} = require("../controller/adminController");

const router = require("express").Router();

router.post("/create-admin", createAdmin__controller);

router.post("/create-user", createUser__controller);

module.exports = router;
