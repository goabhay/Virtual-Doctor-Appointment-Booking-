const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const SECRET = "asidfwqoiedfsoiweqknsdkfoijqwekfojei";

module.exports.isLoggedIn = async function (req, res, next) {
  try {
    const token = req.cookies["login"];
    console.log(token);
    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }
    try {
      const uid = jwt.verify(token, SECRET);
      if (!uid) {
        res.json({
          message: "sorry",
        });
      }

      const user = await User.findById(uid._id);

      if (user) {
        req.id = user._id;

        next();
      } else {
        return res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
