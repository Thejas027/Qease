import { useEffect, useState } from "react";
import axios from "axios";
import SidebarPatient from "./SidebarPatient";

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // To toggle edit mode
  const [contactDetails, setContactDetails] = useState({
    phone: "(Enter your mobile number)",
    email: "(Enter your mail id)",
    address: "(Enter your address)",
  });

  useEffect(() => {
    // Fetch appointments when the component mounts
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/appointments/get-all-appointments"
        );
        if (response.data.success) {
          setAppointments(response.data.data);
        } else {
          console.error("Failed to fetch appointments");
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Handle form changes for contact details
  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Save button functionality
  const handleSave = () => {
    setIsEditing(false);
    console.log("Contact details saved:", contactDetails);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div>
        <SidebarPatient />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">
          Patient Profile
        </h1>

        {/* Profile Card */}
        <div className="bg-white shadow rounded-lg p-4 mb-8 flex justify-between items-start gap-10">
          {/* Personal Details */}
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 rounded-full p-5 flex justify-center items-center">
              <span className="text-indigo-600 text-4xl">👤</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-indigo-700">
                Ms. Jane Moore
              </h2>
              <p className="text-gray-600">Date of Birth: 10/03/1987</p>
              <p className="text-gray-600">Gender: Female</p>
              <p className="text-gray-600">Blood Group: O+</p>
              <p className="text-gray-600">Age: 37</p>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Contact Details
              </h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-sm text-indigo-600 hover:underline"
              >
                {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>
            {isEditing ? (
              <div>
                <div className="mb-2">
                  <label className="block text-gray-600 text-sm mb-1">
                    Phone:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={contactDetails.phone}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md p-2"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-600 text-sm mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactDetails.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={contactDetails.address}
                    onChange={handleChange}
                    className="w-full border-gray-300 rounded-md p-2"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-600">📞 {contactDetails.phone}</p>
                <p className="text-gray-600">📧 {contactDetails.email}</p>
                <p className="text-gray-600">🏠 {contactDetails.address}</p>
              </div>
            )}
          </div>
        </div>

        {/* Appointments Table */}
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">
          Previous Appointments
        </h2>
        <div className="h-64 overflow-auto">
          <div className="overflow-x-auto">
            {loading ? (
              <p className="text-center text-gray-500">
                Loading appointments...
              </p>
            ) : appointments.length > 0 ? (
              <table className="min-w-full bg-white shadow rounded-lg">
                <thead className="bg-indigo-700 text-white sticky top-0">
                  <tr>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Doctor</th>
                    <th className="text-left py-3 px-4">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr
                      key={appointment._id}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } border-t hover:bg-gray-100`}
                    >
                      <td className="py-3 px-4">
                        {new Date(appointment.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4">{appointment.doctorId.name}</td>
                      <td className="py-3 px-4">{appointment.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-gray-500">
                No appointments found.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
