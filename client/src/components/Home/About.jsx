
const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">About Us</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          QEase is committed to revolutionizing the queue management process by
          providing efficient and user-friendly solutions. Our mission is to
          reduce wait times and enhance customer satisfaction.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To create a seamless queue management experience across industries.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To leverage technology to make queues a thing of the past.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Our Values</h3>
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
