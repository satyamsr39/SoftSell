"use client"
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", licenseType: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Valid email required";
    if (!form.licenseType) newErrors.licenseType = "Select a license type";
    return newErrors;
  };

  const SavetoLs = () => {
    localStorage.setItem('forms', JSON.stringify(form))
    console.log(JSON.parse(localStorage.getItem('forms')))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
    } else {
      SavetoLs();
      alert("Form submitted (simulated).");
      setForm({ name: "", email: "", company: "", licenseType: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div id="contact" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-white p-2 rounded shadow-2xl ">
        <div>
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <input type="text" placeholder="Company" className="w-full p-3 border rounded" value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </div>
        <div>
          <select className="w-full p-3 border rounded" value={form.licenseType}
            onChange={(e) => setForm({ ...form, licenseType: e.target.value })}>
            <option value="">Select License Type</option>
            <option value="Windows">Windows</option>
            <option value="Adobe">Adobe</option>
            <option value="Microsoft Office">Microsoft Office</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
        </div>
        <div>
          <textarea placeholder="Message" rows="4" className="w-full p-3 border rounded"
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
