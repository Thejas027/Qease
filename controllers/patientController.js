const Patient = require("../models/Patient");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { name, username, password, age, gender, address, role } = req.body;
  try {
    const existingUser = await Patient.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const newPatient = new Patient({
      name,
      username,
      password: hashedPassword,
      age,
      gender,
      address,
      role,
    });

    await newPatient.save();
    res.status(201).json({ message: "Patient registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
