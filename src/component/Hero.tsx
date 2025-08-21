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
            className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] object-cover rounded-lg"
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] z-10 rounded-lg"></div>

        {/* Content */}
        <div className="absolute top-[15%] sm:top-[20%] left-[5%] sm:left-[10%] z-20 space-y-4 sm:space-y-6 max-w-[90%] sm:max-w-[70%]">
          <h4 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
            Affordable <br className="hidden sm:block" /> Price For Car <br className="hidden sm:block" /> Servicing
          </h4>
          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            There are many variations of passages available, but <br className="hidden sm:block" /> 
            the majority have suffered alteration in some form.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
            <Button type="button" className="bg-[#ff3811] px-4 py-2 text-sm sm:text-base">
              Discover More
            </Button>
            <Button type="button" className="border px-4 py-2 text-sm sm:text-base">
              Latest Project
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
