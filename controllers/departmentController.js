const Department = require("../models/Department");
const Doctor = require("../models/Doctor"); // Assuming you have this model

// Function to get doctors by department
exports.getDoctorsByDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;

    // Find the department first (optional but recommended to confirm it exists)
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Find doctors associated with the department
    const doctors = await Doctor.find({ department: departmentId });

    if (doctors.length === 0) {
      return res
        .status(404)
        .json({ message: "No doctors found for this department" });
    }

    // Return doctors list
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
