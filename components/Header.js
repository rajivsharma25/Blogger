"use client";
import { useTheme } from "@/context/ThemeContext";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { ArrowRight, Sun, Moon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="py-4 dark:bg-gray-950">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Link href="/">
          <Image
            src={assets.logo}
            width={180}
            height={60}
            className="w-32 dark:invert-100"
            alt="logo"
            priority
            quality={75}
          />
        </Link>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle Theme"
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center border border-black bg-white dark:bg-gray-900 text-black dark:text-white dark:shadow-[-5px_5px_0px_#fff] shadow-[-5px_5px_0px_#000] size-8 sm:size-12 transition-colors focus:outline-none cursor-pointer"
          >
            {theme === "dark" ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-yellow-400" />}
          </button>
          <Link
            href="/blogs"
            className="group flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 hover:bg-gray-100 dark:hover:bg-gray-800 border border-solid border-black dark:border-white dark:shadow-[-5px_5px_0px_#fff] shadow-[-5px_5px_0px_#000000] cursor-pointer dark:text-white"
          >
            Explore Blogs{" "}
            <ArrowRight
              className="group-hover:translate-x-0.5 transition-transform duration-200"
              size={20}
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
