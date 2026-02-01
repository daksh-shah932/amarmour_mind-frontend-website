"use client";

import Image from "next/image";
import { orbitron, rajdhani } from "../fonts";

export default function TrustSection() {
  return (
    <section className="relative z-10 py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 items-center text-center">

        {/* GRAY-SCALE LOGO BAR */}
        <div className="flex flex-wrap justify-center items-center gap-12  z-20  relative border-y border-white/10 py-8">
          <Image src="/logos/OWASP.png" className="mix-blend-multiply" alt="OWASP Top 10" width={150} height={60} />
          <Image src="/logos/SANS.png" className="mix-blend-multiply" alt="SANS 25" width={100} height={60} />
          <Image src="/logos/SOC2.png" className="mix-blend-multiply" alt="SOC 2" width={120} height={60} />
          <Image src="/logos/ISO27001.png" className="mix-blend-multiply" alt="ISO 27001" width={120} height={200} />
          <Image src="/logos/GDPR.png" className="mix-blend-multiply" alt="GDPR" width={120} height={60} />
        </div>

        {/* HEADLINE */}
        <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold text-servicehead`}>
          Aligned with Global Standards
        </h2>

        {/* CERTIFICATIONS */}
        <div className="flex flex-col gap-6 items-center">
          <p className={`${rajdhani.className} text-lg text-white/80`}>
            Tested by Certified Experts holding:
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10">
            <Image src="/logos/OSCP.png" alt="OSCP Certified" width={90} height={90} />
            <Image src="/logos/CEH.png" alt="CEH Certified" width={90} height={90} />
            <Image src="/logos/CISSP.png" alt="CISSP Certified" width={200} height={90} />
          </div>
        </div>

        {/* PROMISE */}
        <p className={`${rajdhani.className} text-lg text-white/70 max-w-3xl`}>
          Trusted by SaaS & Fintech startups to secure client data.
        </p>

      </div>
    </section>
  );
}
