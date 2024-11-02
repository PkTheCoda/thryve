import React from "react";
import easyap_fullpage from '../fullpages/easyap_fullpage.png'

export default function Showcase() {
    return (
        <>
            <div className="pb-20 bg-[#faf7ee] font-outfit">
                <div className="max-w-[80rem] mx-auto py-20 flex flex-col items-center gap-10">
                    <h1 className='seven-title text-center font-semibold tracking-tight text-[#1f483e]'>
                        Take a look at our
                        <span className="opacity-70 block">Stunning Websites</span>
                    </h1>
                    <div className="w-full bg-red-100 p-10 grid grid-cols-2 gap-10">
                        <img src={easyap_fullpage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}