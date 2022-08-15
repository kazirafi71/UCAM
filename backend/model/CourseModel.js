const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    course_title: {
      type: String,
      required: true,
    },
    credit: {
      type: Number,
      required: true,
    },
    course_code: {
      type: String,
      required: true,
    },
    academic_session: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },

    course_students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
      },
    ],
    course_teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
      },
    ],

    createdAt: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", courseSchema);
