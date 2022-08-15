const StudentProfileModel = require("../model/StudentProfileModel");

module.exports.getStudentProfile__controller = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const studentInfo = await StudentProfileModel.findOne({ user: studentId });
    if (!studentInfo) {
      return res
        .status(404)
        .json({ error: "Your profile not created yet now" });
    }
    return res.status(200).json(studentInfo);
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};
