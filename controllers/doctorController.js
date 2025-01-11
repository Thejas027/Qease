const Doctor = require("../models/Doctor");
const Department = require("../models/Department");

// Function to get doctors by department (keep as is)
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

// New function to get the department of a specific doctor by doctorId
exports.getDoctorDepartment = async (req, res) => {
  try {
    const { doctorId } = req.params;

    // Find the doctor by ID and populate the department field
    const doctor = await Doctor.findById(doctorId).populate("department");

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Return the department information
    res
      .status(200)
      .json({ doctorName: doctor.name, department: doctor.department });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
