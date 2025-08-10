"use client";

import Image from "next/image";

export default function BlogSection() {
  const posts = [
    {
      title: "5 Tips to Keep Your Car Engine Healthy",
      date: "August 5, 2025",
      img: "/assets/images/homeCarousel/2.jpg",
      desc: "Learn the essential maintenance tips that can extend your engine's lifespan."
    },
    {
      title: "How to Prepare Your Car for Long Trips",
      date: "July 20, 2025",
      img: "/assets/images/homeCarousel/3.jpg",
      desc: "Planning a road trip? Here are the key things to check before you go."
    },
    {
      title: "Top Signs Your Brakes Need Repair",
      date: "July 5, 2025",
      img: "/assets/images/homeCarousel/4.jpg",
      desc: "Ignoring brake issues can be dangerous. Here's what to watch out for."
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest <span className="text-[#FF3811]">Blog</span> Posts
      </h2>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={post.img}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-400">{post.date}</p>
              <h3 className="font-bold text-lg mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.desc}</p>
              <a
                href="#"
                className="inline-block text-[#FF3811] font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}
