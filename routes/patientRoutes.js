const express = require('express');
const { register } = require('../controllers/patientController');

const router = express.Router();
router.post('/register', register);

module.exports = router;
