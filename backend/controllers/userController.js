const mongoose = require("mongoose");
const User = require("../models/userModel");
const appointment = require("../models/appointModel");
const uploadOnCloudinary = require("../utils/cloudinary");

module.exports.getUsers = async function (req, res) {
  try {
    const users = await User.find();
    if (users.length > 0) {
      res.status(200).json({
        status: "success",
        data: users,
      });
    } else {
      res.status(404).json({
        status: "fail",
        err: "No users found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      err: err.message,
    });
  }
};

module.exports.signup = async function (req, res) {
  try {
    const { name, email, password, speciality, role } = req.body;

    const avtar = req.file ? req.file.path : null;
    const response = null;
    if (avtar != null) response = await uploadOnCloudinary(avtar);

    const user = await User.create({
      name: name,
      email: email,
      password: password,
      speciality: speciality,
      role: role,
      avtar: response?.url ?? null,
    });

    res.status(201).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ status: "fail", error: err.message });
  }
};

module.exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ status: "fail", error: "User not found" });
    } else {
      const isPasswordValid = await user.checkPassword(password);
      if (isPasswordValid) {
        const token = user.createToken();

        res.cookie("login", token, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({
          status: "success",
          data: user,
        });
      } else {
        res.status(401).json({ status: "fail", error: "Invalid password" });
      }
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.deleteUser = async function (req, res) {
  try {
    const userId = req.params.id;
    console.log("delete", userId);
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ status: "fail", error: "User not found" });
    }
    res.json({ status: "success", data: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.logout = async function (req, res) {
  try {
    res.clearCookie("login", { httpOnly: true });
    res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "fail", error: err.message });
  }
};

module.exports.getUser = async function (req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ status: "fail", error: "User not found" });
    } else {
      res.status(200).json({
        status: "success",
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({ status: "fail", error: err.message });
  }
};
