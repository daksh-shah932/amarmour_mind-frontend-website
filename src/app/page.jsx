"use client";

import { orbitron, rajdhani } from "./fonts";
import { useRouter } from "next/navigation";
import Carousal from "./components/Carousal";
import TrustSection from "./components/TrustSection";
import HowItWorks from "./components/HowItWorks";
import TargetAudience from "./components/TargetAudience";
import Subscription from "./components/Subscription";

const Page = () => {
  const router = useRouter();

  return (
    <>
      {/* HERO */}
      <section className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center gap-6 sm:gap-7 px-4">

        <h1
          className={`
            ${orbitron.className}
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
            text-shadow-cyber-red
          `}
        >
          SECURE YOUR FUTURE
        </h1>

        <div className="flex flex-col gap-2 sm:gap-3 max-w-4xl">
          <p className={`${rajdhani.className} text-base sm:text-xl md:text-2xl text-servicehead tracking-widest font-semibold`}>
            AI-Driven Penetration Testing for Modern Applications & Servers
          </p>

          <p className={`${rajdhani.className} text-base sm:text-xl md:text-2xl text-servicehead tracking-widest font-semibold`}>
            Cybersecurity | Servers | Development
          </p>
        </div>

        <button
          onClick={() => router.push("/services")}
          className="px-8 sm:px-10 py-3 border border-navborder font-semibold text-servicehead rounded-md hover:bg-servicehead hover:text-black transition-all"
        >
          Explore Solutions
        </button>
      </section>

      {/* PLATFORM PREVIEW */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <h2 className={`${orbitron.className} text-servicehead text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8`}>
          Platform Preview
        </h2>
        <Carousal />
      </section>

      {/* LORDICON */}
      <script src="https://cdn.lordicon.com/lordicon.js"></script>

      {/* HOW IT WORKS */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <HowItWorks />
      </section>

      {/* TARGET AUDIENCE */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <TargetAudience />
      </section>

      {/* TRUST SECTION */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <TrustSection />
      </section>

      {/* SUBSCRIPTION */}
      <section className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-0">
        <Subscription />
      </section>
    </>
  );
};

export default Page;
