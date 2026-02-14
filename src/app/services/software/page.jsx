"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { orbitron, rajdhani } from "../../fonts";

const Software = () => {
  const router = useRouter();

  return (
    <>
      {/* HEADER */}
      <div className="relative h-[150px] sm:h-[170px] lg:h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-3 sm:gap-4 text-center px-4">
        <div
          className={`${orbitron.className} text-servicehead text-3xl sm:text-5xl lg:text-6xl font-bold tracking-widest`}
        >
          Software Dev
        </div>
        <p className={`${rajdhani.className} text-white font-semibold text-sm sm:text-base`}>
          Web Apps, Automation & Scripting
        </p>
      </div>

      {/* BACK BUTTON */}
      <div className="px-4 sm:px-8 lg:px-16">
        <button
          onClick={() => router.push("/services")}
          className="font-bold mt-4 border border-navborder px-3 py-2 rounded-md hover:text-servicehead transition-all"
        >
          Back to Services
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-6 px-4 sm:px-8 lg:px-20 mb-16 sm:mb-20 lg:mb-28">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl">

          <h3 className={`${orbitron.className} text-servicehead font-semibold text-xl sm:text-2xl lg:text-3xl`}>
            Code That Scales
          </h3>

          <p className={`${rajdhani.className} text-base sm:text-lg lg:text-xl`}>
            We develop software that solves real business problems with clean,
            efficient code.
          </p>

          <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg">
            <li><span className="font-bold">🔹 Full Stack Development:</span> Modern, responsive websites.</li>
            <li><span className="font-bold">🔹 Automation:</span> Python scripts.</li>
            <li><span className="font-bold">🔹 Custom Apps:</span> Tools built for your workflow.</li>
          </ul>

          {/* CTA */}
          <button
            onClick={() => router.push("/contact")}
            className={`${orbitron.className} w-full sm:w-64 mt-4 py-3 text-sm border font-semibold border-navborder text-textcolor rounded-md hover:bg-textcolor hover:text-black transition-all`}
          >
            Start Project
          </button>
        </div>

        {/* STACK CARD */}
        <div className="card bg-service_card_color border border-navborder w-full sm:w-[80%] lg:w-[420px] min-h-[180px] rounded-lg flex justify-center flex-col gap-4 p-6">

          <div className={`${orbitron.className} font-bold text-3xl sm:text-4xl lg:text-5xl text-servicehead`}>
            Stack
          </div>

          <ul className="flex flex-col gap-1 text-sm sm:text-base mb-5">
            <li>• Python / Java</li>
            <li>• LAMP (Linux, Apache, MySQL, PHP)</li>
            <li>• Flutter</li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default Software;
