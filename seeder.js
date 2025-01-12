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
    db.appointments.insertMany([
      {
        patientId: ObjectId("6782b363cc03f9e0a708a2f5"),
        doctorId: ObjectId("64c99bf9e935c91ebc1c688b"),
        department: "Neurology",
        slot: "12:00 PM",
        queueNumber: 1,
        status: "Completed",
      },
      {
        patientId: ObjectId("64c99bf9e935c91ebc1c688c"),
        doctorId: ObjectId("64c99bf9e935c91ebc1c688b"),
        department: "Neurology",
        slot: "12:15 PM",
        queueNumber: 2,
        status: "Scheduled",
      },
      {
        patientId: ObjectId("64c99bf9e935c91ebc1c688d"),
        doctorId: ObjectId("64c99bf9e935c91ebc1c688b"),
        department: "Neurology",
        slot: "12:30 PM",
        queueNumber: 3,
        status: "Scheduled",
      },
    ]);

    console.log("Seeding complete");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seeder function
seedData();
