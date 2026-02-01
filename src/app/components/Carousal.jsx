"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { orbitron, rajdhani } from "../fonts";

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto overflow-hidden rounded-xl border border-white/10 bg-black/30">

      {/* SLIDES CONTAINER */}
      <div className="relative min-h-[60vh] flex items-center justify-center ">

        <AnimatePresence mode="wait">

          {/* ───────────── SLIDE 1 ───────────── */}
          {current === 0 && (
            <motion.div
              key="slide-1"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center  px-20">

                {/* TEXT */}
                <div className="flex flex-col gap-6 justify-center">
                  <h3 className={`${orbitron.className} text-3xl font-bold text-servicehead`}>
                    Executive View
                  </h3>

                  <div className="flex flex-col gap-2">
                    <p className={`${rajdhani.className} text-lg text-white/80`}>
                      Your Risk, Quantified
                    </p>
                    <p className={`${rajdhani.className} text-lg text-white/80`}>
                      Instant visibility into your security posture. Know exactly where you stand.
                    </p>
                  </div>
                </div>

                {/* IMAGE — CENTERED */}
                <div className="
                  relative w-full
                  h-[40vh] max-h-[700px] min-h-[420px]
                  flex items-center justify-center
                  place-self-center
                ">
                  <Image
                    src="/app-1.png"
                    alt="Application pentesting"
                    fill
                    className="object-contain rounded-md"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          )}

         {/* ───────────── SLIDE 2 ───────────── */}
{current === 1 && (
  <motion.div
    key="slide-2"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.45, ease: "easeInOut" }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="
      grid grid-cols-1 md:grid-cols-2
      gap-10
      items-center
      w-full max-w-6xl
     
    ">

      {/* TEXT */}
      <div className="flex flex-col gap-6 justify-center">
        <h3 className={`${orbitron.className} text-3xl font-bold text-servicehead`}>
          Fix It
        </h3>

        <p className={`${rajdhani.className} text-xl text-white/80`}>
          No False Positives
        </p>

        <p className={`${rajdhani.className} text-lg text-white/70 leading-relaxed`}>
          Every bug is verified by a human security expert with clear,
          actionable steps your developers can use immediately.
        </p>
      </div>

      {/* FINDINGS */}
      <div className="
        bg-black/40
        border border-white/10
        rounded-lg
        p-6
        flex flex-col gap-4
        text-left
        place-self-center
      ">

        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div>
            <p className="text-white font-semibold">SQL Injection</p>
            <span className="text-xs px-2 py-1 rounded bg-red-600/20 text-red-400">
              Critical
            </span>
          </div>
          <span className="text-sm text-yellow-400">Open</span>
        </div>

        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div>
            <p className="text-white font-semibold">XSS Vulnerability</p>
            <span className="text-xs px-2 py-1 rounded bg-yellow-600/20 text-yellow-400">
              Medium
            </span>
          </div>
          <span className="text-sm text-green-400">Fixed</span>
        </div>

        <div className="bg-black/60 rounded-md p-4 text-sm font-mono text-white/80">
          <p className="mb-2 text-white font-semibold">Affected Code</p>
          <pre className="text-red-400">
{`cursor.execute(
  "SELECT * FROM users WHERE id = " + userInput
)`}
          </pre>
          <p className="mt-3 text-green-400">
            ✔ Use parameterized queries to prevent injection
          </p>
        </div>

        <p className="text-xs text-white/50">
          “No False Positives.” Every finding is human-verified.
        </p>
      </div>

    </div>
  </motion.div>
)}


          {/* ───────────── SLIDE 3 ───────────── */}
{current === 2 && (
  <motion.div
    key="slide-3"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.45, ease: "easeInOut" }}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="
      grid grid-cols-1 md:grid-cols-2
      gap-10
      items-center
      w-full max-w-6xl  
    ">

      {/* TEXT */}
      <div className="flex flex-col gap-6 justify-center">
        <h3 className={`${orbitron.className} text-3xl font-bold text-servicehead`}>
          Deal Closer
        </h3>

        <p className={`${rajdhani.className} text-lg text-white/80`}>
          Audit-Ready Reports
        </p>

        <p className={`${rajdhani.className} text-lg text-white/80`}>
          Download professional reports instantly for investors & auditors.
        </p>
      </div>

      {/* IMAGE */}
      <div
        className="
          relative w-full
          h-[65vh] max-h-[700px] min-h-[420px]
          flex items-center justify-center
          place-self-center
        "
      >
        <Image
          src="/app-2.png"
          alt="Security reports"
          fill
          className="object-contain"
          unoptimized
        />
      </div>

    </div>
  </motion.div>
)}
        </AnimatePresence>
      </div>

      {/* NAV BUTTONS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white px-3 py-2 rounded-full"
      >
        ❯
      </button>

    </div>
  );
}
