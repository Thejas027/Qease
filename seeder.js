const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const Patient = require("./models/Patient");
const Hospital = require("./models/Hospital");

dotenv.config();

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample data
const seedPatients = async () => {
  const patients = [
    {
      name: "John Doe",
      username: "john123",
      password: await bcrypt.hash("password123", 10),
      age: 30,
      gender: "Male",
    },
    {
      name: "Jane Smith",
      username: "jane123",
      password: await bcrypt.hash("password123", 10),
      age: 28,
      gender: "Female",
    },
    {
      name: "Mike Johnson",
      username: "mike123",
      password: await bcrypt.hash("password123", 10),
      age: 35,
      gender: "Male",
    },
  ];

  try {
    await Patient.deleteMany(); // Clear existing patients
    await Patient.insertMany(patients);
    console.log("Patients seeded!");
  } catch (err) {
    console.error("Error seeding patients:", err);
  }
};

const seedHospital = async () => {
  const hospital = {
    name: "City General Hospital",
    username: "cityhospital",
    password: await bcrypt.hash("hospital123", 10),
    address: "123 Main St, Springfield",
  };

  try {
    await Hospital.deleteMany(); // Clear existing hospital data
    await Hospital.create(hospital);
    console.log("Hospital seeded!");
  } catch (err) {
    console.error("Error seeding hospital:", err);
  }
};

// Seed data
const seedData = async () => {
  await seedPatients();
  await seedHospital();
  mongoose.connection.close();
};

seedData();
