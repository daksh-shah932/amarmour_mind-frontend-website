"use client";

import { orbitron, rajdhani } from "../fonts";

export default function WhoItsFor() {
  return (
    <section className="relative z-10 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold text-servicehead`}>
            Who This Is For
          </h2>

          <p className={`${rajdhani.className} mt-4 text-lg text-white/70`}>
            Built for teams that take security seriously — without slowing down delivery.
          </p>
        </div>

        {/* AUDIENCE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* SaaS Founders */}
          <div
            className="
              group
              bg-black/30 border border-white/10 rounded-lg p-8
              flex flex-col gap-4
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-2 hover:scale-[1.03]
              hover:border-servicehead/40
              hover:bg-black/40
            "
          >
            <h3 className={`${orbitron.className} text-xl font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
              SaaS Founders
            </h3>

            <p className={`${rajdhani.className} text-white/80 leading-relaxed`}>
              You need a{" "}
              <span className="text-servicehead font-semibold">
                “Safe-to-Host”
              </span>{" "}
              certificate to close your first Enterprise deal.
            </p>
          </div>

          {/* CTOs & Developers */}
          <div
            className="
              group
              bg-black/30 border border-white/10 rounded-lg p-8
              flex flex-col gap-4
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-2 hover:scale-[1.03]
              hover:border-servicehead/40
              hover:bg-black/40
            "
          >
            <h3 className={`${orbitron.className} text-xl font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
              CTOs & Developers
            </h3>

            <p className={`${rajdhani.className} text-white/80 leading-relaxed`}>
              You need clear, actionable bug reports without the noise of false
              alarms slowing your release cycles.
            </p>
          </div>

          {/* Fintech & Healthcare */}
          <div
            className="
              group
              bg-black/30 border border-white/10 rounded-lg p-8
              flex flex-col gap-4
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-2 hover:scale-[1.03]
              hover:border-servicehead/40
              hover:bg-black/40
            "
          >
            <h3 className={`${orbitron.className} text-xl font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
              Fintech & Healthcare
            </h3>

            <p className={`${rajdhani.className} text-white/80 leading-relaxed`}>
              You operate under strict compliance requirements (RBI, HIPAA) and
              cannot afford a data leak.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
