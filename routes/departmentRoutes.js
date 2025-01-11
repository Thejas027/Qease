const express = require("express");
const Department = require("../models/Department");
const { getDoctorsByDepartment } = require('../controllers/departmentController');

const router = express.Router();

// Get all departments
router.get("/", async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get doctors by department ID
router.get('/:departmentId', getDoctorsByDepartment);

module.exports = router;
