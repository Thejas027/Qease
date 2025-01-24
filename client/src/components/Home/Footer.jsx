
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">© 2025 QEase. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
