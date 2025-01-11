const express = require('express');
const { getDoctorsByDepartment } = require('../controllers/doctorController');

const router = express.Router();
router.get('/:department', getDoctorsByDepartment);

module.exports = router;
