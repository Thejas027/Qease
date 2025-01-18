import { useLocation } from "react-router-dom";

function BookAppointment() {
  const location = useLocation();
  const { departmentName, doctorName } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-blue-900 mb-6">
          Appointment Details
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          <strong>Department:</strong> {departmentName || "Not available"}
        </p>
        <p className="text-lg text-blue-800 mb-4">
          <strong>Doctor:</strong> {doctorName || "Not available"}
        </p>
      </div>
    </div>
  );
}

export default BookAppointment;
