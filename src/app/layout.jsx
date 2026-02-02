"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { rajdhani } from "./fonts";

export default function RootLayout({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  /* ================= SPOTLIGHT TRACKING ================= */
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ================= GRID WOBBLE ================= */
  useEffect(() => {
    const grid = document.getElementById("wobble-grid");
    if (!grid) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;

      grid.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html lang="en">
      <body className={`${rajdhani.className} bg-heroback text-white`}>

        {/* WOBBLING GRID BACKGROUND */}
        <div
          id="wobble-grid"
          className="
            fixed inset-0 -z-20 pointer-events-none
            bg-[linear-gradient(to_right,#403636_1px,transparent_1px),linear-gradient(to_bottom,#403636_1px,transparent_1px)]
            bg-[size:4rem_4rem]
            transition-transform duration-500 ease-out
          "
        />

        {/* SPOTLIGHT */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            WebkitMaskImage: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, white 0%, transparent 70%)`,
            maskImage: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, white 0%, transparent 70%)`,
            background: "#513e3e",
          }}
        />
<script src="https://cdn.lordicon.com/lordicon.js"></script>
<script src="https://animatedicons.co/scripts/embed-animated-icons.js"></script>
        <Navbar />

        <main className="relative z-10 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
