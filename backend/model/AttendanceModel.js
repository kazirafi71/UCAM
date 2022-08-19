const mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
  {
    attendance: [
      {
        attendance_date: {
          type: String,
          required: true,
        },
        attendance_status: {
          type: Boolean,
          required: true,
        },
      },
    ],

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
    },
    // createdAt: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "teacher",
    // },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("attendance", attendanceSchema);
