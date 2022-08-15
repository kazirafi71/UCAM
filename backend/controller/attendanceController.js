const AttendanceModel = require("../model/AttendanceModel");
const CourseModel = require("../model/CourseModel");

module.exports.getAttendanceList__controller = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const courseStudents = await CourseModel.find({ _id: courseId })
      .populate("course_students", "_id user fullName")
      .populate("course_teachers", "_id user fullName");
    return res.status(200).json(courseStudents);
  } catch (error) {
    console.log(error);
  }
};

module.exports.takeAttendance__controller = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { studentId, attendance_status } = req.body;
    const checkCourse = await AttendanceModel.findOne({
      course: courseId,
      student: studentId,
    });
    let today = new Date().toLocaleDateString();

    // console.log(today);

    if (!checkCourse) {
      const createAttendance = new AttendanceModel({
        attendance: [{ attendance_date: today, attendance_status }],
        course: courseId,
        student: studentId,
      });

      await createAttendance.save();
    } else {
      console.log(checkCourse);

      const updateAttendance = await AttendanceModel.findOneAndUpdate(
        {
          course: courseId,
          student: studentId,
        },
        {
          $push: {
            attendance: [{ attendance_date: today, attendance_status }],
          },
        },
        { new: true }
      );
      console.log(updateAttendance);
      return res.status(200).json(updateAttendance);
    }
  } catch (error) {
    console.log(error);
  }
};
