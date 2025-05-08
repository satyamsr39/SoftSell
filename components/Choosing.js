const benefits = [
  { title: "Verified Transfers", description: "All license sales are fully legal and compliant.", icon: "✔️" },
  { title: "Instant Valuations", description: "Real-time pricing based on market demand.", icon: "⚡" },
  { title: "Secure Payments", description: "Get paid directly to your business account.", icon: "🔒" },
  { title: "Expert Support", description: "Our team helps at every step of the process.", icon: "🎧" },
];

export default function Choosing() {
  return (
    <div className="py-16 px-6 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">Why Choose SoftSell?</h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div key={index} className="bg-gray-400/50 p-6 rounded-lg">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
