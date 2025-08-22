"use client";
import Container from "@/containet/Container";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import { USer } from "@/type/Type";
import Button from "@/component/ShareadComponent/Button";

export default function Services() {
  const [data, setData] = useState<USer[]>([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div className="my-10">
      <Container>
        <div className="text-center space-y-4 my-10">
          <h3 className="text-[#ff3811] font-semibold">Service</h3>
          <h2 className="text-3xl font-semibold">Our Service Area</h2>
          <p>
            We provide high-quality car repair and maintenance services across
            multiple locations. From engine diagnostics to full body repairs,
            our expert technicians ensure your vehicle gets the best care
            possible.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {data.map((item) => (
            <div key={item._id} className="space-y-2 drop-shadow-lg">
              <Image
                src={item.img}
                width={400}
                height={380}
                alt={item.title}
                className="w-[378px] h-[200px] rounded-lg"
              />
              <h3 className="text-2xl font-bold ">{item.title}</h3>
              <div className="flex justify-around items-center text-[#FF3811]">
                <p className="text-xl font-bold">{item.price}</p>
                <Link href={`services/${item._id}`}>
                  <FaArrowCircleRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            type="button"
            className="mx-auto my-10 text-[#FF3811] border border-[#FF3811]"
          >
            More Services
          </Button>
        </div>
      </Container>
    </div>
  );
}











// import Container from "@/containet/Container";
// import { Facility, Service } from "@/type/Type";
// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";
// import services from "@/../public/services.json";

// type Params = {
//     id: string
// }


// const SingleService = async ({
//   params
// }: {params: Params}) => {
//   const { id } = params;


//   const links = [
//     { title: "Battery Charge" },
//     { title: "Full Car Repair" },
//     { title: "Engine Oil Change" },
//     { title: "Automatic Services" },
//     { title: "Engine Repair" },
//   ];

//   if (!services) {
//     return notFound();
//   }

//   const found = services.find((item: Service) => item._id === id);

//   if (!found) {
//     return notFound();
//   }

//   return (
//     <div>
//       <Container>
//         {/* Banner Area */}
//         <div className="relative">
//           <Image
//             src="/assets/images/banner/2.jpg"
//             width={1140}
//             height={400}
//             alt={found.title || "Service Banner"}
//             className="w-full h-[60vh] md:h-[80vh] object-cover rounded-lg"
//           />
//           <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10 rounded-lg flex items-center pl-20">
//             <h4 className="text-3xl text-white">Service Details</h4>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex mt-25 gap-4 justify-between">
//           {/* Left Side */}
//           <div className="w-8/10 rounded">
//             <Image
//               src={found.img}
//               width={752}
//               height={400}
//               alt={found.title}
//               className="w-full h-full object-cover"
//             />
//             <h3 className="mt-10 text-2xl font-bold text-gray-700">
//               {found.title}
//             </h3>
//             <p className="mt-5 text-gray-500">{found.description}</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
//               {found.facility.map((feature: Facility) => (
//                 <div
//                   key={feature.name}
//                   className="bg-gray-100 px-9 py-10 space-y-4 border-t-2 border-[#ff3811] rounded-md"
//                 >
//                   <h3 className="text-gray-800 text-xl font-bold">
//                     {feature.name}
//                   </h3>
//                   <p className="text-gray-600">{feature.details}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="w-2/10">
//             <div className="bg-gray-200 py-4 px-6 mb-6">
//               <h2 className="font-bold text-lg mb-3">Services</h2>
//               <div>
//                 {links.map((link) => (
//                   <Link
//                     key={link.title}
//                     href="/chackOut"
//                     className="bg-white flex justify-between mt-3 items-center py-2 px-3 rounded"
//                   >
//                     {link.title}
//                     <FaArrowRight size={20} className="text-[#ff3811]" />
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <Image
//                 src="/assets/images/404/Group 38695.png"
//                 width={300}
//                 height={340}
//                 alt="Decoration"
//               />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default SingleService;
