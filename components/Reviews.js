"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Satyam Singh",
    role: "IT Director",
    company: "TechZone Corp",
    quote: "SoftSell helped us recover thousands in unused licenses with zero hassle.",
  },
  {
    name: "Vivaan Singh",
    role: "Operations Manager",
    company: "InnovaWare",
    quote: "Their valuation and payout process is incredibly fast and reliable.",
  },
  {
    name: "Aisha Mehra",
    role: "Procurement Lead",
    company: "Nextgen Solutions",
    quote: "We saved so much by offloading unused licenses. Highly recommended!",
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

      <div className="relative max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <p className="italic mb-4 text-lg">“{testimonials[index].quote}”</p>
        <p className="font-semibold">{testimonials[index].name}</p>
        <p className="text-sm text-gray-600">
          {testimonials[index].role}, {testimonials[index].company}
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
          >
            ›
          </button>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-blue-600" : "bg-gray-400"
                }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
