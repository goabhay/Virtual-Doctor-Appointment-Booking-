const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    doctor: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    category: String,
    desc: String,
    emergency: String,
    status: {
      type: String,
      enum: ["pending", "fulfilled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const AppointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = AppointmentModel;
