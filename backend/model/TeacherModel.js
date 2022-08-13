const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    // taking_courses: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "user",
    // },

    fullName: {
      type: String,
      required: true,
    },
    passed_university: {
      type: String,
      required: true,
    },
    passed_department: {
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

    date_of_birth: {
      type: String,
    },

    religion: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },

    present_address: {
      type: String,
    },
    parament_address: {
      type: String,
     
    },

    profile_img: {
      type: String,
    },
    image_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("teacher", teacherSchema);
