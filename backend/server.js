const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

//Middleware
app.use(cors());
app.use(express.json());

//routes

app.get("/test", (req, res) => {
  return res.status(200).json({ text: "test" });
});

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api", require("./routes/authRoutes"));

//server and database
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL)
  .then((result) => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection Error ");
  });
