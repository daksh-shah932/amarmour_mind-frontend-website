"use client";

import { orbitron, rajdhani } from "../fonts";

export default function SubscriptionWhatYouGet() {
  return (
    <section className="relative z-10 py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className={`${orbitron.className} text-3xl md:text-4xl font-bold text-servicehead`}>
            Subscription: What You Get
          </h2>

          <p className={`${rajdhani.className} mt-4 text-lg text-white/70`}>
            Continuous security coverage designed for growing teams.
          </p>
        </div>

        {/* PLAN BOX */}
        <div className="bg-black/30 border border-white/10 rounded-lg p-10">

          {/* PLAN TITLE */}
          <h3 className={`${orbitron.className} text-2xl font-semibold mb-8`}>
            The <span className="text-servicehead">Continuous Security</span> Plan
          </h3>

          {/* CHECKLIST */}
          <ul className="flex flex-col gap-6">

            {/* ITEM 1 */}
            <li className="flex items-start gap-4 p-2 rounded-md
             transition-all duration-300
             hover:ml-3 hover:bg-white/5 cursor-pointer ">
              <span className="text-green-400 mt-1">✔</span>
              <div>
                <p className="font-semibold">Dashboard Access</p>
                <p className={`${rajdhani.className} text-white/70`}>
                  24/7 real-time visibility into your application and
                  infrastructure security posture.
                </p>
              </div>
            </li>

            {/* ITEM 2 */}
            <li className="flex items-start gap-4 p-2 rounded-md
             transition-all duration-300
             hover:ml-3 hover:bg-white/5 cursor-pointer">
              <span className="text-green-400 mt-1">✔</span>
              <div>
                <p className="font-semibold">Hybrid Testing</p>
                <p className={`${rajdhani.className} text-white/70`}>
                  Monthly automated vulnerability scans combined with
                  bi-annual manual penetration testing.
                </p>
              </div>
            </li>

            {/* ITEM 3 */}
            <li className="flex items-start gap-4 p-2 rounded-md
             transition-all duration-300
             hover:ml-3 hover:bg-white/5 cursor-pointer">
              <span className="text-green-400 mt-1">✔</span>
              <div>
                <p className="font-semibold">Developer Support</p>
                <p className={`${rajdhani.className} text-white/70`}>
                  Chat directly with the security engineer who discovered the
                  issue for faster, clearer remediation.
                </p>
              </div>
            </li>

            {/* ITEM 4 */}
            <li className="flex items-start gap-4 p-2 rounded-md
             transition-all duration-300
             hover:ml-3 hover:bg-white/5 cursor-pointer">
              <span className="text-green-400 mt-1">✔</span>
              <div>
                <p className="font-semibold">Re-test Guarantee</p>
                <p className={`${rajdhani.className} text-white/70`}>
                  Once you fix the bugs, we verify your patches for free to
                  confirm you’re secure.
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  );
}
