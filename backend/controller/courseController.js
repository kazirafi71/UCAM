const CourseModel = require("../model/CourseModel");

module.exports.getOneStudentCourses__controller = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const studentCourses = await CourseModel.find({
      course_students: { $in: [studentId] },
    }).select("-course_students");

    return res.status(200).json(studentCourses);
  } catch (error) {
    console.log(error);
  }
};
