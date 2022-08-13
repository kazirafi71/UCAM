const AdminModel = require("../model/AdminModel");
const UserModel = require("../model/UserModel");
const StudentProfileModel = require("../model/StudentProfileModel");
const TeacherModel = require("../model/TeacherModel");
var bcrypt = require("bcryptjs");
const shortid = require("shortid");
const jwt = require("jsonwebtoken");
const cloudinary = require("../middleware/cloudinary");

module.exports.createAdmin__controller = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(404)
        .json({ error: "Please provide required information's" });
    }
    const checkemail = await AdminModel.findOne({
      email,
    });

    if (checkemail) {
      return res.status(404).json({ error: "email already exists" });
    }

    const hash_pass = bcrypt.hashSync(password, 12);

    const newAdmin = new AdminModel({
      email,
      password: hash_pass,
      admin_code: shortid.generate(),
    });

    const saveAdmin = await newAdmin.save();

    return res.status(201).json({ success: "Admin Created Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.createUser__controller = async (req, res, next) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
      return res
        .status(404)
        .json({ error: "Please provide required information's" });
    }
    const checkUserName = await UserModel.findOne({
      username: username.replaceAll(" ", ""),
    });

    if (checkUserName) {
      return res.status(404).json({ error: "Username already exists" });
    }

    const hash_pass = bcrypt.hashSync(password, 12);

    const newAdmin = new UserModel({
      username,
      password: hash_pass,
      role,
    });

    const saveAdmin = await newAdmin.save();

    return res.status(201).json({ success: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports.adminLogin__controller = async (req, res, next) => {
  try {
    const { email, password, admin_code } = req.body;

    if (!email || !password || !admin_code) {
      return res
        .status(404)
        .json({ error: "Please provide required information" });
    }

    const checkUser = await AdminModel.findOne({
      email: email,
      admin_code: admin_code,
    });

    // console.log(checkUser);

    if (!checkUser) {
      return res.status(404).json({ error: "Invalid credentials" });
    }
    const checkPass = await bcrypt.compareSync(password, checkUser.password);
    if (!checkPass) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    var token = jwt.sign(
      { _id: checkUser._id, email: checkUser.email },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(201).json({ success: "Login successful", token });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.listUsers__controller = async (req, res, next) => {
  try {
    const users = await UserModel.find();

    return res.status(201).json(users);
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.listAdmins__controller = async (req, res, next) => {
  try {
    const admins = await AdminModel.find();
    return res.status(201).json(admins);
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.listStudentProfile__controller = async (req, res, next) => {
  try {
    const student_profile = await StudentProfileModel.find().populate(
      "user",
      "username"
    );
    return res.status(201).json(student_profile);
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.listTeachers__controller = async (req, res, next) => {
  try {
    const teachers = await TeacherModel.find().populate("user", "username");
    return res.status(201).json(teachers);
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.createStudentProfile__controller = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const {
      gender,
      contact_no,
      fullName,
      nationality,
      blood_group,
      father_name,
      father_profession,
      mother_name,
      mother_profession,
      sms_guardian_number,
      date_of_birth,
      marital_status,
      religion,
      email,
      second_guardian_name,
      present_address,
      parament_address,
      second_guardian_address,
      roll_number,
      session,
      section,
    } = req.body;

    if (
      !fullName ||
      !gender ||
      !contact_no ||
      !nationality ||
      !father_name ||
      !mother_name ||
      !sms_guardian_number ||
      !date_of_birth ||
      !religion ||
      !parament_address ||
      !roll_number ||
      !session ||
      !section
    ) {
      return res
        .status(404)
        .json({ error: "Please provide required information" });
    }

    let img_path;
    if (req.file) {
      img_path = await cloudinary.uploader.upload(req.file.path, {
        folder: "ucam/student_img",
        quality: 40,
      });
    }

    const newProfile = new StudentProfileModel({
      gender,
      contact_no,
      fullName,
      nationality,
      blood_group,
      father_name,
      father_profession,
      mother_name,
      mother_profession,
      sms_guardian_number,
      date_of_birth,
      marital_status,
      religion,
      email,
      second_guardian_name,
      present_address,
      parament_address,
      second_guardian_address,
      roll_number,
      session,
      section,
      profile_img: img_path?.secure_url || "",
      image_id: img_path?.public_id || "",
      user: studentId,
    });
    const saveProfile = await newProfile.save();

    const update_profileStatus = await UserModel.findOneAndUpdate(
      { _id: studentId },
      { $set: { profile_status: true } },
      { new: true }
    );

    return res
      .status(201)
      .json({ success: "Student profile created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.createTeacherProfile__controller = async (req, res, next) => {
  try {
    const { teacherId } = req.params;
    const {
      gender,
      contact_no,
      fullName,
      nationality,
      blood_group,
      date_of_birth,
      religion,
      email,
      passed_university,
      passed_department,
      present_address,
      parament_address,
    } = req.body;

    if (
      !fullName ||
      !gender ||
      !contact_no ||
      !nationality ||
      !passed_university ||
      !passed_department ||
      !email
    ) {
      return res
        .status(404)
        .json({ error: "Please provide required information" });
    }

    let img_path;
    if (req.file) {
      img_path = await cloudinary.uploader.upload(req.file.path, {
        folder: "ucam/teacher_img",
        quality: 40,
      });
    }

    const newProfile = new TeacherModel({
      gender,
      contact_no,
      fullName,
      nationality,
      blood_group,
      date_of_birth,
      religion,
      email,
      present_address,
      parament_address,
      passed_university,
      passed_department,
      profile_img: img_path?.secure_url || "",
      image_id: img_path?.public_id || "",
      user: teacherId,
    });
    const saveProfile = await newProfile.save();

    const update_profileStatus = await UserModel.findOneAndUpdate(
      { _id: teacherId },
      { $set: { profile_status: true } },
      { new: true }
    );

    return res
      .status(201)
      .json({ success: "Teacher profile created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.deleteUser__controller = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const userInfo = await UserModel.findById(userId);

    const deleteUser = await UserModel.findByIdAndDelete(userId);
    if (userInfo?.role === "Student") {
      const deleteUserProfile = await StudentProfileModel.findOneAndDelete({
        user: userId,
      });
    }

    return res.status(201).json({ success: "User deleted successfully" });
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.totalCounts__controller = async (req, res, next) => {
  try {
    const total_users = await UserModel.find().count();
    const total_students = await UserModel.find({ role: "Student" }).count();
    const total_teachers = await UserModel.find({ role: "Teacher" }).count();
    const total_admins = await AdminModel.find({ role: "Admin" }).count();
    return res.status(200).json({
      total_users,
      total_teachers,
      total_students,
      total_admins,
    });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};
