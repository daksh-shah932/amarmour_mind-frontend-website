"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { orbitron, rajdhani } from "../../fonts"
const cybersecurity = () => {
    const router = useRouter()
    return (
        <>
       
            <div className=' relative  h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-4'>
                <div className={`${orbitron.className} text-servicehead text-6xl font-bold tracking-widest  `}>Server Solutions</div>
                <p className={`${rajdhani.className} text-white font-semibold`}>NAS, Home Labs & Enterprise Storage</p>

            </div>
             <button onClick={()=>router.push("/services")} className=" font-bold  mt-3 border border-navborder px-3 py-2 rounded-md back flex top-0 ml-4 hover:text-servicehead left-0">Back to Services</button>
            <div className=' flex flex-col justify-center gap-8 mt-1 ml-28'>
                <h3 className={`${orbitron.className} text-servicehead font-semibold text-3xl mt-5`}>Own Your Data</h3>

                <p className={`${orbitron.className} w-[40vw]  `}>Stop relying on public clouds. We build custom server solutions tailored for home media, small office backups, and heavy data processing.</p>
                <ul className=' flex flex-col gap-1'>
                    <li> <span className='font-bold'>🔹 NAS Setup:</span> Centralized storage.</li>
                    <li> <span className='font-bold'>🔹 Media Servers:</span> Plex/Jellyfin integration.</li>
                    <li>     <span className='font-bold'>🔹 Virtualization:</span> Run multiple OS instances.</li>
                </ul>


            </div>
            <button
                onClick={() => router.push("/contact")}
                className={`${orbitron.className} w-52 inline-flex pl-8 text-center py-2 text-sm border ml-28 mt-6 font-semibold border-navborder text-textcolor rounded-md hover:bg-textcolor hover:text-black transition-all`}
            >
                Build My Server
            </button>
        </>

    )
}

export default cybersecurity
