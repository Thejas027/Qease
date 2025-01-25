const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Department = require("../models/Department"); // Assuming you have a Department model
const Patient = require("../models/Patient");

exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, department, slot, reason } = req.body;

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

    // Create a new appointment with the reason field
    const newAppointment = new Appointment({
      patientId,
      doctorId,
      department,
      slot,
      reason,
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
    const currentAppointment = await Appointment.findOne({ patientId })
      .populate("doctorId", "name")
      .populate("patientId", "name")
      .populate("department", "name");

    if (!currentAppointment) {
      return res
        .status(404)
        .json({ message: "Appointment not found for this patient" });
    }

    const { queueNumber, doctorId, department, slot } = currentAppointment;

    // Fetch patients before the current one
    const remainingPatients = await Appointment.find({
      doctorId,
      department,
      status: "Scheduled",
      queueNumber: { $lt: queueNumber },
    })
      .sort({ queueNumber: -1 })
      .populate("patientId", "name")
      .select("queueNumber slot patientId");

    const remainingCount = remainingPatients.length;

    res.status(200).json({
      currentPatient: {
        queueNumber,
        patientName: currentAppointment.patientId.name,
        doctorName: currentAppointment.doctorId.name,
        departmentName: currentAppointment.department?.name || "Unknown",
        appointmentTime: slot,
      },
      remainingPatients: remainingPatients.map((patient) => ({
        queueNumber: patient.queueNumber,
        appointmentTime: patient.slot,
        patientName: patient.patientId?.name || "Unknown",
      })),
      remainingCount,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// to cancel the appointment
exports.cancelAppointment = async (req, res) => {
  const { appointmentId } = req.body;

  try {
    // Find the appointment
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Check if the appointment is already cancelled or completed
    if (appointment.status === "Cancelled") {
      return res
        .status(400)
        .json({ message: "Appointment is already cancelled" });
    }
    if (appointment.status === "Completed") {
      return res
        .status(400)
        .json({ message: "Completed appointments cannot be cancelled" });
    }

    // Delete the appointment from the database
    await Appointment.deleteOne({ _id: appointmentId });

    // Update the doctor's details
    const doctor = await Doctor.findById(appointment.doctorId);
    if (doctor) {
      doctor.totalAppointments -= 1;

      // Ensure the slot is added back to the doctor's available slots
      if (!doctor.slots.includes(appointment.slot)) {
        doctor.slots.push(appointment.slot);
        doctor.slots.sort(); // Optional: Sort slots if necessary for ordering
      }
      await doctor.save();
    }

    // Update the department's totalAppointments
    const department = await Department.findById(appointment.department);
    if (department) {
      department.totalAppointments -= 1;
      await department.save();
    }

    // Update the patient's details and appointment status
    const patient = await Patient.findById(appointment.patientId);
    if (patient) {
      patient.totalAppointments -= 1;

      // Find the status entry for this appointment and update its status to "Cancelled"
      const appointmentStatus = patient.appointmentStatuses.find(
        (status) => status.appointmentId.toString() === appointmentId
      );
      if (appointmentStatus) {
        appointmentStatus.status = "Cancelled";
      }

      await patient.save();
    }

    res
      .status(200)
      .json({ message: "Appointment cancelled and deleted successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// get all the patients booking
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .select(
        "patientId doctorId department slot reason queueNumber status createdAt "
      )
      .populate("patientId", "gender username name status age ")
      .populate("doctorId", "name")
      .populate("department", "name");

    res.status(200).json({
      success: true,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch appointments",
      error: error.message,
    });
  }
};

//
//
exports.getTotalBookingsForAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find(); // Fetch all departments
    const bookings = await Promise.all(
      departments.map(async (department) => {
        const totalBookings = await Appointment.countDocuments({
          department: department._id,
        });
        return {
          departmentId: department._id,
          departmentName: department.name,
          totalBookings,
        };
      })
    );

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
