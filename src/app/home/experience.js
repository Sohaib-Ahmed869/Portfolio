"use client";
import React from "react";

const Experience = () => {
  const data = [
    {
      title: "Web Developer",
      company: "Mative Inc.",
      duration: "2024 - Present",
      description:
        "Working on developing and maintaining web applications using React, Node.js, and MongoDB/Firebase. The applications are built for clients in various industries such as employers, construction business, and e-commerce.",
    },
    {
      title: "Software Engineer",
      company: "Vintage Solutions",
      duration: "2023 - Present",
      description:
        "Project based work for development and deployment of various software applications. Stack used was MERN. Had the oppurtunity to learn Next.js as well. Deployed applications on Vercel, Render, Hostinger and AWS.",
    },
    {
      title: "Cheif Technology Officer",
      company: "Hexler Tech SMC Pvt. Ltd.",
      duration: "2023 - Present",
      description:
        "I am responsible for the overall technology strategy and implementation. I am leading the development in the company and managing the team of developers. I am also responsible for the deployment of the applications on the cloud.",
    },
    {
      title: "Data Analyst",
      company: "Freelance",
      duration: "2022 - 2024",
      description:
        "I provided consultation and development services for data analytics, visualization, and tutoring for SQL, Power BI, Python and Tableau.",
    },
  ];

  return (
    <div className="mt-10 flex flex-row p-10 bg-sky-950 bg-opacity-30">
      <div className="heading w-2/3">
        <h1 className="text-2xl font-bold">Experience</h1>
      </div>
      <div className="flex flex-col">
        {data.map((item) => (
          <div key={item.title} className="flex flex-row items-center">
            <div className="flex flex-col text-left mb-10 border-b border-gray-500 pb-10">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p className="text-lg text-white mt-1">{item.company}</p>
              <p className="text-sm text-gray-400 mt-1">{item.duration}</p>
              <p className="text-md text-gray-200 mt-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
