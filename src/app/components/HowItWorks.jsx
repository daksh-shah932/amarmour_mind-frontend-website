"use client";

import { orbitron, rajdhani } from "../fonts";

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className={`${orbitron.className} text-2xl sm:text-3xl lg:text-4xl font-bold text-servicehead`}>
            How It Works
          </h2>

          <p className={`${rajdhani.className} mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto`}>
            A proven security workflow combining AI speed with human expertise.
          </p>
        </div>

        {/* ===================== */}
        {/* DESKTOP ZIG-ZAG TIMELINE */}
        {/* ===================== */}
        <div className="hidden lg:block relative mt-[30vh] min-h-[520px]">

          {/* HORIZONTAL LINE */}
          <div className="absolute top-6 left-0 right-0 h-px p-1 rounded-full bg-navborder z-0" />

          <div className="grid grid-cols-4 gap-12">

            {/* STEP 1 */}
            <StepCard
              className="-top-[175px]"
              direction="up"
              icon="onmwuuox"
              title="Map (AI)"
              desc="We connect to your URL or IP and map your entire digital footprint in minutes."
              target="hiw-card-1"
            />

            {/* STEP 2 */}
            <StepCard
              className="top-[60px]"
              direction="down"
              icon="wjyqkiew"
              title="Scan (Automated)"
              desc="Our engines hunt for 1,000+ known vulnerabilities instantly."
              target="hiw-card-2"
            />

            {/* STEP 3 */}
            <StepCard
              className="-top-[175px]"
              direction="up"
              icon="srupsmbe"
              title="Attack (Human)"
              desc="Ethical hackers manually test business logic."
              target="hiw-card-3"
            />

            {/* STEP 4 */}
            <StepCard
              className="top-[60px]"
              direction="down"
              icon="apbwvyeg"
              title="Secure (Together)"
              desc="Fix issues and we re-test to confirm safety."
              target="hiw-card-4"
            />

          </div>
        </div>

        {/* ===================== */}
        {/* MOBILE / TABLET VERTICAL TIMELINE */}
        {/* ===================== */}
        <div className="lg:hidden relative">

          {/* vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-[3px] bg-navborder" />

          <div className="flex flex-col gap-10 pl-14">

            <VerticalStep
              icon="onmwuuox"
              title="Map (AI)"
              desc="We connect to your URL or IP and map your entire digital footprint in minutes."
            />

            <VerticalStep
              icon="wjyqkiew"
              title="Scan (Automated)"
              desc="Our engines hunt for 1,000+ known vulnerabilities instantly."
            />

            <VerticalStep
              icon="srupsmbe"
              title="Attack (Human)"
              desc="Ethical hackers manually test business logic."
            />

            <VerticalStep
              icon="apbwvyeg"
              title="Secure (Together)"
              desc="Fix issues and we re-test to confirm safety."
            />

          </div>
        </div>

      </div>
    </section>
  );
}

/* ===================== */
/* DESKTOP STEP CARD */
/* ===================== */

function StepCard({ className, icon, title, desc, target, direction }) {
  return (
    <div className="relative flex justify-center">

      {/* connector line */}
      {direction === "up" ? (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-9 w-[3px] bg-navborder" />
      ) : (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 h-9 w-[3px] bg-navborder" />
      )}

      <div
        className={`
          group absolute ${className}
          flex flex-col items-center gap-2
          rounded-lg py-4 px-4
          bg-service_card_color
          border border-white/10
          transition-all duration-300
          hover:scale-110 hover:-translate-y-2 hover:z-20
          hover:border-servicehead/40
          hover:bg-black/40
        `}
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/40">
          <lord-icon
            src={`https://cdn.lordicon.com/${icon}.json`}
            trigger="hover"
            target={`.${target}`}
            colors="primary:#ed8d8d,secondary:#b8b1b1"
            style={{ width: "38px", height: "38px" }}
          />
        </div>

        <h3 className={`${orbitron.className} text-lg font-semibold group-hover:text-servicehead`}>
          {title}
        </h3>

        <p className={`${rajdhani.className} text-sm text-white/70 max-w-xs text-center`}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ===================== */
/* MOBILE VERTICAL STEP */
/* ===================== */

function VerticalStep({ icon, title, desc }) {
  return (
    <div className="relative">

      {/* dot */}
      <div className="absolute -left-[34px] top-10 w-4 h-4 rounded-full bg-servicehead" />

      <div className="bg-service_card_color border border-white/10 rounded-lg p-5">
        <div className="flex items-center gap-4 mb-2">

          <lord-icon
            src={`https://cdn.lordicon.com/${icon}.json`}
            trigger="hover"
            colors="primary:#ed8d8d,secondary:#b8b1b1"
            style={{ width: "32px", height: "32px" }}
          />

          <h3 className={`${orbitron.className} text-lg font-semibold`}>
            {title}
          </h3>
        </div>

        <p className={`${rajdhani.className} text-sm text-white/70`}>
          {desc}
        </p>
      </div>
    </div>
  );
}
