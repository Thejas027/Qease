import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "./SidebarPatient";

function PatientStatus() {
  const { patientId } = useParams(); // Get patientId from the URL
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchQueueStatus = async () => {
      if (!patientId) {
        setError("Invalid patient ID");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/appointments/queue-status/${patientId}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch queue status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQueueStatus();
  }, [patientId]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!data || !data.currentPatient) {
    return (
      <div className="text-center py-8 text-gray-400">
        No data available for this patient.
      </div>
    );
  }

  const { currentPatient, remainingCount } = data;

  return (
    <div className="w-full flex">
      <Sidebar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full">
        <div className="bg-white shadow-lg rounded-lg p-6 w-[60%]">
          <h2 className="text-5xl font-bold text-purple-700 text-center mb-4">
            Queue Status
          </h2>
          <p className="text-lg text-gray-700 text-center mb-6">
            <strong>Patients Remaining: </strong>
            <span className="text-blue-600">{remainingCount}</span>
          </p>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <strong>Your Queue Number:</strong> {currentPatient.queueNumber}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <strong>Patient Name:</strong> {currentPatient.patientName}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <strong>Doctor Name:</strong> {currentPatient.doctorName}
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <strong>Appointment Time:</strong>{" "}
              {currentPatient.appointmentTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientStatus;
