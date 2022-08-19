const AttendanceModel = require("../model/AttendanceModel");
const CourseModel = require("../model/CourseModel");

module.exports.getAttendanceList__controller = async (req, res, next) => {
  try {
    const { courseId, teacherId } = req.params;

    const courseStudents = await CourseModel.find({
      _id: courseId,
      course_teachers: { $in: [teacherId] },
    })
      .populate("course_students", "_id user fullName roll_number")
      .populate("course_teachers", "_id user fullName");
    return res.status(200).json(courseStudents);
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.getTodayAttendanceList__controller = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    let today = new Date().toLocaleDateString();
    const attendanceHistory = await AttendanceModel.find({
      course: courseId,
      attendance: { $elemMatch: { attendance_date: "8/19/2022" } },
    });
    const newArrAttendance = [];
    attendanceHistory.map((item) => {
      return newArrAttendance.push([item.attendance, item.student]);
    });

    let singleArr = newArrAttendance.flat(2);
    console.log(singleArr);
    const checkToday = singleArr.filter(
      (item) => item.attendance_date === today
    );

    return res.status(200).json({ today: checkToday });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports.takeAttendance__controller = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const { studentId, attendance_status, attendance_date } = req.body;
    const checkCourse = await AttendanceModel.findOne({
      course: courseId,
      student: studentId,
    });
    let today = new Date().toLocaleDateString();

    if (!checkCourse) {
      const createAttendance = new AttendanceModel({
        attendance: [{ attendance_date: today, attendance_status }],
        course: courseId,
        student: studentId,
      });

      await createAttendance.save();
      return res.status(201).json({ success: "Attendance saved successfully" });
    } else {
      if (attendance_date === today) {
        const checkAttendanceDate = await AttendanceModel.updateOne(
          {
            course: courseId,
            student: studentId,
            "attendance.attendance_date": today,
          },
          {
            $set: {
              "attendance.$.attendance_status": attendance_status,
            },
          },
          { new: true }
        );
      } else {
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
      }

      return res.status(200).json({ success: "Attendance updated" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports.listAttendanceSummary__controller = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const courseStudents = await AttendanceModel.find({
      student: studentId,
    }).populate("course", "course_code course_title");

    // .populate("course_teachers", "_id user fullName");
    return res.status(200).json(courseStudents);
  } catch (error) {
    console.log("error", error);
  }
};
