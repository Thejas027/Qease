import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white h-20 w-full flex items-center px-6 ">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold flex-1">
        🏥 Hospital
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        <a href="#" className=" hover:text-purple-300">
          Home
        </a>
        <a href="#" className=" hover:text-purple-300">
          Features
        </a>
        <a href="#" className=" hover:text-purple-300">
          Why Choose Us
        </a>
        <a href="#" className=" hover:text-purple-300">
          Info
        </a>
        <Link
          to="/login"
          className="bg-white text-purple-700 px-4 py-1 rounded hover:bg-white/80 "
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-purple-700 text-center shadow-md md:hidden">
          <a
            href="#"
            className="block py-2 hover:underline hover:bg-purple-600"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 hover:underline hover:bg-purple-600"
          >
            Features
          </a>
          <a
            href="#"
            className="block py-2 hover:underline hover:bg-purple-600"
          >
            Why Choose Us
          </a>
          <a
            href="#"
            className="block py-2 hover:underline hover:bg-purple-600"
          >
            Info
          </a>
          <Link
            to="/login"
            className="block py-2 bg-white text-purple-700 mx-6 my-2 rounded hover:bg-white/80 hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
