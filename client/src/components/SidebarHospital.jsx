import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaTachometerAlt,
  FaUsers,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa"; // Import icons
import { IoMdArrowDropright } from "react-icons/io"; // For dropdown

function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle
  const location = useLocation(); // To determine the active link

  // Toggle sidebar for mobile devices
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close sidebar when clicking outside (optional behavior)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Active link highlighting logic
  const isActive = (path) => location.pathname === path;

  return (
    <div className="relative">
      {/* Sidebar for desktop */}
      <div
        className={`hidden md:block bg-indigo-300 min-h-screen text-black w-64 transition-all duration-300`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              src="/logo.jpg" // Replace with your logo image source
              alt="Logo"
              className="w-8" // Logo size
            />
            <span className="ml-2 text-xl font-semibold">Qease</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4 mt-4">
          {/* Home */}
          <Link
            to="/"
            className={`flex items-center space-x-4 p-3 rounded-lg ${
              isActive("/") ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <FaHome size={20} />
            <span>Home</span>
          </Link>

          {/* Dashboard */}
          <Link
            to="/hospital"
            className={`flex items-center space-x-4 p-3 rounded-lg ${
              isActive("/hospital") ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <FaTachometerAlt size={20} />
            <span>Dashboard</span>
          </Link>

          {/* Department List */}
          <Link
            to="/department-list"
            className={`flex items-center space-x-4 p-3 rounded-lg ${
              isActive("/department-list") ? "bg-indigo-500 text-white" : ""
            }`}
          >
            <FaUsers size={20} />
            <span>Department List</span>
          </Link>

          {/* Status */}
          <Link
            to="/hospital/queue-status"
            className={`flex items-center space-x-4 p-3 rounded-lg ${
              isActive("/hospital/queue-status")
                ? "bg-indigo-500 text-white"
                : ""
            }`}
          >
            <IoMdArrowDropright size={20} />
            <span>Status</span>
          </Link>

          {/* Logout */}
          <div className="flex items-center space-x-4 p-3 hover:bg-indigo-400 rounded-lg cursor-pointer">
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-indigo-300 flex justify-around items-center py-2 shadow-md z-50">
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col items-center text-black"
        >
          <FaBars size={20} />
          <span className="text-xs">Menu</span>
        </button>
        <Link
          to="/"
          className={`flex flex-col items-center ${
            isActive("/") ? "text-indigo-600" : "text-black"
          }`}
        >
          <FaHome size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          to="/hospital"
          className={`flex flex-col items-center ${
            isActive("/hospital") ? "text-indigo-600" : "text-black"
          }`}
        >
          <FaTachometerAlt size={20} />
          <span className="text-xs">Dashboard</span>
        </Link>
        <Link
          to="/department-list"
          className={`flex flex-col items-center ${
            isActive("/department-list") ? "text-indigo-600" : "text-black"
          }`}
        >
          <FaUsers size={20} />
          <span className="text-xs">Departments</span>
        </Link>
      </div>

      {/* Mobile Sidebar (Slide-in from left) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMobileMenu}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 bg-indigo-300 text-black w-64 min-h-screen z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4">
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="text-black text-2xl mb-4"
          >
            <FaBars />
          </button>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            <Link
              to="/"
              className={`flex items-center space-x-4 p-3 rounded-lg ${
                isActive("/") ? "bg-indigo-500 text-white" : ""
              }`}
            >
              <FaHome size={20} />
              <span>Home</span>
            </Link>
            <Link
              to="/hospital"
              className={`flex items-center space-x-4 p-3 rounded-lg ${
                isActive("/hospital") ? "bg-indigo-500 text-white" : ""
              }`}
            >
              <FaTachometerAlt size={20} />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/department-list"
              className={`flex items-center space-x-4 p-3 rounded-lg ${
                isActive("/department-list") ? "bg-indigo-500 text-white" : ""
              }`}
            >
              <FaUsers size={20} />
              <span>Department List</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
