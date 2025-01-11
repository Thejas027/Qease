const Doctor = require('../models/Doctor');

exports.getDoctorsByDepartment = async (req, res) => {
  try {
    const { department } = req.params;
    console.log("Department ID:", department);
    const doctors = await Doctor.find({ department });
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
