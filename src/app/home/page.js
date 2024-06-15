"use client";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { motion } from "framer-motion";
import Testimonials from "./testimonials";
import Experience from "./experience";
import Skills from "./skills";

import "./home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const loadingText = "Welcome to the world of Sohaib Ahmed!";
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
      //take to top of the page
      // window.scrollTo(0, 0);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles.js loaded", container);
  };
  return (
    <div className="flex flex-col min-h-screen p-20">
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
              speed: 1,
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
        I am a full stack developer with an experience of over 2 years now. I
        have multiple projects under my belt which are deployed and running
        successfully. I am also a passionate data analyst. Ive proven my skills
        in data analysis and visualization by working on freelance projects. I
        am always looking for new opportunities to learn and grow.
      </p>

      <div className="mt-10">
        <Experience />
      </div>
      <div className="mt-10">
        <Skills />
      </div>
      <div className="mt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">What my clients say about me</h1>
        </div>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
