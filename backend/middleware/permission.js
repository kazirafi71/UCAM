const jwt = require("jsonwebtoken");
const AdminModel = require("../model/AdminModel");
const UserModel = require("../model/UserModel");

// Check admin permission

module.exports.checkAdmin = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({
      error: "You are not authorized.Please login",
    });
  }
  let token = authorization.split(" ")[1];
  try {
    var verify_token = jwt.verify(token, process.env.SECRET_KEY);
    const getAdmin = await AdminModel.findOne({ _id: verify_token?._id });

    req.admin = getAdmin;
    next();
  } catch (error) {
    return res.status(400).json({
      error: "You are not authorized.Please login",
    });
  }
};

// Check teacher permission

module.exports.checkTeacher = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({
      error: "You are not authorized.Please login",
    });
  }
  let token = authorization.split(" ")[1];
  try {
    var verify_token = jwt.verify(token, process.env.SECRET_KEY);

    const getTeacher = await UserModel.findOne({ _id: verify_token?._id });

    if (getTeacher.role === "Teacher") {
      req.teacher = getTeacher;
      next();
    } else {
      return res.status(400).json({
        error: "You are not authorized.Please login",
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: "You are not authorized.Please login",
    });
  }
};

// Check users permission

module.exports.checkLogin = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({
      error: "Access denied",
    });
  }
  let token = authorization.split(" ")[1];
  try {
    var verify_token = jwt.verify(token, process.env.SECRET_KEY);
    const getUser = await UserModel.findOne({ _id: verify_token?._id });

    req.user = getUser;
    next();
  } catch (error) {
    return res.status(400).json({
      error: "You are not authorized.Please login",
    });
  }
};
