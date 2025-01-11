import { useState } from "react";
import {
  FaHome,
  FaTachometerAlt,
  FaUsers,
  FaCalendarCheck,
  FaBell,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa"; // Import icons
import { IoMdArrowDropright } from "react-icons/io"; // For dropdown

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  // Toggle menu for mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-indigo-300 min-h-screen text-black w-64  transition-all duration-300`}
    >
      {/* Logo Section */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src="/logo.jpg" // Replace with your logo image source
            alt="Logo"
            className="w-8" // Logo size
          />
          <span className="ml-2 text-xl font-semibold hidden md:block">
            Qease
          </span>
        </div>
        {/* Mobile Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="text-black text-2xl md:hidden">
          <FaBars />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="space-y-4 mt-4">
        {/* Home */}
        <div className={`px-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <FaHome size={20} />
            <span>Home</span>
          </div>
        </div>

        {/* Dashboard */}
        <div className={`px-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <FaTachometerAlt size={20} />
            <span>Dashboard</span>
          </div>
        </div>

        {/* Doctors List */}
        <div className={`px-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <FaUsers size={20} />
            <span>Doctors List</span>
          </div>
        </div>

        {/* Appointment */}
        <div className={`px-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <FaCalendarCheck size={20} />
            <span>Appointment</span>
          </div>
        </div>

        {/* Notifications */}
        <div className={`px-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <FaBell size={20} />
            <span>Notifications</span>
          </div>
        </div>

        {/* Status */}
        <div className={`px-4 ${isMenuOpen ? "block" : "hidden md:block"}`}>
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <IoMdArrowDropright size={20} />
            <span>Status</span>
          </div>
        </div>

        {/* Logout */}
        <div
          className={`px-4 mt-4 ${isMenuOpen ? "block" : "hidden md:block"}`}
        >
          <div className="flex items-center space-x-4 p-3 rounded-lg">
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
