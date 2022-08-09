const {
  login__controller,
  verifyToken__controller,
} = require("../controller/authController");

const router = require("express").Router();

router.post("/login", login__controller);

router.post("/verify-token", verifyToken__controller);

module.exports = router;
