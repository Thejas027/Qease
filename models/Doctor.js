const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  slots: {
    type: [String], // Array of strings for time slots
    required: true,
  },
  totalAppointments: {
    type: Number,
    default: 0, // Start with 0
  },
});

module.exports = mongoose.model("Doctor", DoctorSchema);
