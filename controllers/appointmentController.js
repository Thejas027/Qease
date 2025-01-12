const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Department = require("../models/Department"); // Assuming you have a Department model
const Patient = require("../models/Patient");

exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, department, slot } = req.body;

  try {
    // Check if the doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    // Check if the department exists
    const departmentRecord = await Department.findById(department);
    if (!departmentRecord) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Check if the patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Check if the department matches the doctor's department
    if (doctor.department.toString() !== department) {
      return res
        .status(400)
        .json({ message: "Doctor does not belong to the selected department" });
    }

    // Check if the slot is available for the doctor
    const existingAppointment = await Appointment.findOne({ doctorId, slot });
    if (existingAppointment) {
      return res
        .status(400)
        .json({ message: "The selected slot is already booked" });
    }

    // Check if the slot is valid for the doctor
    if (!doctor.slots.includes(slot)) {
      return res.status(400).json({ message: "Invalid slot for this doctor" });
    }

    // Generate queue number for the department
    const queueNumber = (await Appointment.countDocuments({ department })) + 1;

    // Create a new appointment
    const newAppointment = new Appointment({
      patientId,
      doctorId,
      department,
      slot,
      queueNumber,
      status: "Scheduled",
    });

    await newAppointment.save();

    // Increment the doctor's total bookings
    doctor.totalAppointments += 1;
    await doctor.save();

    // Increment the department's total bookings
    departmentRecord.totalAppointments += 1;
    await departmentRecord.save();

    // Increment the patient's total bookings and add status
    patient.totalAppointments += 1;
    patient.appointmentStatuses.push({
      appointmentId: newAppointment._id,
      status: "Booked",
    });
    await patient.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      queueNumber,
      status: "Booked",
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// to get the total number of bookings for a each dep
exports.getTotalBookingsForDepartment = async (req, res) => {
  const { departmentId } = req.params;

  try {
    // Find the department by ID
    const department = await Department.findById(departmentId);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Get the count of appointments for this department (use department ID)
    const totalBookings = await Appointment.countDocuments({
      department: department._id,
    });

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
    const totalBookings = await Appointment.countDocuments({
      doctorId: doctor._id,
    });

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
    const totalBookingsForDepartment = await Appointment.countDocuments({
      department: department._id,
    });

    // Get the count of appointments for this doctor using doctor ID
    const totalBookingsForDoctor = await Appointment.countDocuments({
      doctorId: doctor._id,
    });

    res.status(200).json({
      totalBookingsForDepartment,
      totalBookingsForDoctor,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// to get the queue status

exports.getQueueStatus = async (req, res) => {
  const { patientId } = req.params;

  try {
    // Find the current patient's appointment
    const currentAppointment = await Appointment.findOne({ patientId })
      .populate("doctorId", "name") // Populate doctor name
      .populate("patientId", "name"); // Populate patient name

    if (!currentAppointment) {
      return res
        .status(404)
        .json({ message: "Appointment not found for this patient" });
    }

    const { queueNumber, doctorId, department, slot } = currentAppointment;

    // Find remaining patients in the queue for the same department and doctor
    const remainingPatients = await Appointment.find({
      doctorId,
      department,
      status: "Scheduled", // Only count patients with scheduled appointments
      queueNumber: { $gt: queueNumber }, // Get patients with queueNumber greater than current
    })
      .sort({ queueNumber: 1 }) // Sort by queueNumber
      .populate("patientId", "name") // Include patient name in remaining patients
      .select("queueNumber slot patientId"); // Select fields to include in response

    const remainingCount = remainingPatients.length; // Count remaining patients

    res.status(200).json({
      currentPatient: {
        queueNumber,
        patientName: currentAppointment.patientId.name, // Patient name
        doctorName: currentAppointment.doctorId.name, // Doctor name
        departmentName: department, // Department name
        appointmentTime: slot,
      },
      remainingPatients: remainingPatients.map((patient) => ({
        queueNumber: patient.queueNumber,
        appointmentTime: patient.slot,
        patientName: patient.patientId?.name || "Unknown", // Handle cases where patientId might not exist
      })),
      remainingCount, // Dynamic count of remaining patients
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
