const Appointment = require('../models/Appointment');
const Patient = require('../models/Patient');

exports.bookAppointment = async (req, res) => {
  const { patientId, doctorId, department, slot } = req.body;

  try {
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
