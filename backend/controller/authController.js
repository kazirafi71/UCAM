const UserModel = require("../model/UserModel");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

module.exports.login__controller = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(404)
        .json({ error: "Please provide required information" });
    }

    const checkUser = await UserModel.findOne({
      username: username,
    });

    if (!checkUser) {
      return res.status(404).json({ error: "Invalid credentials" });
    }
    const checkPass = await bcrypt.compareSync(password, checkUser.password);
    if (!checkPass) {
      return res.status(404).json({ error: "Invalid credentials" });
    }

    var token = jwt.sign(
      { _id: checkUser._id, username: checkUser.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    return res.status(201).json({ success: "Login successful", token });
  } catch (error) {
    return res.status(404).json({ error: "Something went wrong" });
  }
};

module.exports.verifyToken__controller = async (req, res, next) => {
  try {
    const { token } = req.body;
    var decoded = await jwt.verify(token, process.env.SECRET_KEY);
    return res.status(201).json({ success: "Token is valid now" });
  } catch (error) {
    return res.status(404).json({ error: "Invalid token" });
  }
};
