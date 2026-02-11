"use client";

import React from "react";
import { orbitron, rajdhani } from "../fonts";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  const services_data = [
    {
      svg: "🛡️",
      title: "Cyber Security",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      route: "/services/cybersecurity",
    },
    {
      svg: "🖥️",
      title: "Home & Office Services",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidigna aliqua",
      route: "/services/servers",
    },
    {
      svg: "💻",
      title: "Software Development",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut laliqua",
      route: "/services/software",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="relative h-[140px] sm:h-[150px] lg:h-[160px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-3 sm:gap-4 text-center px-4">
        <div
          className={`${orbitron.className} text-servicehead text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest`}
        >
          Our Expertise
        </div>
        <p className={`${rajdhani.className} text-white font-semibold text-sm sm:text-base`}>
          Deploying Advanced Solutions
        </p>
      </div>

      {/* SERVICES SECTION */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-8 mt-12 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-20 px-6 sm:px-10 lg:px-16">

        {services_data.map((service, index) => (
          <div
            key={index}
            onClick={() => router.push(service.route)}
            className="
              relative z-30 flex flex-col
              p-6
              w-full sm:w-[85%] md:w-[320px] lg:w-[360px]
              min-h-[260px] lg:h-[300px]
              bg-service_card_color
              cursor-pointer
              rounded-lg
              border border-transparent
              shadow-lg
              transition-all duration-300
              hover:scale-105 hover:border-navborder hover:shadow-xl
            "
          >
            <div className="flex flex-col justify-center gap-4 sm:gap-5 mx-2 sm:mx-4 lg:mx-6 my-4 sm:my-6 ">

              <div className="text-4xl sm:text-5xl">{service.svg}</div>

              <h3 className={`${orbitron.className} text-2xl sm:text-3xl font-semibold text-servicehead`}>
                {service.title}
              </h3>

              <p className={`${rajdhani.className} text-sm sm:text-base text-white/80`}>
                {service.desc}
              </p>

            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default Services;
