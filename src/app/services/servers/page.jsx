"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { orbitron, rajdhani } from "../../fonts";

const Servers = () => {
  const router = useRouter();

  return (
    <>
      {/* HEADER */}
      <div className="relative h-[150px] sm:h-[170px] lg:h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-3 sm:gap-4 text-center px-4">
        <div
          className={`${orbitron.className} text-servicehead text-3xl sm:text-5xl lg:text-6xl font-bold tracking-widest`}
        >
          Server Solutions
        </div>
        <p className={`${rajdhani.className} text-white font-semibold text-sm sm:text-base`}>
          NAS, Home Labs & Enterprise Storage
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

      {/* CONTENT */}
      <div className="flex flex-col justify-center gap-6 sm:gap-8 mt-4 px-4 sm:px-8 lg:px-28">

        <h3 className={`${orbitron.className} text-servicehead font-semibold text-xl sm:text-2xl lg:text-3xl mt-4`}>
          Own Your Data
        </h3>

        <p className={`${rajdhani.className} text-base sm:text-lg lg:text-xl max-w-2xl`}>
          Stop relying on public clouds. We build custom server solutions tailored
          for home media, small office backups, and heavy data processing.
        </p>

        <ul className="flex flex-col gap-2 text-sm sm:text-base lg:text-lg">
          <li><span className="font-bold">🔹 NAS Setup:</span> Centralized storage.</li>
          <li><span className="font-bold">🔹 Media Servers:</span> Plex/Jellyfin integration.</li>
          <li><span className="font-bold">🔹 Virtualization:</span> Run multiple OS instances.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="px-4 sm:px-8 lg:px-28">
        <button
          onClick={() => router.push("/contact")}
          className={`${orbitron.className} w-full sm:w-64 mt-8 py-3 text-sm border font-semibold border-navborder text-textcolor rounded-md hover:bg-textcolor hover:text-black transition-all`}
        >
          Build My Server
        </button>
      </div>
    </>
  );
};

export default Servers;
