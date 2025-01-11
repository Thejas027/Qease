const express = require("express");
const { login, register, logout } = require("../controllers/authController");
const { isAuthenticated } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Protected routes with authentication check
router.get("/patient", isAuthenticated, (req, res) => {
  if (req.user.role !== "patient") {
    return res.status(403).json({ message: "Access denied" });
  }
  res.status(200).json({ message: "Welcome, Patient!" });
});

router.get("/hospital", isAuthenticated, (req, res) => {
  if (req.user.role !== "hospital") {
    return res.status(403).json({ message: "Access denied" });
  }
  res.status(200).json({ message: "Welcome, Hospital!" });
});

// Added the /protected route to check authentication and return user data
router.get("/protected", isAuthenticated, (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.json({ message: "You are authenticated", user: req.user });
});

module.exports = router;
