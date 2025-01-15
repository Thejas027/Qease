import { useEffect, useState } from "react";
import axios from "axios";

const DepartmentBookings = () => {
  const [departmentBookings, setDepartmentBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch department bookings
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/appointments/bookings/all-departments"
        );
        setDepartmentBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch bookings" + err.message);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Total Bookings by Department
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {departmentBookings.map((dept) => (
          <div
            key={dept.departmentId}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{dept.departmentName}</h2>
            <p className="text-gray-700">
              Total Bookings: {dept.totalBookings}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentBookings;
