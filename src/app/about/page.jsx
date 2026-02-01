import React from 'react'
import { orbitron, rajdhani } from "../fonts"
const About = () => {
  return (
    <>
      <div className=' relative  h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-4'>
        <div className={`${orbitron.className} text-servicehead text-6xl font-bold tracking-widest  `}>Who We Are</div>
        <p className={`${rajdhani.className} text-white font-semibold`}>Architects of the Digital Fortress</p>

      </div>

      <div className="about_section flex items-center gap-20 mt-20 mb-20 ml-32">
        <div className='w-[35vw] text-2xl'>
          <p>At <span className={`${rajdhani.className} font-bold`}>ArmourMind Infotech</span>, we believe technology should be an impenetrable asset. Founded with a vision to secure the digital landscape, we specialize in high-end cybersecurity protocols.</p>
          <p className={`${rajdhani.className} mt-4`}>Whether you need a custom software solution or a home server that rivals enterprise builds, our team delivers precision, security, and aesthetics.</p>
        </div>

        <div className=' flex flex-col items-center gap-4'>
          <div className="card bg-service_card_color border border-navborder w-[39vw] h-36 rounded-lg flex items-center justify-center flex-col">
            <div className={`${orbitron.className} font-bold text-5xl text-servicehead`}>100%</div>
            <div className='font-semibold'>System Uptime</div>
          </div>
          <div className="card bg-service_card_color border border-navborder w-[39vw] h-36 rounded-lg flex items-center justify-center flex-col">
            <div className={`${orbitron.className} font-bold text-5xl text-servicehead`}>24/7</div>
            <div className='font-semibold'>Threat Monitering</div>
          </div>
          
        </div>
      </div>
    </>

  )
}

export default About
