const Contact = () => {
  return (
    <section id="reach" className="py-24 ">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
          Reach Out to Us
        </h2>
        <p className="text-gray-800 mb-12 text-lg max-w-3xl mx-auto">
          Have any questions? Our team is here to assist you. Don’t hesitate to
          reach out!
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-4">
              <strong className="text-purple-600">Email:</strong>{" "}
              support@qease.com
            </p>
            <p className="text-gray-700 mb-4">
              <strong className="text-purple-600">Phone:</strong> +1 123 456
              7890
            </p>
            <p className="text-gray-700">
              <strong className="text-purple-600">Address:</strong> 123 Queue
              Lane, Cityville, USA
            </p>
          </div>
          <form className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-left text-gray-700 font-semibold mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md transition duration-300"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-left text-gray-700 font-semibold mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-md transition duration-300"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white w-full py-3 rounded-lg hover:bg-purple-700 focus:outline-none transform transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
