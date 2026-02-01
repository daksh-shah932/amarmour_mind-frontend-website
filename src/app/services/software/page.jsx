"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { orbitron, rajdhani } from "../../fonts"
const cybersecurity = () => {
    const router = useRouter()
    return (
        <>

            <div className=' relative  h-[180px] bg-navcolor border-b border-navborder flex items-center justify-center flex-col gap-4'>
                <div className={`${orbitron.className} text-servicehead text-6xl font-bold tracking-widest  `}>Software Dev</div>
                <p className={`${rajdhani.className} text-white font-semibold`}>Web Apps, Automation & Scripting</p>

            </div>
            <button onClick={() => router.push("/services")} className=" font-bold  mt-3 border border-navborder px-3 py-2 rounded-md back flex top-0 ml-4 hover:text-servicehead left-0">Back to Services</button>
            <div className='flex justify-between items-center mx-10 mr-20'>
                <div>
                    <div className=' flex flex-col justify-center gap-8 mt-1 ml-28'>
                        <h3 className={`${orbitron.className} text-servicehead font-semibold text-3xl mt-5`}>Code That Scales</h3>

                        <p className={`${orbitron.className} w-[34vw]  `}>We develop software that solves real business problems with clean, efficient code.</p>
                        <ul className=' flex flex-col gap-1'>
                            <li> <span className='font-bold'>🔹  Full Stack Development:</span>  Modern, responsive websites.</li>
                            <li> <span className='font-bold'>🔹  Automation: </span> Python scripts.</li>
                            <li>     <span className='font-bold'>🔹 Custom Apps: </span> Tools built for your workflow.</li>
                        </ul>


                    </div>
                    <button
                        onClick={() => router.push("/contact")}
                        className={`${orbitron.className} w-44 inline-flex pl-8 text-center py-2 text-sm border ml-28 mt-6 font-semibold border-navborder text-textcolor rounded-md hover:bg-textcolor hover:text-black transition-all`}
                    >
                        Start Project
                    </button>
                </div>
                <div className="card bg-service_card_color border border-navborder w-[39vw] h-44 rounded-lg flex justify-center  flex-col gap-4">
                    <div className={`${orbitron.className} font-bold text-5xl text-servicehead ml-5 mt-2`}>Stack</div>
                    <ul className='flex flex-col gap-1 ml-4 mb-2'>
                        <li>• Python/Java</li>
                        <li>• LAMP (Linux, Apache, MySQL, PHP)</li>
                        <li>• Flutter</li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default cybersecurity
