const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-2xl mx-auto mb-10 text-lg">
          QEase is committed to revolutionizing the queue management process by
          providing efficient and user-friendly solutions. Our mission is to
          reduce wait times and enhance customer satisfaction.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-white to-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To create a seamless queue management experience across
              industries.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To leverage technology to make queues a thing of the past.
            </p>
          </div>
          <div className="bg-gradient-to-br from-white to-gray-200 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Our Values
            </h3>
            <p className="text-gray-700">
              Efficiency, innovation, and customer-centric solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
