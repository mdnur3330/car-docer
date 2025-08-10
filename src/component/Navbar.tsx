import Container from "@/containet/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ShareadComponent/Button";

export default function Navbar() {
  const navItem = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Services", link: "/servises-type" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <Container className="flex item-center justify-between py-5">
      <div>
        <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <ul className="flex gap-10 justify-center text-xl">
        {navItem.map((item) => (
          <li key={item.title}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Button
          type="button"
          className="text-red-400 border border-red-400 py-1 px-2 rounded"
        >
          Appointment
        </Button>
      </div>
    </Container>
  );
}
