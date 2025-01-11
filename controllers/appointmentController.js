const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const Department = require('../models/Department'); // Assuming you have a Department model

exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, department, slot } = req.body;

  try {
    // Check if the doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Check if the department matches the doctor's department
    if (doctor.department.toString() !== department) {
      return res.status(400).json({ message: "Doctor does not belong to the selected department" });
    }

    // Check if the slot is available for the doctor
    const existingAppointment = await Appointment.findOne({ doctorId, slot });
    if (existingAppointment) {
      return res.status(400).json({ message: "The selected slot is already booked" });
    }

    // Check if the slot is valid for the doctor (assuming doctor schema has slots)
    if (!doctor.slots.includes(slot)) {
      return res.status(400).json({ message: "Invalid slot for this doctor" });
    }

    // If no existing appointment, proceed to book the appointment
    const queueNumber = (await Appointment.countDocuments({ department })) + 1;

    const newAppointment = new Appointment({
      patientId,
      doctorId,
      department,
      slot,
      queueNumber,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully", queueNumber });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


exports.getTotalBookingsForDepartment = async (req, res) => {
  const { departmentId } = req.params;

  try {
    // Find the department by ID
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Get the count of appointments for this department (use department ID)
    const totalBookings = await Appointment.countDocuments({ department: department._id });

    res.status(200).json({ totalBookings });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Controller to get the total number of appointments for a specific doctor
exports.getTotalBookingsForDoctor = async (req, res) => {
  const { doctorId } = req.params;

  try {
    // Find the doctor
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Get the count of appointments for this doctor
    const totalBookings = await Appointment.countDocuments({ doctorId: doctor._id });

    res.status(200).json({ totalBookings });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




// 
// 
// 
exports.getBookingsForDepartmentAndDoctor = async (req, res) => {
  const { doctorId, departmentId } = req.params;

  try {
    // Find the department by ID (use departmentId instead of department name)
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Find the doctor by ID
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Get the count of appointments for this department using department ID
    const totalBookingsForDepartment = await Appointment.countDocuments({ department: department._id });

    // Get the count of appointments for this doctor using doctor ID
    const totalBookingsForDoctor = await Appointment.countDocuments({ doctorId: doctor._id });

    res.status(200).json({
      totalBookingsForDepartment,
      totalBookingsForDoctor,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};