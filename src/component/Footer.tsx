
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaRegCopyright,
//   FaGithub,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#212E37] text-white mt-20 pt-12 pb-8 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

//         {/* Logo & About */}
//         <div>
//              <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
//           <p className="text-sm text-white">
//             Car Doctor is your trusted partner for complete car servicing and maintenance. With modern technology and skilled mechanics, we ensure top-quality care for your vehicle. From engine check-ups, brake testing, battery replacement, and tire servicing to regular maintenance — everything you need is available in one place.
//           </p>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h4 className="text-md font-semibold mb-3">Navigation</h4>
//           <ul className="space-y-2 text-sm text-white">
//             <li><Link href="/" >Home</Link></li>
//             <li className="cursor-pointer">Browse Tasks</li>
//             <li className=" cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Legal */}
//         <div>
//           <h4 className="text-md font-semibold mb-3">Legal</h4>
//           <ul className="space-y-2 text-sm text-white">
//             <li className=" cursor-pointer">Terms of Service</li>
//             <li className="cursor-pointer">Privacy Policy</li>
//             <li className=" cursor-pointer">FAQ</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h4 className="text-md font-semibold mb-3">Follow Us</h4>
//           <div className="flex gap-4 text-xl">
//             <a href="https://web.facebook.com/md.nur.alom.882377/" target="_blank" rel="noreferrer">
//               <FaFacebookF />
//             </a>
//             <a href="https://github.com/mdnur3330" target="_blank" rel="noreferrer" >
//               <FaGithub />
//             </a>
//             <a href="https://www.linkedin.com/in/nur-alom1/" target="_blank" rel="noreferrer">
//               <FaLinkedinIn />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom */}
//       <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-white">
//         <div className="flex justify-center items-center gap-2">
//           <FaRegCopyright className="text-xs" />
//           <span>{new Date().getFullYear()} TaskBazaar. All rights reserved.</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRegCopyright,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#212E37] text-white mt-20 pt-12 pb-8 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        
        {/* Logo & About */}
        <div className="space-y-4">
          <div className="flex justify-center sm:justify-start">
            <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            Car Doctor is your trusted partner for complete car servicing and
            maintenance. With modern technology and skilled mechanics, we ensure
            top-quality care for your vehicle. From engine check-ups, brake
            testing, battery replacement, and tire servicing to regular
            maintenance — everything you need is available in one place.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#ff3811] transition">
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-[#ff3811] transition">
              Browse Tasks
            </li>
            <li className="cursor-pointer hover:text-[#ff3811] transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="cursor-pointer hover:text-[#ff3811] transition">
              Terms of Service
            </li>
            <li className="cursor-pointer hover:text-[#ff3811] transition">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-[#ff3811] transition">
              FAQ
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-6 text-xl">
            <a
              href="https://web.facebook.com/md.nur.alom.882377/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff3811] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/mdnur3330"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff3811] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nur-alom1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#ff3811] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <FaRegCopyright className="text-xs" />
          <span>
            {new Date().getFullYear()} TaskBazaar. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
