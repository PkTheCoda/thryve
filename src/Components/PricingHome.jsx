import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { FaExchangeAlt } from "react-icons/fa";
import { GrDomain } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { TbCalendarCancel } from "react-icons/tb";
import { PiPaintBrushBroadFill } from "react-icons/pi";

const PricingHome = () => {
  return (
    <div className='py-20 bg-main flex flex-col items-center justify-center font-outfit'>
        <div className="max-w-7xl py-4 w-full text-main flex flex-col gap-y-14 px-4">

            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2'>
                <h1 className="six-title pr-4 font-semibold">
                    Finally, Web Design Pricing
                    <span className="opacity-70">{' '} <span className='underline'>That Makes Sense</span>.</span>
                </h1>
                <div className='font-light text-xl text-slate-700 leading-8'>
                    <p className='mb-3'>
                    No vague “custom quotes” or hidden fees. At Thryve, our pricing is clear, upfront, and built to fit most projects. Got something out of the ordinary? We'll discuss it; no surprises.
                    </p>
                </div>
            </div>

            <div className='w-full flex flex-col gap-4'>

                <div className='bg-secondary flex flex-col items-center gap-y-4 rounded-md p-10 text-white shadow-md'>
                    <div className='w-full'>
                        <h2 className="four-title">
                            <span className="font-bold">$999</span> Full 5-Page Website
                        </h2>
                        <h4 className='two-title opacity-80'>
                            $20/mo Optional Monthly Maintanence
                        </h4>
                    </div>

                    <div className='w-full border-y grid sm:grid-cols-2 md:grid-cols-3 gap-6 border-slate-400 text-slate-200 py-8 gap-y-8'>

                        <div className="flex flex-col gap-2">
                            <div className='p-2 rounded-md w-max bg-main'>
                                <GrHostMaintenance className='w-6 h-6 col-span-1 text-main'/>
                            </div>
                            <div className='col-span-5'>
                                <p className="text-2xl">Built-In Hosting Fees</p>
                                <h6 className="text-md text-slate-300">
                                    Hosting is included in your plan, no hidden fees or surprise charges, ever.
                                </h6>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-2 rounded-md w-max bg-main'>
                                <FaExchangeAlt className='w-6 h-6 col-span-1 text-main'/>
                            </div>
                            <div className='col-span-5'>
                                <p className="text-2xl">Unlimited Revisions</p>
                                <h6 className="text-md text-slate-300">
                                    Need edits? We’ll take care of them within 24 hours, as many times as you need.
                                </h6>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-2 rounded-md w-max bg-main'>
                                <GrDomain className='w-6 h-6 col-span-1 text-main'/>
                            </div>
                            <div className='col-span-5'>
                                <p className="text-2xl">Domain Management</p>
                                <h6 className="text-md text-slate-300">
                                    Our team manages everything domain related, from registration to transfers to renewals.
                                </h6>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-2 rounded-md w-max bg-main'>
                                <SiGoogleanalytics className='w-6 h-6 col-span-1 text-main'/>
                            </div>
                            <div className='col-span-5'>
                                <p className="text-2xl">Analytics</p>
                                <h6 className="text-md text-slate-300">
                                    We’ll set up Google Analytics so you can track performance and make smarter decisions.
                                </h6>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-2 rounded-md w-max bg-main'>
                                <TbCalendarCancel className='w-6 h-6 col-span-1 text-main'/>
                            </div>
                            <div className='col-span-5'>
                                <p className="text-2xl">Cancel Monthly Plan, no worries.</p>
                                <h6 className="text-md text-slate-300">
                                    You'll keep your website how it is, plus your domain, design files, and any other assets.
                                </h6>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className='p-2 rounded-md w-max bg-main'>
                                <PiPaintBrushBroadFill className='w-6 h-6 col-span-1 text-main'/>
                            </div>
                            <div className='col-span-5'>
                                <p className="text-2xl">A Beautiful Custom Website</p>
                                <h6 className="text-md text-slate-300">
                                    No prebuilt templates or drag-and-drop editors; we design each site originally from scratch.
                                </h6>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex justify-end">
                        <a href='#contact' class="w-max flex items-center text-lg h-10 px-4 bg-main rounded-md shadow-md text-main transition300scale focus:outline-none">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>

                    <div className='bg-white flex flex-col h-max items-center gap-y-4 rounded-md w-full p-10 text-main shadow-md'>
                        <div className='flex w-full flex-col gap-y-2'>
                            <h2 className="four-title">
                                Custom Contracts
                            </h2>
                            <p className='text-lg'>
                                Only need a landing page? Or looking for more than 5 pages? We’ll give you a custom quote based on your project’s scope, page count, and complexity.
                            </p>
                        </div>
                        <div className='w-full border-t grid grid-cols-1 gap-6 border-slate-400 text-main'>
                        </div>
                        <div className="w-full flex justify-end">
                            <a href='/contact' target='_blank' class="w-max flex items-center text-lg h-10 px-4 bg-secondary rounded-md shadow-md text-white transition300scale focus:outline-none">
                                Book a Call
                            </a>
                        </div>
                    </div>

                    <div className='bg-[#705531] flex flex-col h-max items-center gap-y-4 rounded-md w-full p-10 text-white shadow-md'>
                        <div className='flex w-full flex-col gap-y-2'>
                            <h2 className="four-title">
                                Website Redesigns
                            </h2>
                            <p className='text-lg'>
                                Already have a website but want it redesigned? We'll do it for a 
                                flat fee of <span className="font-semibold">$800</span> for a standard 5-page site.
                                This includes websites built with page-builders such as <span className="font-semibold">Wordpress, Wix, Squarespace, etc.</span>
                            </p>
                        </div>
                        <div className='w-full border-t grid grid-cols-1 gap-6 border-slate-100 text-main'>
                        </div>
                        <div className="w-full flex justify-end">
                            <a href='/contact' target='_blank' class="w-max flex items-center text-lg h-10 px-4 bg-main rounded-md shadow-md text-main transition300scale focus:outline-none">
                                Book a Call
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div className='text-base text-center opacity-60'>
            Are you a nonprofit or student run organization? <a href="mailto:pranavkonjeti@gmail.com" className='text-blue-700 underline'>Contact Us</a> {' '} and we'll offer you a <b>20%</b> discount.
        </div>
    </div>

  )
}

export default PricingHome