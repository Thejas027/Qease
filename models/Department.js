const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures department names are unique
  },
  description: {
    type: String,
    default: "No description provided.",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  totalAppointments: {
    type: Number,
    default: 0, // Start with 0
  },
});

module.exports = mongoose.model("Department", DepartmentSchema);
