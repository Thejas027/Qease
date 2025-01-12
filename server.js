const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// Import routes
const authRoutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const patientRoutes = require("./routes/patientRoutes");
// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser()); // Parse cookies

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies to be sent with requests
  })
);

// MongoDB Connection
const connectDB = require("./config/db");
connectDB();

// Define routes
app.use("/api/auth", authRoutes); // Authentication-related routes
app.use("/api/doctors", doctorRoutes); // Doctor-related routes
app.use("/api/appointments", appointmentRoutes); // Appointment-related routes
app.use("/api/departments", departmentRoutes);
app.use("/api/patient", patientRoutes);
// Default error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
