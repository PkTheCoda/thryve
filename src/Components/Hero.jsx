import React from 'react'
import mockuphero from '../assets/mockuphero.png'
import { FaClockRotateLeft } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='bg-[#faf7ee] font-outfit h-max py-10 flex flex-col items-center justify-center'>
      <div className="max-w-[100rem] w-full py-4 flex gap-x-6">

        <div className="py-4 w-5/12 flex flex-col gap-y-4 justify-center">

          <h1 className='six-title font-bold text-[#1f483e]'>
            We turn your dreams
            into realities.
          </h1>

          <p className='paragraph-responsive text-[#878785] leading-loose'>
            Thryve specializes in small business web design and development for clients worldwide. Our websites are 
            hand-coded without any page builders to ensure the best perfomance and maximum ranking!
          </p>

          <div class="dark:bg-gray-800 w-full flex justify-center items-center">
              <div class="w-full flex flex-col gap-y-4">
                  <div class="flex items-center gap-x-2">
                      <input type="email" id="input-9" class="w-2/3 h-12 px-2 border-2 border-[#a2a2a0] text-gray-700 rounded focus:outline-none shadow-md" placeholder="Your Email Address"/>
                      <button class="w-1/3 text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 hover:text-white hover:bg-blue-400 hover:border-blue-400 focus:outline-none">Get a Quote</button>
                  </div>
                  <h5 className="text-sm text-[#aeaeae]">
                    *Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor dicta repellendus possimus. Dolores porro repellendus minus dolorem 
                  </h5>
              </div>
          </div>

        </div>

        <div className="py-4 w-7/12">
          <img src={mockuphero} alt="" />
        </div>

      </div>

      <div className="w-full max-w-6xl relative z-50 flex flex-col gap-y-2 tracking-tighter items-center justify-center">
        <div className='text-center flex flex-col max-w-4xl gap-y-2 text-[#1f483e]'>
          <h2 className="five-title font-medium">
            Imagine if there was a way you could put your brand in front of thousands and open your doors to a world of new customers.
          </h2>
          <p className='paragraph-responsive font-light'>
            (There is - it's called a website)
          </p>
        </div>
        <div className="py-4 w-full grid grid-cols-2 gap-4">
          <div className="p-10 bg-white rounded-md shadow-md flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center text-xl font-light">
              <FaClockRotateLeft className='h-4 w-4'/>
              Your business without a website
            </div>
            <h2 className="four-title font-medium">
              Limited Reach, Stalled Growth: Business Without a Website
            </h2>
            <div className='font-outfit md:w-2/3 lg:w-full flex md:flex-row flex-col gap-x-2'>
              <ul class="mt-4 space-y-3 text-base text-slate-700 sm:text-xl">
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Invisible to online searches: Potential customers can't find you.
                </li>
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Limited marketing reach: Stuck relying on word-of-mouth.
                </li>
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  No 24/7 sales channel: Missing out on potential conversions
                </li>
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Unprofessional image: Falls behind competitors with an online presence
                </li>
              </ul>
            </div>
          </div>
          <div className="p-10 text-[#142d27] bg-[#80e2ca] rounded-md shadow-md flex flex-col gap-y-2">
      
            <div className="flex gap-x-2 items-center text-xl font-light">
              Your Business after a website
              <FaClockRotateLeft className='h-4 w-4 -rotate-180'/>
            </div>
            <h2 className="four-title font-medium">
              24/7 Salesman, Global Reach: Business with a Website
            </h2>
            <div className='font-outfit md:w-2/3 lg:w-full flex md:flex-row flex-col gap-x-2'>
              <ul class="mt-4 space-y-3 text-base sm:text-xl">
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Dominate online searches: Get found by potential customers looking for your products or services
                </li>
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Expand your marketing reach: Attract a global audience with a website.
                </li>
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Convert visitors 24/7: Your website works tirelessly, closing deals even while you sleep.
                </li>
                <li class="flex items-start gap-3">
                  <div class="shrink-0 py-1.5">
                    <svg class="fill-error-200 h-3 w-3" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
                  </div>
                  Project a professional image: Build trust and credibility with a polished online presence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero