import Container from "@/containet/Container";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Team() {
  const items = [
    {
      img: "/assets/images/team/1.jpg",
      title: "Cools Led Light",
      profession: "Engine Expert",
    },
    {
      img: "/assets/images/team/2.jpg",
      title: "Car Air Filter",
      profession: "Engine Expert",
    },
    {
      img: "/assets/images/team/3.jpg",
      title: "Car Engine Plug",
      profession: "Engine Expert",
    },
  ];
  return (
    <div>
      <Container>
        <div className="text-center space-y-4 my-10">
          <h5 className="text-[#ff3811] font-semibold">Team</h5>
          <h3 className="text-3xl font-semibold">Meet Our Team</h3>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="flex gap-6 justify-center">
          {items.map((item, index) => (
            <div key={index} className="space-y-2 rounded-lg">
              <Image
                src={item.img}
                width={400}
                height={380}
                alt={item.title}
                className="w-[378px] h-[200px] rounded-lg"
              />
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.profession}</p>
                <div className="flex gap-5 justify-center">
                    <FaFacebook size={25} className="text-indigo-900"/>
                    <FaTwitter size={25} className="text-indigo-400"/>
                    <FaLinkedin size={25} className="text-indigo-600"/>
                    <FaInstagram size={25} className="text-red-500"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
