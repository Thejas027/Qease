import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./SidebarHospital";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/departments/"
        );
        setDepartments(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load departments. Please try again." + err.message);
        setLoading(false);
      }
    };

    fetchDepartments();
  }, []);

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
          Departments
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {departments.map((department) => (
            <div
              key={department._id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Department Name: {department.name}
              </h2>
              <p className="text-gray-600 mb-4">
                About: {department.description}
              </p>
              <button
                onClick={() => navigate(`/doctors/${department._id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View Doctors
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DepartmentList;
