"use client";

import { orbitron, rajdhani } from "../fonts";

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-16 text-center">
          <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold text-servicehead`}>
            How It Works
          </h2>

          <p className={`${rajdhani.className} mt-4 text-lg text-white/70`}>
            A proven security workflow combining AI speed with human expertise.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-[30vh]">

          {/* HORIZONTAL LINE */}
          <div className="absolute top-6 left-0 right-0 h-px p-1 rounded-full bg-navborder hidden md:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* STEP 1 */}
            <div className="relative flex flex-col items-center text-center z-10">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-9 p-0.5 bg-navborder hidden md:block" />

              <div
                className="
                  hiw-card-1 group
                  absolute -top-[175px]
                  flex flex-col items-center gap-2
                  rounded-lg py-4
                  bg-service_card_color
                  border border-white/10
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:scale-110 hover:-translate-y-2 hover:z-20
                  hover:border-servicehead/40
                  hover:bg-black/40
                "
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/40">
                  <lord-icon
                    src="https://cdn.lordicon.com/onmwuuox.json"
                    trigger="hover"
                    target=".hiw-card-1"
                    state="hover-jump-roll"
                    colors="primary:#ed8d8d,secondary:#b8b1b1"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>

                <h3 className={`${orbitron.className} text-lg font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
                  Map (AI)
                </h3>

                <p className={`${rajdhani.className} text-sm text-white/70 max-w-xs`}>
                  We connect to your URL or IP and map your entire digital footprint
                  in minutes.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex flex-col items-center text-center z-10">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 h-9 p-0.5 bg-navborder hidden md:block" />

              <div
                className="
                  hiw-card-2 group
                  absolute top-[60px]
                  flex flex-col items-center gap-2
                  rounded-lg py-4
                  bg-service_card_color
                  border border-white/10
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:scale-110 hover:-translate-y-2 hover:z-20
                  hover:border-servicehead/40
                  hover:bg-black/40
                "
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/40">
                  <lord-icon
                    src="https://cdn.lordicon.com/wjyqkiew.json"
                    trigger="hover"
                    target=".hiw-card-2"
                    colors="primary:#ed8d8d,secondary:#b8b1b1"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>

                <h3 className={`${orbitron.className} text-lg font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
                  Scan (Automated)
                </h3>

                <p className={`${rajdhani.className} text-sm text-white/70 max-w-xs`}>
                  Our engines hunt for 1,000+ known vulnerabilities (CVEs)
                  instantly across your stack.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex flex-col items-center text-center z-10">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-9 p-0.5 bg-navborder hidden md:block" />

              <div
                className="
                  hiw-card-3 group
                  absolute -top-[175px]
                  flex flex-col items-center gap-2
                  rounded-lg py-4
                  bg-service_card_color
                  border border-white/10
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:scale-110 hover:-translate-y-2 hover:z-20
                  hover:border-servicehead/40
                  hover:bg-black/40
                "
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/40">
                  <lord-icon
                    src="https://cdn.lordicon.com/srupsmbe.json"
                    trigger="hover"
                    target=".hiw-card-3"
                    colors="primary:#ed8d8d,secondary:#b8b1b1"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>

                <h3 className={`${orbitron.className} text-lg font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
                  Attack (Human)
                </h3>

                <p className={`${rajdhani.className} text-sm text-white/70 max-w-xs`}>
                  Ethical hackers manually test business logic to uncover complex
                  bugs that bots miss.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="relative flex flex-col items-center text-center z-10">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 h-9 p-0.5 bg-navborder hidden md:block" />

              <div
                className="
                  hiw-card-4 group
                  absolute top-[60px]
                  flex flex-col items-center gap-2
                  rounded-lg py-4
                  bg-service_card_color
                  border border-white/10
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:scale-110 hover:-translate-y-2 hover:z-20
                  hover:border-servicehead/40
                  hover:bg-black/40
                "
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-black/40">
                  <lord-icon
                    src="https://cdn.lordicon.com/apbwvyeg.json"
                    trigger="hover"
                    target=".hiw-card-4"
                    colors="primary:#ed8d8d,secondary:#b8b1b1"
                    style={{ width: "35px", height: "35px" }}
                  />
                </div>

                <h3 className={`${orbitron.className} text-lg font-semibold transition-colors duration-300 group-hover:text-servicehead`}>
                  Secure (Together)
                </h3>

                <p className={`${rajdhani.className} text-sm text-white/70 max-w-xs`}>
                  You receive a clean report. Fix the issues, and we re-test for
                  free to confirm safety.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
