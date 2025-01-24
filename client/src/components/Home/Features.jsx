
const features = [
  {
    icon: "fas fa-users",
    title: "Real-time Queue Management",
    description:
      "Track and manage queues in real-time for better service efficiency.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Data Analytics",
    description:
      "Get insightful data to optimize queue management and customer experience.",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Accessibility",
    description: "Manage queues on the go with our easy-to-use mobile app.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <i className={`${feature.icon} text-4xl text-blue-600 mb-4`}></i>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
