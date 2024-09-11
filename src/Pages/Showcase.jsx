import React from "react";
import ecoeatsPic from '../assets/websample2.png'

export default function Showcase() {
    return (
        <>
            <div className="py-20 bg-[#faf7ee] font-outfit">
                <div className="max-w-[80rem] mx-auto py-20 flex flex-col items-center gap-10">
                    <h1 className="seven-title font-medium tracking-tight text-center">
                        View some of our <span className="text-main block">Incredible Work.</span>
                    </h1>
                    <div className="py-10 border border-black w-full grid grid-cols-3 gap-10">
                        <div className="py-4 bg-red-100">
                            <img src={ecoeatsPic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}