const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Department = require("./models/Department");
const Doctor = require("./models/Doctor");
const Patient = require("./models/Patient");
const Hospital = require("./models/Hospital");
const Appointment = require("./models/Appointment");

// Load environment variables
dotenv.config();

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Seeder function to delete old data and insert new data
const seedData = async () => {
  try {
    // Clear existing data
    await Department.deleteMany();
    await Doctor.deleteMany();
    await Patient.deleteMany();
    await Hospital.deleteMany();
    await Appointment.deleteMany();

    console.log("Old data deleted successfully");

    // Insert Departments
    const departments = await Department.insertMany([
      { name: "Cardiology", description: "Heart-related treatments" },
      { name: "Neurology", description: "Brain and nervous system treatments" },
      { name: "Orthopedics", description: "Bone and joint treatments" },
    ]);
    console.log("Departments seeded:", departments);

    // Insert Doctors and link them to Departments
    const doctors = await Doctor.insertMany([
      {
        name: "Dr. Smith",
        department: departments[0]._id,
        slots: ["9:00 AM", "11:00 AM", "1:00 PM"],
      },
      {
        name: "Dr. Johnson",
        department: departments[1]._id,
        slots: ["10:00 AM", "12:00 PM", "2:00 PM"],
      },
      {
        name: "Dr. Lee",
        department: departments[2]._id,
        slots: ["8:00 AM", "10:00 AM", "12:00 PM"],
      },
    ]);
    console.log("Doctors seeded:", doctors);

    // Insert Patients
    const patients = await Patient.insertMany([
      {
        name: "John Doe",
        username: "johndoe",
        password: "password123",
        email: "john.doe@example.com",
        age: 30,
        gender: "Male",
        bloodGroup: "O+",
        phoneNumber: "1234567890",
        address: "123 Street, City",
      },
      {
        name: "Jane Smith",
        username: "janesmith",
        password: "password456",
        email: "jane.smith@example.com",
        age: 25,
        gender: "Female",
        bloodGroup: "A+",
        phoneNumber: "0987654321",
        address: "456 Avenue, City",
      },
    ]);
    console.log("Patients seeded:", patients);

    // Insert Hospitals
    const hospitals = await Hospital.insertMany([
      {
        name: "City Hospital",
        username: "cityhospital",
        password: "hospital123",
        address: "789 Boulevard, City",
      },
    ]);
    console.log("Hospitals seeded:", hospitals);

    // Insert Appointments and link them to Doctors and Patients
    const appointments = await Appointment.insertMany([
      {
        patient: patients[0]._id,
        doctor: doctors[0]._id,
        date: "2025-01-15",
        time: "9:00 AM",
        reason: "Routine checkup",
      },
      {
        patient: patients[1]._id,
        doctor: doctors[1]._id,
        date: "2025-01-16",
        time: "10:00 AM",
        reason: "Neurological consultation",
      },
    ]);
    console.log("Appointments seeded:", appointments);

    console.log("Seeding complete");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seeder function
seedData();
