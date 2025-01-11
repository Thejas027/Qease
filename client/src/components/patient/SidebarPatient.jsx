import { useState } from "react";
import {
  FaHome,
  FaTachometerAlt,
  FaUsers,
  FaCalendarCheck,
  FaBell,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa"; 


import { IoMdArrowDropright } from "react-icons/io"; 
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const location = useLocation(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", icon: <FaHome />, to: "/" },
    { name: "Dashboard", icon: <FaTachometerAlt />, to: "/dashboard" },
    { name: "Doctors List", icon: <FaUsers />, to: "/doctors-list" },
    { name: "Appointment", icon: <FaCalendarCheck />, to: "/appointment" },
    { name: "Notifications", icon: <FaBell />, to: "/notifications" },
    { name: "Status", icon: <IoMdArrowDropright />, to: "/status" },
    { name: "Logout", icon: <FaSignOutAlt />, to: "/logout" },
  ];

  return (
    <div
      className={`bg-indigo-300 min-h-screen text-black w-64 transition-all duration-300`}
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
      <div
        className={`space-y-2 mt-4 ${isMenuOpen ? "block" : "hidden md:block"}`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors duration-200 ${
              location.pathname === item.to
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-400 hover:text-white"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-lg">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
