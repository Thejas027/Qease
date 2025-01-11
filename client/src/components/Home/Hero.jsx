
function Hero() {
  return (
    <section
      id="hero"
      className="bg-gray-100 py-20 text-center flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to My Website</h2>
      <p className="text-lg mb-6">We provide amazing solutions for your needs.</p>
      <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
