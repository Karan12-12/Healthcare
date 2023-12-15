const mongoose = require("mongoose");

const appointmentScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    Symptoms: {
      type: String,
      required: true,
    },
    Departments: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const appointments = mongoose.model("appointments", appointmentScheme);

module.exports = appointments;
