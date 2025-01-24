
const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto py-24 px-6"
    >
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to QEase
        </h2>
        <p className="text-gray-700 mb-6">
          Say goodbye to long waiting times and hello to seamless, efficient
          queue management. Elevate customer satisfaction and streamline
          operations like never before.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
            Book a Queue
          </button>
          <button className="bg-white border-2 border-blue-600 text-blue-600 py-2 px-6 rounded-full hover:bg-blue-100">
            Learn More
          </button>
        </div>
      </div>
      <div className="max-w-md">
        <img
          src="https://res.cloudinary.com/dpyt0hm3q/image/upload/v1736663971/QEase_homepage_zobove.jpg"
          alt="Queue Management"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
