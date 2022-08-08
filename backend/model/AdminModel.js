const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  admin_code: {
    type: String,
    required: true,
  },

  role: { type: String, required: true, default: "Admin" },
});

module.exports = mongoose.model("admin", adminSchema);
