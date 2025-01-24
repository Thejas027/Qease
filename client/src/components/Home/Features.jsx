import { FaUsers, FaChartLine, FaMobileAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers />,
    title: "Real-time Queue Management",
    description:
      "Track and manage queues in real-time for better service efficiency.",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    description:
      "Get insightful data to optimize queue management and customer experience.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Accessibility",
    description: "Manage queues on the go with our easy-to-use mobile app.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-purple-600 mb-8">
          Features
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-r from-purple-200 to-purple-300 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl flex items-center justify-center text-purple-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
