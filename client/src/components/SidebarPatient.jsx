import { FaHome, FaClipboardList, FaUser, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarPatient() {
  return (
    <div className="bg-indigo-300 h-screen w-64 text-black flex flex-col items-center py-6 shadow-lg">
      {/* Logo and Project Name */}
      <div className="flex items-center mb-10">
        <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-black font-bold text-xl">
          {/* Logo placeholder */}
          <span>Q</span>
        </div>
        <h1 className="ml-3 text-2xl font-bold">Qease</h1>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col w-full px-6 space-y-6">
        <Link
          to="/"
          className="flex items-center space-x-4 hover:bg-indigo-400 py-2 px-3 rounded-lg cursor-pointer transition-all"
        >
          <FaHome className="text-lg" />
          <span className="text-lg">Home</span>
        </Link>
        <Link
          to="/patient"
          className="flex items-center space-x-4 hover:bg-indigo-400 py-2 px-3 rounded-lg cursor-pointer transition-all"
        >
          <FaClipboardList className="text-lg" />
          <span className="text-lg">Dashboard</span>
        </Link>
        <Link
          to="/patient-profile"
          className="flex items-center space-x-4 hover:bg-indigo-400 py-2 px-3 rounded-lg cursor-pointer transition-all"
        >
          <FaUser className="text-lg" />
          <span className="text-lg">Profile</span>
        </Link>
        <Link
          to="/patient-appointment-booking"
          className="flex items-center space-x-4 hover:bg-indigo-400 py-2 px-3 rounded-lg cursor-pointer transition-all"
        >
          <FaCalendarAlt className="text-lg" />
          <span className="text-lg">Book an Appointment</span>
        </Link>
      </nav>
    </div>
  );
}

export default SidebarPatient;
