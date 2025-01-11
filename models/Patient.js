const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  bloodGroup: { type: String },
  phoneNumber: { type: String },
  address: { type: String },
  role: { type: String, default: "patient" },
});

module.exports = mongoose.model("Patient", patientSchema);
