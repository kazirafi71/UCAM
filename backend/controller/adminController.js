const AdminModel = require("../model/AdminModel");
const UserModel = require("../model/UserModel");
var bcrypt = require("bcryptjs");
const shortid = require("shortid");

module.exports.createAdmin__controller = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(404)
        .json({ error: "Please provide required information's" });
    }
    const checkUserName = await AdminModel.findOne({
      username: username.replaceAll(" ", ""),
    });

    if (checkUserName) {
      return res.status(404).json({ error: "Username already exists" });
    }

    const hash_pass = bcrypt.hashSync(password, 12);

    const newAdmin = new AdminModel({
      username,
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
