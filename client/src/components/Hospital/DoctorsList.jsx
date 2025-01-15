import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./SidebarHospital";

function DoctorsList() {
  const { departmentId } = useParams(); // Get department ID from the route
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/departments/${departmentId}`
        );
        setDoctors(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load doctors. Please try again." + err.message);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [departmentId]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-medium">Loading...</div>
    );
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="min-h-screen bg-gray-100 py-10 px-4 w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Doctors List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Dr. {doctor.name}
              </h2>
              <p className="text-gray-600 mb-4">
                Total Appointments: {doctor.totalAppointments}
              </p>
              <p className="text-gray-600">Available Slots:</p>
              <ul className="list-disc list-inside">
                {doctor.slots.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsList;
