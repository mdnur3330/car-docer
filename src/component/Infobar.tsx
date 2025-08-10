// components/InfoBar.tsx

import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import Container from "@/containet/Container";

export default function InfoBar() {
  return (
   <div>
     <Container>
      <div className="bg-[#1F1F1F] text-white py-16 px-4 rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Time */}
        <div className="flex items-center gap-4">
          <div className="text-[#FF3811] text-3xl">
            <MdOutlineCalendarMonth />
          </div>
          <div>
            <p className="text-sm">We are open monday-friday</p>
            <p className="text-lg font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="text-[#FF3811] text-3xl relative">
            <FaPhoneAlt />
            <BsChatDots className="absolute -top-2 -right-2 text-white bg-[#FF3811] p-1 rounded-full text-xs" />
          </div>
          <div>
            <p className="text-sm">Have a question?</p>
            <p className="text-lg font-bold">+2546 251 2658</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-4">
          <div className="text-[#FF3811] text-3xl">
            <IoLocationSharp />
          </div>
          <div>
            <p className="text-sm">Need a repair? our address</p>
            <p className="text-lg font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
    </Container>
   </div>
  );
}
