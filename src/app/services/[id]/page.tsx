"use client";
import notfound from "@/app/not-found";
import Container from "@/containet/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";




export default function SingalServise({ params }) {
  const { id } = params;
  const [servise, setServise] = useState(null);

  const links = [
    {title: "Battery Charge"},
    {title: "Full Car Repair"},
    {title: "Engine Oil Change"},
    {title: "Automatic Services"},
    {title: "Engine Repair"},
  ]

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((allServises) => {
        const found = allServises.find(
          (singalServise) => String(singalServise._id) === String(id)
        );
        setServise(found);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if(!servise){
    return notfound()
  }
 console.log(servise);

  return (
    <div>
      {/* <ServiseDetails servise={servise}></ServiseDetails> */}
      <div>
        <Container>
          {/* bannet area  */}
            <div className="relative">
        <Image src='/assets/images/banner/2.jpg' width={1140} height={400} alt={servise?.title || "Service Banner"} className="w-full h-[60vh] md:h-[80vh] object-cover rounded-lg"/> 
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10 rounded-lg">
          <h4 className="text-3xl mt-30 ml-20 text-white">Service Details</h4>
        </div>
        </div>

         {/* left site */}
        <div className="flex mt-25 gap-4 justify-between">
          <div className="w-8/10 rounded">
           
            <div>
              <Image src={servise?.img} width={752} height={400} alt="" className="w-full h-full bg-center"/>
            </div>
            <h3 className="mt-10 text-2xl font-bold text-gray-700">{servise?.title}</h3>
            <p className="mt-5 text-gray-500">{servise?.description}</p>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-4 mt-10">
              {servise?.facility.map((feature,i) => <div key={i} className="bg-gray-100 px-9 py-10 space-y-4 border-t-2 border-[#ff3811]  rounded-md">
                  <h3 className="text-gray-800 text-xl font-bold">{feature?.name}</h3>
                  <p className="text-gray-600">{feature?.details}</p>
              </div>)}
            </div>
          </div>
          <div className="2/10">
            {/* right site  */}
            <div className="bg-gray-200 py-4 px-6">
              <div>
                <h2>Services</h2>
                <div>
                  {links.map(link => <Link key={link.title} href='/chackOut' className="bg-white flex justify-between mt-3 items-center py-2 px-3 rounded">{link.title}<FaArrowRight size={20} className="text-[#ff3811]" /> </Link>)}
                  
                </div>
              </div>
            </div>
            <div>
              <Image src="/assets/images/404/Group 38695.png" width={300} height={340} alt="" />
            </div>
          </div>
        </div>
        </Container>
      </div>
    </div>
  );
}

