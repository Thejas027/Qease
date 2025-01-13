import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QueueStatus = () => {
  const { patientId } = useParams();
  const [queueData, setQueueData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQueueData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/appointments/queue-status/${patientId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setQueueData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQueueData();
  }, [patientId]);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const { currentPatient, remainingPatients, remainingCount } = queueData;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Current Patient */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="font-bold text-lg">Current Patient</h2>
          <p>Name: {currentPatient.patientName}</p>
          <p>Queue No: {currentPatient.queueNumber}</p>
          <p>Doctor: {currentPatient.doctorName}</p>
          <p>Department: {currentPatient.departmentName}</p>
          <p>Appointment Time: {currentPatient.appointmentTime}</p>
        </div>

        {/* Remaining Patients Count */}
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
          <h2 className="font-bold text-lg">Remaining Patients</h2>
          <p>Count: {remainingCount}</p>
        </div>
      </div>

      {/* Appointment List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="font-bold text-xl mb-4">Remaining Patients</h2>
        {remainingPatients.length > 0 ? (
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="border px-4 py-2">Queue No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Appointment Time</th>
              </tr>
            </thead>
            <tbody>
              {remainingPatients.map((patient) => (
                <tr key={patient.queueNumber}>
                  <td className="border px-4 py-2">{patient.queueNumber}</td>
                  <td className="border px-4 py-2">{patient.patientName}</td>
                  <td className="border px-4 py-2">
                    {patient.appointmentTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No remaining patients.</p>
        )}
      </div>
    </div>
  );
};

export default QueueStatus;
