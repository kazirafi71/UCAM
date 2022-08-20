const { createBill__controller } = require("../controller/billController");
const { checkAdmin } = require("../middleware/permission");
const upload = require("../middleware/multer");
const router = require("express").Router();

router.post(
  "/create-bill",
  checkAdmin,
  upload.single("bill_details"),
  createBill__controller
);

module.exports = router;
