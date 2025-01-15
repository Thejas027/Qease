import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SidebarPatient from "./SidebarPatient";

function PatientBooking() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDoctorSlots, setSelectedDoctorSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(""); // For tracking the selected slot
  const navigate = useNavigate();

  // Fetch departments on component mount
  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/departments/"
        );
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  // Fetch doctors when a department is selected
  useEffect(() => {
    const fetchDoctors = async () => {
      if (selectedDepartment) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/departments/${selectedDepartment}`
          );
          setDoctors(response.data);
        } catch (error) {
          console.error("Error fetching doctors:", error);
        }
      }
    };
    fetchDoctors();
  }, [selectedDepartment]);

  // Fetch available slots when a doctor is selected
  useEffect(() => {
    const fetchDoctorSlots = async () => {
      if (selectedDoctor) {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/appointments/slots/${selectedDoctor}/${selectedDepartment}`
          );
          setSelectedDoctorSlots(response.data.availableSlots);
        } catch (error) {
          console.error("Error fetching doctor slots:", error);
        }
      }
    };
    fetchDoctorSlots();
  }, [selectedDoctor, selectedDepartment]);

  // Handle department selection
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  // Handle doctor selection
  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  // Handle slot selection
  const handleSlotChange = (e) => {
    setSelectedSlot(e.target.value);
  };

  // Handle proceed button click
  const handleProceed = () => {
    if (selectedDepartment && selectedDoctor && selectedSlot) {
      navigate("/patient-form", {
        state: {
          department: selectedDepartment,
          doctor: selectedDoctor,
          slot: selectedSlot,
        },
      });
    }
  };

  return (
    <div className="flex">
      <SidebarPatient />
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-100 to-purple-300">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-center text-2xl font-bold text-purple-900 mb-6">
            Select Department
          </h1>

          {/* Department Selection */}
          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-purple-900 font-medium mb-2"
            >
              Department:
            </label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              className="w-full border-2 border-purple-300 rounded-md px-3 py-2"
            >
              <option value="">Select a Department</option>
              {departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          {/* Doctor Selection */}
          <div className="mb-4">
            <label
              htmlFor="doctor"
              className="block text-purple-900 font-medium mb-2"
            >
              Doctors:
            </label>
            <select
              id="doctor"
              value={selectedDoctor}
              onChange={handleDoctorChange}
              className="w-full border-2 border-purple-300 rounded-md px-3 py-2"
            >
              <option value="">Select a Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name}
                </option>
              ))}
            </select>
          </div>

          {/* Available Slots */}
          {selectedDoctor && selectedDoctorSlots.length > 0 && (
            <div className="mb-4">
              <label className="block text-purple-900 font-medium mb-2">
                Available Slots:
              </label>
              <select
                value={selectedSlot}
                onChange={handleSlotChange}
                className="w-full border-2 border-purple-300 rounded-md px-3 py-2"
              >
                <option value="">Select a Slot</option>
                {selectedDoctorSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot} {/* Assuming slot is a string like "10:00 AM" */}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            disabled={!selectedDepartment || !selectedDoctor || !selectedSlot}
            className={`${
              !selectedDepartment || !selectedDoctor || !selectedSlot
                ? "bg-gray-400"
                : "bg-purple-500"
            } text-white w-full py-2 rounded-md font-medium hover:bg-purple-600 transition-all`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientBooking;
