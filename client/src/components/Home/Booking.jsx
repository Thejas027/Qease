
const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Book Your Queue</h2>
        <p className="text-gray-700 mb-8">
          Effortlessly book a queue and enjoy a smooth and hassle-free experience.
        </p>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-left text-gray-700 font-bold mb-2">
              Booking Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
