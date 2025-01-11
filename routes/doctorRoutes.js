const express = require('express');
const { getDoctorsByDepartment, getDoctorDepartment } = require('../controllers/doctorController');

const router = express.Router();

// Existing route to get doctors by department
router.get('/:department', getDoctorsByDepartment);

// New route to get a doctor's department by doctor ID
router.get('/department/:doctorId', getDoctorDepartment);

module.exports = router;
