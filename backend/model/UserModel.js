const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  profile_img: {
    type: String,
    default: "",
  },

  role: { type: String, required: true, enum: ["Student", "Teacher"] },

  createdAt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
});

module.exports = mongoose.model("user", userSchema);
