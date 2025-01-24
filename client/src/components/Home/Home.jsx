const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between container mx-auto py-24 px-6 min-h-screen"
    >
      {/* Text Section */}
      <div className=" flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-600 mb-6">
          Welcome to QEase
        </h2>
        <p className="text-gray-700 mb-8">
          Say goodbye to long waiting times and hello to seamless, efficient
          queue management. Elevate customer satisfaction and streamline
          operations like never before.
        </p>
        <div className="flex justify-center md:justify-start gap-6 mb-8">
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700">
            Book a Queue
          </button>
          <button className="bg-white border-2 border-purple-600 text-purple-600 py-2 px-6 rounded-full hover:bg-purple-100">
            Learn More
          </button>
        </div>
        <p className="flex items-center justify-center md:justify-start mt-6 text-gray-500 text-sm">
          <span className="flex -space-x-2 mr-3">
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/40?img=1"
              alt="User 1"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/40?img=2"
              alt="User 2"
            />
            <img
              className="w-8 h-8 rounded-full border-2 border-white"
              src="https://i.pravatar.cc/40?img=3"
              alt="User 3"
            />
          </span>
          1,000,000+ queues managed seamlessly last year!
        </p>
      </div>

      {/* Image Section */}
      <div className="max-w-md">
        <img
          src="https://res.cloudinary.com/dpyt0hm3q/image/upload/v1736663971/QEase_homepage_zobove.jpg"
          alt="Queue Management"
          className=""
        />
      </div>
    </section>
  );
};

export default Home;
