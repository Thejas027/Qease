require("dotenv").config(); // Load environment variables from .env
const connectDB = require("./config/db"); // Adjust path if needed
const Appointment = require("./models/Appointment");
const Department = require("./models/Department");
const Doctor = require("./models/Doctor");
const Hospital = require("./models/Hospital");
const Patient = require("./models/Patient");
const Slot = require("./models/Slot");
const User = require("./models/User");

const seedDatabase = async () => {
  try {
    console.log("Starting database seeding...");

    // Department seed data
    const departments = [
      { name: "Cardiology", description: "Heart specialists" },
      { name: "Neurology", description: "Brain and nerve specialists" },
    ];
    for (const department of departments) {
      await Department.updateOne(
        { name: department.name },
        { $set: department },
        { upsert: true }
      );
    }

    // Doctor seed data
    const doctors = [
      {
        name: "Dr. John Doe",
        department: await Department.findOne({ name: "Cardiology" }).then(
          (dep) => dep._id
        ),
      },
      {
        name: "Dr. Jane Smith",
        department: await Department.findOne({ name: "Neurology" }).then(
          (dep) => dep._id
        ),
      },
    ];
    for (const doctor of doctors) {
      await Doctor.updateOne(
        { name: doctor.name },
        { $set: doctor },
        { upsert: true }
      );
    }

    // Hospital seed data
    const hospitals = [
      {
        name: "City Hospital",
        username: "city_hospital",
        password: "password123",
        address: "123 Main St",
      },
    ];
    for (const hospital of hospitals) {
      await Hospital.updateOne(
        { username: hospital.username },
        { $set: hospital },
        { upsert: true }
      );
    }

    // Patient seed data
    const patients = [
      {
        name: "Alice Brown",
        username: "alice123",
        password: "secure123",
        age: 30,
        gender: "Female",
        phoneNumber: "555-1234",
      },
    ];
    for (const patient of patients) {
      await Patient.updateOne(
        { username: patient.username },
        { $set: patient },
        { upsert: true }
      );
    }

    // Slot seed data
    const slots = [
      {
        doctorId: await Doctor.findOne({ name: "Dr. John Doe" }).then(
          (doc) => doc._id
        ),
        time: "10:00 AM",
      },
      {
        doctorId: await Doctor.findOne({ name: "Dr. Jane Smith" }).then(
          (doc) => doc._id
        ),
        time: "2:00 PM",
      },
    ];
    for (const slot of slots) {
      await Slot.updateOne(
        { doctorId: slot.doctorId, time: slot.time },
        { $set: slot },
        { upsert: true }
      );
    }

    console.log("Database seeding completed successfully!");
    process.exit(0); // Exit the process after seeding
  } catch (err) {
    console.error("Error during database seeding:", err.message);
    process.exit(1); // Exit with error status
  }
};

// Connect to MongoDB and start seeding
connectDB().then(() => seedDatabase());
