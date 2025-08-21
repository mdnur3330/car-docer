
"use client";

import Container from "@/containet/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./ShareadComponent/Button";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/services" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <Container className="flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="logo" width={45} height={45} />
          <span className="font-bold text-xl hidden sm:block">Car Doctor</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
          {navItem.map((item) => (
            <li key={item.title}>
              <Link
                href={item.link}
                className="hover:text-[#ff3811] transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Button
            type="button"
            className="text-[#ff3811] border border-[#ff3811] py-2 px-4 rounded hover:bg-[#ff3811] hover:text-white transition"
          >
            Appointment
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <ul className="flex flex-col gap-4 py-5 px-6 text-base font-medium">
            {navItem.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.link}
                  className="block hover:text-[#ff3811] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Button
                type="button"
                className="w-full text-[#ff3811] border border-[#ff3811] py-2 rounded hover:bg-[#ff3811] hover:text-white transition"
              >
                Appointment
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
