"use client";

import React from "react";
import { orbitron, rajdhani } from "../fonts";

const About = () => {
  return (
    <>
      {/* HERO HEADER */}
      <div className="relative h-[150px] sm:h-[170px] lg:h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-3 sm:gap-4 text-center px-4">
        <div
          className={`${orbitron.className} text-servicehead text-3xl sm:text-5xl lg:text-6xl font-bold tracking-widest`}
        >
          Who We Are
        </div>
        <p className={`${rajdhani.className} text-white font-semibold text-sm sm:text-base`}>
          Architects of the Digital Fortress
        </p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about_section flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mt-12 lg:mt-20 mb-12 lg:mb-20 px-6 sm:px-10 lg:px-16">

        {/* TEXT */}
        <div className="w-full lg:w-[45%] text-base sm:text-lg lg:text-2xl text-center lg:text-left">
          <p>
            At{" "}
            <span className={`${rajdhani.className} font-bold`}>
              ArmourMind Infotech
            </span>
            , we believe technology should be an impenetrable asset. Founded with
            a vision to secure the digital landscape, we specialize in high-end
            cybersecurity protocols.
          </p>

          <p className={`${rajdhani.className} mt-4`}>
            Whether you need a custom software solution or a home server that
            rivals enterprise builds, our team delivers precision, security, and
            aesthetics.
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="flex flex-col items-center gap-6 w-full lg:w-[45%]">

          <div className="card bg-service_card_color border border-navborder w-full sm:w-[80%] lg:w-full h-28 sm:h-32 lg:h-36 rounded-lg flex items-center justify-center flex-col">
            <div className={`${orbitron.className} font-bold text-3xl sm:text-4xl lg:text-5xl text-servicehead`}>
              100%
            </div>
            <div className="font-semibold text-sm sm:text-base">
              System Uptime
            </div>
          </div>

          <div className="card bg-service_card_color border border-navborder w-full sm:w-[80%] lg:w-full h-28 sm:h-32 lg:h-36 rounded-lg flex items-center justify-center flex-col">
            <div className={`${orbitron.className} font-bold text-3xl sm:text-4xl lg:text-5xl text-servicehead`}>
              24/7
            </div>
            <div className="font-semibold text-sm sm:text-base">
              Threat Monitoring
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
