"use client";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Testimonials from "./home/testimonials";
import Skills from "./home/skills";
import Experience from "./home/experience";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { BsTriangle } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";

import "./home/home.css";
import Navbar from "./Components/navbar";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
      //take to top of the page
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles.js loaded", container);
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen p-20" id="home">
        {showOverlay && <div className="overlay"></div>}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 200,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: {
                  enable: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="flex flex-row text-left">
          <h1 className="text-4xl font-bold text-left">
            My name is Sohaib Ahmed and I am{" "}
          </h1>
          <div className="ml-2 text-4xl font-bold gradient-text">
            <Typewriter
              options={{
                strings: [
                  " A Software Engineer",
                  " Full Stack Web Developer",
                  " A Junior Data Analyst",
                  " Learning DevOps",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
                pauseFor: 2000,
              }}
            />
          </div>
        </div>
        <p className="text-md mt-4">
          I am a full stack developer with an experience of 2+ years now. I have
          multiple projects under my belt which are deployed and running
          successfully. I am also a passionate data analyst. Ive proven my
          skills in data analysis and visualization by working on freelance
          projects. I am always looking for new opportunities to learn and grow.
        </p>
        <div className="mt-10 z-10">
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
        </div>
        <div className="mt-10" id="experience">
          <Experience />
        </div>
        <div className="mt-10" id="skills">
          <Skills />
        </div>
        <div className="mt-10" id="testimonials">
          <div className="text-center">
            <h1 className="text-2xl font-bold">
              What the clients say about me
            </h1>
          </div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Home;
