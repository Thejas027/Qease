import { useState, useEffect } from "react";

function AppointmentBooked() {
  const [allAppointments, setAllAppointments] = useState([]);
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
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-lg font-semibold text-red-500">{`Error: ${error}`}</div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">All Appointments</h2>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-indigo-600 text-white">
              <th className="py-2 px-4 text-left">Patient Name</th>
              <th className="py-2 px-4 text-left">Age</th>
              <th className="py-2 px-4 text-left">Gender</th>
              <th className="py-2 px-4 text-left">Doctor</th>
              <th className="py-2 px-4 text-left">Department</th>
              <th className="py-2 px-4 text-center">Slot</th>
              <th className="py-2 px-4 text-center">Queue Number</th>
              <th className="py-2 px-4 text-center">Status</th>
              <th className="py-2 px-4 text-left">Reason</th>
            </tr>
          </thead>
          <tbody>
            {allAppointments.map((appointment) => (
              <tr key={appointment._id} className="border-b">
                {/* Accessing nested values */}
                <td className="py-2 px-4">
                  {appointment.patientId?.name || "N/A"}
                </td>
                <td className="py-2 px-4">
                  {appointment.patientId?.age || "N/A"}
                </td>{" "}
                <td className="py-2 px-4">
                  {appointment.patientId?.gender || "N/A"}
                </td>
                <td className="py-2 px-4">
                  {appointment.doctorId?.name || "N/A"}
                </td>
                <td className="py-2 px-4">
                  {appointment.department?.name || "N/A"}
                </td>
                <td className="py-2 px-4">{appointment.slot}</td>
                <td className="py-2 px-4 text-center">
                  {appointment.queueNumber}
                </td>
                <td className="py-2 px-4">
                  <span
                    className={`${
                      appointment.status === "Scheduled"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    } text-white px-2 py-1 rounded-full`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="py-2 px-4">{appointment.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentBooked;
