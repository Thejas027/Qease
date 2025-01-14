
import { useEffect, useState } from "react";
import DepartmentBookings from "./DepartmentBookings";
import Sidebar from "./SidebarHospital";
const QueueStatus = () => {
  const [allAppointments, setAllAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/appointments/get-all-appointments`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch all appointments");
        }
        const data = await response.json();
        setAllAppointments(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllAppointments();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  const filteredAppointments = allAppointments.filter((appointment) => {
    const matchesSearch =
      appointment.patientId.age.toString().includes(searchQuery) ||
      appointment.doctorId.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      appointment.department.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "All" || appointment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-100 min-h-screen w-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-indigo-600 text-center">
            Queue Status
          </h1>
        </div>
        <div>
          <DepartmentBookings />
        </div>
        {/* Filters */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Search by age, doctor, or department..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full md:w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            >
              <option value="All">All</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="font-bold text-lg text-indigo-600 mb-4">
            All Appointments
          </h2>
          {filteredAppointments.length > 0 ? (
            <table className="table-auto w-full bg-indigo-100 rounded-lg overflow-hidden">
              <thead className="bg-indigo-500 text-white">
                <tr>
                  <th className="border px-4 py-2">Queue No</th>
                  <th className="border px-4 py-2">Patient Age</th>
                  <th className="border px-4 py-2">Doctor</th>
                  <th className="border px-4 py-2">Department</th>
                  <th className="border px-4 py-2">Slot</th>
                  <th className="border px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr
                    key={appointment._id}
                    className="odd:bg-white even:bg-indigo-50 text-gray-700"
                  >
                    <td className="border px-4 py-2 text-center">
                      {appointment.queueNumber}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {appointment.patientId.age}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.doctorId.name}
                    </td>
                    <td className="border px-4 py-2">
                      {appointment.department.name}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {appointment.slot}
                    </td>
                    <td
                      className={`border px-4 py-2 text-center font-semibold ${
                        appointment.status === "Completed"
                          ? "text-green-600"
                          : appointment.status === "Cancelled"
                          ? "text-red-600"
                          : "text-indigo-600"
                      }`}
                    >
                      {appointment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 text-center">No appointments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QueueStatus;
