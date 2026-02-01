"use client"
import { orbitron, rajdhani } from "./fonts"
import { useRouter } from "next/navigation"
import Carousal from "./components/Carousal"
import TrustSection from "./components/TrustSection"
import HowItWorks from "./components/HowItWorks"
import TargetAudience from "./components/TargetAudience"
import Subscription from "./components/Subscription"
const Page = () => {
  const router = useRouter()

  return (
    <>
    <section className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center text-center gap-7">
 <h1
  className={`
    ${orbitron.className}
    text-6xl md:text-7xl font-bold
    text-shadow-cyber-red
  `}
>
  SECURE YOUR FUTURE
</h1>


  <div className="flex flex-col gap-3">
    <p className={`${rajdhani.className} text-2xl text-servicehead tracking-widest font-semibold`}>
      AI-Driven Penetration Testing for Modern Applications & Servers
    </p>
    <p className={`${rajdhani.className} text-2xl text-servicehead tracking-widest font-semibold`}>
      Cybersecurity | Servers | Development
    </p>
  </div>

  <button
    onClick={() => router.push("/services")}
    className="px-10 py-3 border border-navborder font-semibold text-servicehead rounded-md hover:bg-servicehead hover:text-black transition-all"
  >
    Explore Solutions
  </button>
</section>

      <section className=" relative z-10 py-20">
        <h2 className={`${orbitron.className} text-servicehead  text-center text-5xl font-semibold mb-8`}>
          Platform Preview
        </h2>
        <Carousal />
      </section>
      <script src="https://cdn.lordicon.com/lordicon.js"></script>
      <section className=" relative z-10 py-20">
        <HowItWorks />
      </section>
      <section className=" relative z-10 py-20">
        <TargetAudience />
      </section>
      <section className=" relative z-10 py-20">
        <TrustSection />
      </section>
     
      <section className=" relative z-10 py-20">
        <Subscription />
      </section>
    </>
  )
}

export default Page
