import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-purple-600 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">QEase</h1>

        {/* Desktop Navigation */}
        <nav className="flex space-x-6">
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-blue-300"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("features")}
            className="hover:text-blue-300"
          >
            Features
          </button>
          <button
            onClick={() => handleScroll("about")}
            className="hover:text-blue-300"
          >
            About Us
          </button>
          <button
            onClick={() => handleScroll("reach")}
            className="hover:text-blue-300"
          >
            Reach Out
          </button>
        </nav>

        {/* Login Button */}
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black py-2 px-4 rounded-full hover:bg-blue-100"
        >
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
