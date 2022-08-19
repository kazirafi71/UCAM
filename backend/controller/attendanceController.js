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
    let total_present = 0;
    let total_absent = 0;
    if (attendance_status) {
      total_present = 1;
    } else {
      total_absent = 1;
    }

    if (!checkCourse) {
      const createAttendance = new AttendanceModel({
        attendance: [{ attendance_date: today, attendance_status }],
        course: courseId,
        student: studentId,
        total_present,
        total_absent,
      });

      await createAttendance.save();
      return res.status(201).json({ success: "Attendance saved successfully" });
    } else {
      const checkAttendance = await AttendanceModel.findOne({
        course: courseId,
        student: studentId,
        "attendance.attendance_date": attendance_date,
      });
      if (checkAttendance) {
        let total_present_count = checkCourse.total_present;

        let total_absent_count = checkCourse.total_absent;
        if (attendance_status) {
          total_present_count = checkCourse.total_present + 1;
          if (checkCourse.total_absent > 0) {
            total_absent_count = checkCourse.total_absent - 1;
          }
        } else {
          total_absent_count = checkCourse.total_absent + 1;
          if (checkCourse.total_present > 0) {
            total_present_count = checkCourse.total_present - 1;
          }
        }
        const checkAttendanceDate = await AttendanceModel.updateOne(
          {
            course: courseId,
            student: studentId,
            "attendance.attendance_date": today,
          },
          {
            $set: {
              "attendance.$.attendance_status": attendance_status,
              total_present: total_present_count,
              total_absent: total_absent_count,
            },
          },
          { new: true }
        );
        return res.status(200).json({ success: "Attendance updated" });
      } else {
        let total_present_count = checkCourse.total_present;
        let total_absent_count = checkCourse.total_absent;
        if (attendance_status) {
          total_present_count = checkCourse.total_present + 1;
        } else {
          total_absent_count = checkCourse.total_absent + 1;
        }
        const updateAttendance = await AttendanceModel.findOneAndUpdate(
          {
            course: courseId,
            student: studentId,
          },
          {
            $push: {
              attendance: [{ attendance_date: today, attendance_status }],
            },
            $set: {
              total_present: total_present_count,
              total_absent: total_absent_count,
            },
          },
          { new: true }
        );
        return res.status(200).json({ success: "Attendance added" });
      }
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
