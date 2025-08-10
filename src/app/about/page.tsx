"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      {/* Title */}
      <h1 className="text-3xl font-bold text-black mb-6 border-b-4 border-[#FF3811] inline-block">
        About Us
      </h1>

      {/* Intro Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">We are qualified & experienced</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Car Doctor — your trusted partner in keeping your vehicle
            in top condition. We have been serving customers for over a decade,
            providing professional car servicing, repairs, and maintenance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to deliver high-quality services at affordable prices,
            ensuring your safety and satisfaction every time you visit us.
          </p>
        </div>

        <div className="relative w-full h-72">
          <Image
            src="/assets/images/about_us/person.jpg" 
            alt="About Car Service"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Mission & Values */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-black">Our Mission & Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Timely Delivery</h3>
            <p className="text-gray-600">
              We respect your time and ensure all services are delivered on schedule.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">100% Guarantee</h3>
            <p className="text-gray-600">
              All our work is backed by a satisfaction guarantee for your peace of mind.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our mechanics are certified experts with years of hands-on experience.
            </p>
          </div>
        </div>
      </div>

   
     {/* Our Team */}
<div>
  <h2 className="text-3xl font-bold mb-8 text-center">
    Meet Our <span className="text-[#FF3811]">Team</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      { name: "John Doe", role: "Engine Expert", img: "/assets/images/team/1.jpg" },
      { name: "Michael Smith", role: "Electrical Specialist", img: "/assets/images/team/2.jpg" },
      { name: "David Lee", role: "Repair Technician", img: "/assets/images/team/3.jpg" }
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
      >
        {/* Image */}
        <div className="relative w-full h-64">
          <Image
            src={member.img}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <a href="#" className="text-white hover:text-[#FF3811] transition text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-[#FF3811] transition text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-[#FF3811] transition text-xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="p-6 text-center">
          <h3 className="font-bold text-xl">{member.name}</h3>
          <p className="text-gray-500">{member.role}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}
