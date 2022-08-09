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
    session: {
      type: String,
      required: true,
    },

    course_students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    course_teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("course", courseSchema);
