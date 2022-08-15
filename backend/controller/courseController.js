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

module.exports.getTeacherCourses__controller = async (req, res, next) => {
  try {
    const { teacherId } = req.params;
    const teacherCourses = await CourseModel.find({
      course_teachers: { $in: [teacherId] },
    });

    return res.status(200).json(teacherCourses);
  } catch (error) {
    console.log(error);
  }
};
