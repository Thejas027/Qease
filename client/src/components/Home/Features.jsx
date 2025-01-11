function Features() {
  const features = [
    { title: "Feature 1", description: "Amazing feature description here." },
    { title: "Feature 2", description: "Another great feature description." },
    { title: "Feature 3", description: "The best feature you’ll love." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
