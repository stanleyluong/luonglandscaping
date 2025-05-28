import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    alert("Thank you for your interest! This contact form is for demo purposes only.");
  }

  return (
    <section className="container mx-auto py-16 px-4 max-w-xl">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Contact Us</h2>
      <form className="bg-white rounded-lg shadow p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold mb-2 text-green-800">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-green-800">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" required />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2 text-green-800">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" rows={5} required />
        </div>
        <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition-colors">Send Message</button>
      </form>
      <div className="text-center text-gray-600 mt-8">
        Or call us at <span className="font-semibold text-green-900">(555) 123-4567</span>
      </div>
    </section>
  );
}
