// import Container from "@/containet/Container";
// import Image from "next/image";
// import React from "react";
// import Button from "./ShareadComponent/Button";

// export default function Hero() {
//   return (
//     <Container>
//       <div className="relative text-white">
//         <div>
//             <Image src='/assets/images/banner/5.jpg' alt="banner-logo" width={1140} height={400}  className="w-full h-[60vh] md:h-[80vh] objec-cover rounded-lg"/>
//         </div>
//         <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10 rounded-lg">

//         </div>
//         <div className="absolute space-y-5 top-[20%] left-[10%] z-20">
//             <h4 className="text-5xl font-bold">
//                 Affordable <br /> Price For Car <br /> Servicing
//             </h4>
//             <p>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
//             <div>
//                 <Button type="button" className="bg-[#ff3811] mr-3">Discover More</Button>
//                 <Button type="button" className="border ">Discover More</Button>
//             </div>
//         </div>
//       </div>
//     </Container>
//   );
// }


import Container from "@/containet/Container";
import Image from "next/image";
import React from "react";
import Button from "./ShareadComponent/Button";

export default function Hero() {
  return (
    <Container>
      <div className="relative text-white">
        {/* Background Image */}
        <div>
          <Image
            src="/assets/images/banner/5.jpg"
            alt="banner-logo"
            width={1140}
            height={400}
            priority
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] object-cover rounded-lg"
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10 rounded-lg"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-10 z-20 max-w-full sm:max-w-[70%]">
          <h4 className="text-xl sm:text-3xl md:text-5xl font-bold leading-snug mb-4">
            Affordable <br className="hidden sm:block" />
            Price For Car <br className="hidden sm:block" />
            Servicing
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            There are many variations of passages available, but{" "}
            <br className="hidden sm:block" />
            the majority have suffered alteration in some form.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <Button
              type="button"
              className="bg-[#ff3811] px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg"
            >
              Discover More
            </Button>
            <Button
              type="button"
              className="border px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg"
            >
              Latest Project
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
