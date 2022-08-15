const TeacherModel = require("../model/TeacherModel");

module.exports.getTeacherProfile__controller = async (req, res, next) => {
  try {
    const { teacherId } = req.params;

    const teacherInfo = await TeacherModel.findOne({ user: teacherId });
    if (!teacherInfo) {
      return res
        .status(404)
        .json({ error: "Your profile not created yet now" });
    }
    return res.status(200).json(teacherInfo);
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};
