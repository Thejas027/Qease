const express = require("express");
const {
  bookAppointment,
  getTotalBookingsForDepartment,
  getTotalBookingsForDoctor,
  getBookingsForDepartmentAndDoctor,
} = require("../controllers/appointmentController");

const router = express.Router();

// Route to book an appointment
router.post("/", bookAppointment);

// Route to get the total number of bookings for a department
router.get("/bookings/department/:departmentId", getTotalBookingsForDepartment);

// Route to get the total number of bookings for a doctor
router.get("/bookings/doctor/:doctorId", getTotalBookingsForDoctor);

// Route to get the total number of bookings  from doc and dep
router.get(
  "/bookings/department/:departmentId/doctor/:doctorId",
  getBookingsForDepartmentAndDoctor
);
module.exports = router;
