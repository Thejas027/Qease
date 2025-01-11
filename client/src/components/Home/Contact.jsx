function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Contact Us</h3>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 border rounded"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
