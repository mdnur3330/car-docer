"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-20">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Contact <span className="text-[#FF3811]">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#FF3811] text-2xl" />
            <p className="text-gray-700">123 Main Street, Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#FF3811] text-2xl" />
            <p className="text-gray-700">+880 1890536220</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#FF3811] text-2xl" />
            <p className="text-gray-700">nuralom.web@gmail.com</p>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902623556673!2d90.39121747536062!3d23.750876278672755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b1c56bb9ad%3A0xc4b7df9f3c4e77b3!2sDhaka!5e0!3m2!1sen!2sbd!4v1691900000000!5m2!1sen!2sbd"
              width="100%"
              height="250"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FF3811]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FF3811]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#FF3811]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#FF3811] hover:bg-[#e3330f] text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
