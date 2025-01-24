import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-blue-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold">QEase</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-blue-300">
            Home
          </a>
          <a href="#features" className="hover:text-blue-300">
            Features
          </a>
          <a href="#about" className="hover:text-blue-300">
            About Us
          </a>
          <a href="#reach" className="hover:text-blue-300">
            Reach Out
          </a>
        </nav>
        <button className="hidden md:block bg-white text-blue-600 py-2 px-4 rounded-full hover:bg-blue-100">
          Login
        </button>
        {/* Hamburger Menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white py-4 px-6">
          <a href="#home" className="block py-2">
            Home
          </a>
          <a href="#features" className="block py-2">
            Features
          </a>
          <a href="#about" className="block py-2">
            About Us
          </a>
          <a href="#reach" className="block py-2">
            Reach Out
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
