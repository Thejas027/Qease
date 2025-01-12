const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  department: String,
  slot: String,
  queueNumber: Number,
  createdAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Delayed"],
    default: "Scheduled",
  },
  estimatedDelay: { type: Number, default: 0 }, // in minutes
});

module.exports = mongoose.model("Appointment", appointmentSchema);
