const mongoose = require("mongoose");

const studentProfileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    blood_group: {
      type: String,
    },
    contact_no: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    father_profession: {
      type: String,
    },
    mother_name: {
      type: String,
      required: true,
    },
    mother_profession: {
      type: String,
    },
    sms_guardian_number: {
      type: Number,
      required: true,
    },
    date_of_birth: {
      type: String,
      required: true,
    },
    marital_status: {
      type: String,
    },
    religion: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    second_guardian_name: {
      type: String,
    },
    present_address: {
      type: String,
    },
    parament_address: {
      type: String,
      required: true,
    },
    second_guardian_address: {
      type: String,
    },
    profile_img: {
      type: String,
    },
    image_id: {
      type: String,
    },
    roll_number: {
      type: Number,
      required: true,
    },

    session: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("student_profile", studentProfileSchema);
