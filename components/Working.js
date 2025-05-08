const steps = [
  { title: "Upload License", icon: "📤" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];

export default function Working() {
  return (
    <div className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-400/50 p-6 rounded-lg shadow-xl w-60 mx-auto">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
