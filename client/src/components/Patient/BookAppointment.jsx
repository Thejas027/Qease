import { useLocation } from "react-router-dom";
import { useState } from "react";

function BookAppointment() {
  const location = useLocation();
  const { departmentName, doctorName } = location.state || {};

  const [formData, setFormData] = useState({
    patientName: "",
    slot: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const appointmentData = {
      patientName: formData.patientName,
      slot: formData.slot,
      reason: formData.reason,
      departmentName,
      doctorName,
    };

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (!response.ok) {
        throw new Error(`Failed to book appointment: ${response.statusText}`);
      }

      const result = await response.json();
      alert("Appointment booked successfully!");
      console.log("Appointment Response:", result);

      // Optionally reset the form
      setFormData({
        patientName: "",
        slot: "",
        reason: "",
      });
    } catch (error) {
      setError(error.message);
      alert("Failed to book the appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-blue-900 mb-6">
          Book Appointment
        </h1>
        <p className="text-lg text-blue-800 mb-4">
          <strong>Department:</strong> {departmentName || "Not available"}
        </p>
        <p className="text-lg text-blue-800 mb-4">
          <strong>Doctor:</strong> {doctorName || "Not available"}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-800 font-bold mb-2">
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-800 font-bold mb-2">
              Select Slot
            </label>
            <select
              name="slot"
              value={formData.slot}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select a slot</option>
              <option value="9:00 AM - 10:00 AM">8:00 AM</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM </option>
              <option value="11:00 AM - 12:00 PM"> 12:00 PM</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-blue-800 font-bold mb-2">
              Reason for Appointment
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter the reason for your appointment"
              rows="4"
              required
            ></textarea>
          </div>
          {error && <p className="text-red-600 text-sm mb-4">Error: {error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Booking..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;
