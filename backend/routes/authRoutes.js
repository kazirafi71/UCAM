const { login__controller } = require("../controller/authController");

const router = require("express").Router();

router.post("/login", login__controller);

module.exports = router;
