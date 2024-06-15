"use client";
import React from "react";
import { Link } from "react-scroll";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsTriangle } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-row justify-end mt-10 gap-3">
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md hover:bg-blue-900 hover:shadow-lg cursor-pointer flex flex-row items-center"
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/sohaib-ahmed-sipra/",
            "_blank"
          )
        }
      >
        <BsLinkedin className="mr-2" /> LinkedIn
      </button>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md hover:bg-blue-900 hover:shadow-lg cursor-pointer flex flex-row items-center"
        onClick={() =>
          window.open("https://github.com/Sohaib-Ahmed869", "_blank")
        }
      >
        <AiFillGithub className="mr-2" /> Github
      </button>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md hover:bg-blue-900 hover:shadow-lg cursor-pointer flex flex-row items-center"
        onClick={() =>
          window.open(
            "https://vercel.com/sohaib-ahmeds-projects-a27ab513",
            "_blank"
          )
        }
      >
        <BsTriangle className="mr-2" /> Vercel
      </button>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md hover:bg-blue-900 hover:shadow-lg cursor-pointer flex flex-row items-center"
        onClick={() =>
          window.open(
            "https://public.tableau.com/app/profile/sohaib.ahmed3964/vizzes",
            "_blank"
          )
        }
      >
        <BsPlus className="mr-2" /> Tableau
      </button>
      <button
        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-2 rounded-md hover:bg-blue-900 hover:shadow-lg cursor-pointer flex flex-row items-center"
        onClick={() => window.open("mailto:sohaibahmedsipra@gmail.com")}
      >
        <HiOutlineMail className="mr-2" /> Email
      </button>
    </div>
  );
};

export default Contact;
