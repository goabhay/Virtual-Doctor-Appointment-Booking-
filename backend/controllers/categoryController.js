const express = require("express");
const userModel = require("../models/userModel");

module.exports.getCategories = async (req, res) => {
  try {
    const categories = await userModel
      .find({ role: "doctor", speciality: { $nin: ["", null] } })
      .select("speciality");

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    console.error("Error fetching categories:", err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: err.message,
    });
  }
};
module.exports.categoryDoctor = async (req, res) => {
  try {
    const spec = req.query.spec;

    const doctors = await userModel.find({ role: "doctor", speciality: spec });

    res.status(200).json({
      message: "Success",
      data: doctors,
    });
  } catch (err) {
    console.error("Error fetching doctors:", err);

    res.status(500).json({
      message: "Failed to fetch doctors",
      error: err.message,
    });
  }
};
