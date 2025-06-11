"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  FaDribbble,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  /* { title: "Projects", path: "/projects" }, */
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-row items-center justify-between h-24 ">
      {/* Logo */}
      <div className="hidden md:flex">
        <Logo />
      </div>
      {/* Desktop Navlinks */}
      <div className="hidden md:flex items-center justify-center gap-5 text-red-200 ">
        {navLinks.map((link) => (
          <Link
            href={link.path}
            key={link.title}
            className="text-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-red-300 transition-all duration-500 hover:text-white p-2 rounded-md  "
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* Icons */}
      <div className="flex space-x-3 md:hidden">
        <Link href=" https://dribbble.com/canansecenmumcu">
          <FaGithub size={30} />
        </Link>
        <Link href=" https://dribbble.com/canansecenmumcu">
          <FaDribbble size={30} />
        </Link>

        <Link href=" https://dribbble.com/canansecenmumcu">
          <FaLinkedinIn size={30} />
        </Link>
        <Link href=" https://dribbble.com/canansecenmumcu">
          <FaInstagram size={30} />
        </Link>
      </div>
        {/* Menu button */}
      <div className="flex md:hidden ">
        <div
          className="w-10 h-8  flex flex-col justify-between items-center z-50 relative cursor-pointer"
          onClick={handleClick}
        >
          <div className="w-10 h-1 bg-white rounded-full cursor-pointer "></div>
          <div className="w-10 h-1 bg-white rounded-full cursor-pointer "></div>
          <div className="w-10 h-1 bg-white rounded-full cursor-pointer "></div>
        </div>
        {/* Mobile Navlinks */}
        {isOpen && (
          <div className="absolute top-0 right-0 w-1/2 h-screen items-center justify-center flex flex-col bg-opacity-15  gap-8 text-4xl z-40 ">
            {navLinks.map((link) => (
              <Link
                onClick={closeMenu}
                href={link.path}
                key={link.title}
                className="hover:text-gray-600"
              >
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
