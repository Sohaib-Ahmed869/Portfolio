"use client";
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-10 p-4 fixed w-full justify-end bg-gray-900">
      <Link to="home" smooth={true} duration={500} className="text-white cursor-pointer">
        Home
      </Link>
      <Link to="experience" smooth={true} duration={500} className="text-white cursor-pointer">
        Experience
      </Link>
      <Link to="skills" smooth={true} duration={500} className="text-white cursor-pointer">
        Skills
      </Link>
      <Link to="testimonials" smooth={true} duration={500} className="text-white cursor-pointer">
        Testimonials
      </Link>
      <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
