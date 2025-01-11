const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cookieParser()); // Use cookie-parser to read cookies

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

app.use("/api/auth", authRoutes); // Use the authRoutes for all authentication-related routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
