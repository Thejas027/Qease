const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Book a Queue</h2>
        <p className="text-gray-600 mb-8">
          Save time and ensure your spot by booking your queue online.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full text-lg shadow-md hover:bg-purple-700 transition">
            Book for a Hospital
          </button>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full text-lg shadow-md hover:bg-purple-700 transition">
            Book for a Bank
          </button>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full text-lg shadow-md hover:bg-purple-700 transition">
            Book for Retail
          </button>
        </div>
      </div>
    </section>
  );
};

export default Booking;
