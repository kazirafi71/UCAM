const jwt = require("jsonwebtoken");
const AdminModel = require("../model/AdminModel");

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
