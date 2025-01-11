const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Patient = require("../models/Patient");
const Hospital = require("../models/Hospital");

const generateToken = (user) => {
  return jwt.sign(
    { username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Register User
exports.register = async (req, res) => {
  const { name, username, password, role, age, gender, address } = req.body;

  try {
    let User;
    if (role === "patient") {
      User = Patient;
    } else if (role === "hospital") {
      User = Hospital;
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 8);

    // Create user
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      age,
      gender,
      address,
      role,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Login User
exports.login = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const User = role === "patient" ? Patient : Hospital;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = generateToken(user);

    // Set token in an HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Use secure cookies only in production
      maxAge: 1000 * 60 * 60 * 24, // Cookie expires in 1 day
    });

    // Send response with user data and success message
    return res.status(200).json({
      message: "Logged in successfully",
      user: {
        id: user._id,
        username: user.username,
        role: role,
      },
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server error" });
  }
};

// In authController.js
exports.logout = (req, res) => {
  res.clearCookie("authToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "Logged out successfully" });
};
