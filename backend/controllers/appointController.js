const appointment = require("../models/appointModel");
const mongoose = require("mongoose");

module.exports.bookAppointment = async (req, res) => {
  try {
    const { category, desc } = req.body;

    const data = {
      patient: req.id,
      category,
      desc,
    };

    const appoint = await appointment.create(data);
    res.status(201).json({
      status: "success",
      data: appoint,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

module.exports.assignDoctor = async (req, res) => {
  try {
    const id = req.params.id;
    const did = req.id;

    const appoint = await appointment.findById(id);

    if (!id || !did) {
      return res.status(400).json({
        status: "fail",
        error: "Appointment ID and Doctor ID are required.",
      });
    }

    if (!appoint) {
      return res.status(404).json({
        status: "fail",
        error: "Appointment not found.",
      });
    }

    appoint.doctor.push(did);
    await appoint.save();

    res.status(200).json({
      status: "success",
      data: appoint,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "error",
      error: "Internal server error.",
    });
  }
};

module.exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appoint = await appointment.findByIdAndDelete(id);

    if (!appoint) {
      return res.status(404).json({
        status: "fail",
        error: "Appointment not found.",
      });
    }

    res.status(200).json({
      status: "success",
      data: appoint,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      error: err.message,
    });
  }
};

module.exports.getAllAppointment = async (req, res) => {
  try {
    const appointments = await appointment
      .find()
      .populate("doctor")
      .populate("patient");
    res.status(200).json({
      status: "success",
      data: appointments,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err.message,
    });
  }
};
