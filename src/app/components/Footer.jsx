"use client";

import { orbitron, rajdhani } from "../fonts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-darkbg">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className={`${orbitron.className} text-2xl font-semibold text-white`}>
              Armour<span className="text-servicehead">Mind</span>
            </h3>

            <p className={`${rajdhani.className} mt-4 max-w-md text-white/60 leading-relaxed`}>
              Continuous security testing for modern SaaS teams.
              Identify, validate, and fix real vulnerabilities before attackers do.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-wider text-white/40">
              Product
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className={`${rajdhani.className} text-white/70 hover:text-servicehead transition-colors`}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className={`${rajdhani.className} text-white/70 hover:text-servicehead transition-colors`}
                >
                  Subscription
                </Link>
              </li>

              <li>
                <Link
                  href="/workflow"
                  className={`${rajdhani.className} text-white/70 hover:text-servicehead transition-colors`}
                >
                  Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-wider text-white/40">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className={`${rajdhani.className} text-white/70 hover:text-servicehead transition-colors`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`${rajdhani.className} text-white/70 hover:text-servicehead transition-colors`}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className={`${rajdhani.className} text-white/70 cursor-not-allowed`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">

          {/* COPYRIGHT */}
          <p className={`${rajdhani.className} text-white/50 text-sm`}>
            © {new Date().getFullYear()} ArmourMind. All rights reserved.
          </p>

          {/* LEGAL */}
          <div className="flex gap-6">
            {["Terms", "Security", "Compliance"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-white/50 hover:text-servicehead transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
