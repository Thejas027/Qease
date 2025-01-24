const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
  },
  slot: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true, // Making it required for the booking
  },
  queueNumber: Number,
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Delayed", "Cancelled"],
    default: "Scheduled",
  },
  estimatedDelay: { type: Number, default: 0 }, // in minutes
});

module.exports = mongoose.model("Appointment", appointmentSchema);
