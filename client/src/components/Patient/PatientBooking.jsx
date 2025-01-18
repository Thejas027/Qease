import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientBooking() {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
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

  // Handle department selection
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  // Handle doctor selection
  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
  };

  // Handle proceed button click
  // Handle proceed button click
  const handleProceed = () => {
    if (selectedDepartment && selectedDoctor) {
      const selectedDepartmentDetails = departments.find(
        (department) => department._id === selectedDepartment
      );
      const selectedDoctorDetails = doctors.find(
        (doctor) => doctor._id === selectedDoctor
      );

      navigate("/appointment-book-form", {
        state: {
          departmentName: selectedDepartmentDetails?.name,
          doctorName: selectedDoctorDetails?.name,
        },
      });
    }
  };

  return (
    <div className="flex">
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

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            disabled={!selectedDepartment || !selectedDoctor}
            className={`${
              !selectedDepartment || !selectedDoctor
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
