import React from 'react'
import { PiHandshakeFill } from "react-icons/pi";
import { PiCheckFatDuotone } from "react-icons/pi";
import { MdOutlineFitScreen } from "react-icons/md";
import { TbExchange } from "react-icons/tb";
import { BsSpeedometer2 } from "react-icons/bs";
import webfeatureimage1 from '../assets/webfeatureimage1.svg'
import webfeatureimage2 from '../assets/webfeatureimage2.svg'
import webfeatureimage3 from '../assets/webfeatureimage3.svg'
import webfeatureimage4 from '../assets/webfeatureimage4.svg'

const MainFeatures = () => {
  return (
    <>
        <div className='pb-10 bg-[#1D4B40] relative z-40 flex flex-col items-center font-outfit font-medium tracking-tight'>
            <div className='pt-60 absolute -top-60 bg-[#1D4B40] w-full z-50'>
                    
            </div>
            <div className='py-2 max-w-7xl w-full flex flex-col gap-y-10'>
                <div className='flex flex-col gap-y-4 items-center'>
                    <div className='flex flex-col gap-y-2 items-center text-center'>
                        <h1 className="six-title text-white">
                            We Take Care <br /> <span className="opacity-80">Of Everything.</span>
                        </h1>
                    </div>
                    <p className='text-xl w-4/5 md:w-2/3 lg:w-1/2 font-light text-center text-secondary'>
                        Here at Thryve, we take care of everything you need to launch your online presence: 
                        from design and development to hosting, updates, and continuous support.
                    </p>
                </div>

                <div className='p-10 bg-[#f3efef] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md'>
                    <div className='flex flex-col gap-y-3 font-fig justify-center text-[#1D4B40]'>
                        <div className='p-2 rounded-md bg-[#1D4B40]/80 text-[#f3efef] w-max'>
                            <PiHandshakeFill className='w-8 h-8'/>
                        </div>
                        <h1 className="five-title text-[#1D4B40] font-semibold">
                            Let's create your site 
                            <span className="block opacity-70">How you want it.</span>
                        </h1>
                        <p className='text-lg tracking-wide w-5/6'>
                            Your site, your way. Feel free to give us other sites, colors, fonts, etc. for inspiration - or let us take control!
                        </p>
                        <div className='flex flex-col gap-y-2 tracking-wide text-[#1D4B40]'>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Unlimited Revisions</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Design calls/checkins</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Lifetime Support</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Access to code</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={webfeatureimage1} alt="" className='w-full'/>
                    </div>
                </div>

                <div className='p-10 bg-[#f3efef] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md'>
                    <div className="flex items-center">
                        <img src={webfeatureimage2} alt="" className='w-full'/>
                    </div>
                    <div className='flex flex-col gap-y-3 font-fig justify-center text-[#1D4B40] lg:pl-14'>
                        <div className='p-2 rounded-md bg-[#1D4B40]/80 text-[#f3efef] w-max'>
                            <TbExchange className='w-8 h-8'/>
                        </div>
                        <h1 className="five-title text-[#1D4B40] font-semibold">
                            As many changes
                            <span className="block opacity-70">As you need.</span>
                        </h1>
                        <p className='text-lg tracking-wide'>
                            Need an update? Just reach out—most changes are handled within 24 hours!
                        </p>
                        <div className='flex flex-col gap-y-2 tracking-wide text-[#1D4B40]'>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Unlimited Revisions</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Quick Response Time</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Page/Section Changes</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Revision History Access</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='p-10 bg-[#f3efef] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md'>
                    <div className='flex flex-col gap-y-3 font-fig justify-center text-[#1D4B40]'>
                        <div className='p-2 rounded-md bg-[#1D4B40]/80 text-[#f3efef] w-max'>
                            <MdOutlineFitScreen className='w-8 h-8'/>
                        </div>
                        <h1 className="five-title text-[#1D4B40] font-semibold">
                            A beautiful website
                            <span className="block opacity-70">On all screens.</span>
                        </h1>
                        <p className='text-lg tracking-wide'>
                            Whether it's a phone, tablet, computer, or monitor, your site will load and work perfectly either way!
                        </p>
                        <div className='flex flex-col gap-y-2 tracking-wide text-[#1D4B40]'>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Responsified Website</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Thorough testing</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Access to Color Palette</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Fonts, design mockup, etc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={webfeatureimage3} alt="" className='w-full'/>
                    </div>
                </div>

                <div className='p-10 bg-[#f3efef] text-slate-700 rounded-lg gap-5 grid grid-cols-1 md:grid-cols-2 shadow-md'>
                    <div className="flex items-center">
                        <img src={webfeatureimage4} alt="" className='w-full'/>
                    </div>
                    <div className='flex flex-col gap-y-3 font-fig justify-center text-[#1D4B40] lg:pl-14'>
                        <div className='p-2 rounded-md bg-[#1D4B40]/80 text-[#f3efef] w-max'>
                            <BsSpeedometer2 className='w-8 h-8'/>
                        </div>
                        <h1 className="five-title text-[#1D4B40] font-semibold">
                            When we say fast,
                            <span className="block opacity-70">We mean fast.</span>
                        </h1>
                        <p className='text-lg tracking-wide'>
                            Speed and accessibility aren’t optional; they’re built into every site we create for better SEO and user experience.
                        </p>
                        <div className='flex flex-col gap-y-2 tracking-wide text-[#1D4B40]'>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Secured Website</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">SSL Certificate</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-8'>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Flawless User Experience</p>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <PiCheckFatDuotone className='w-4 h-4'/>
                                    <p className="text-lg">Search Engine Optimized</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
  )
}

export default MainFeatures