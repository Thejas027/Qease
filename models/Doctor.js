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
});

module.exports = mongoose.model("Doctor", DoctorSchema);

