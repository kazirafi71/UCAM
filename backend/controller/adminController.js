const AdminModel = require("../model/AdminModel");
const UserModel = require("../model/UserModel");
var bcrypt = require("bcryptjs");
const shortid = require("shortid");
const jwt = require("jsonwebtoken");

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

    console.log(checkUserName);

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
