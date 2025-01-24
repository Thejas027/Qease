
const Contact = () => {
  return (
    <section id="reach" className="py-24 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Reach Out</h2>
        <p className="text-gray-700 mb-8">
          Have questions? Get in touch with us and we’ll be happy to assist you.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Contact Information
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> support@qease.com
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Phone:</strong> +1 123 456 7890
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Queue Lane, Cityville, USA
            </p>
          </div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-left text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
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
