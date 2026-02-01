"use client"
import React from 'react'
import { orbitron, rajdhani } from "../fonts"

import { useRouter } from 'next/navigation'
const Services = () => {
  const router = useRouter()
  const services_data = [
    {
      svg: "🛡️",
      title: "Cyber Security",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      route:"/services/cybersecurity"
    },
   
    {
      svg: "🖥️",
      title: "Home & Office Services",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      route:"/services/servers"
    },
    {
      svg: "💻",
      title: "Software Development",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      route:"/services/software"
    }
  ]
  return (
    <>
      <div className=' relative  h-[160px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-4'>
        <div className={`${orbitron.className} text-servicehead text-5xl font-bold tracking-widest  `}>Our Expertice</div>
        <p className={`${rajdhani.className} text-white font-semibold`}>Deploying Advanced Solution</p>

      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center   items-center mt-20 mb-20">
        {services_data.map((service, index) => (

         <div key={index} onClick={()=>router.push(service.route)} className=" relative z-30 flex flex-col  p-6 w-96 h-80 bg-service_card_color cursor-pointer rounded-lg border border-transparent shadow-lg transition-all duration-300 hover:scale-105 hover:border-navborder hover:shadow-xl  ">
            <div className="flex flex-col  justify-center gap-4 mx-7 my-10">
              <div className="text-5xl ">{service.svg}</div>
              <h3 className={`${orbitron.className} text-3xl font-semibold mb-2 text-servicehead`}>{service.title}</h3>
              <p className={`${rajdhani.className} text-sm text-white/80`}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default Services
