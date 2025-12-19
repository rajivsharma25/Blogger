import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black w-full">
    <footer className="max-w-7xl mx-auto flex justify-between px-4 flex-col gap-4 sm:flex-row py-5 items-center">
      <Image
        src={assets.logo_light}
        width={180}
        height={60}
        className="w-32"
        alt="logo"
      />

      <p className="text-white text-sm">
        © {new Date().getFullYear()} Blogger. All rights reserved.
      </p>
      <nav className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
        <Link
          href="/about"
          className="text-white text-sm hover:underline transition"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="text-white text-sm hover:underline transition"
        >
          Contact Us
        </Link>
      </nav>
      <div className="flex gap-4">
        <a
          href="https://github.com/rajivsharma25"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2"
        >
          <Github size={16} className="text-black hover:text-gray-900" />
        </a>
        <a
          href="https://linkedin.com/in/rajivsharma25"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2"
        >
          <Linkedin size={16} className="text-black hover:text-gray-900" />
        </a>
        <a
          href="https://rajivsharma.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-full p-2"
        >
          <Globe size={16} className="text-black hover:text-gray-900" />
        </a>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
