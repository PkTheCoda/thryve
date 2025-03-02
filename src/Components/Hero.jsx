import React from 'react'
import mockuphero from '../assets/mockuphero.png'
import { FaClockRotateLeft } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import websample1 from '../assets/websample1.png'
import websample2 from '../assets/websample2.png'
import websample3 from '../assets/websample3.png'
import websample4 from '../assets/websample4.png'
import websample5 from '../assets/websample5.png'
import websample6 from '../assets/websample6.png'
import websample8 from '../assets/websample8.png'
import websample9 from '../assets/websample9.png'
import websample10 from '../assets/websample10.png'
import websample11 from '../assets/pawsandrelaxhero.png'
import websample12 from '../assets/infosavvyhero.png'

const Hero = () => {
  return (
    <div className='bg-[#faf7ee] font-outfit h-max py-10 flex flex-col items-center justify-center'>
      <div className="max-w-[110rem] w-full py-4 flex flex-col gap-x-6">

        <div className="py-4 w-full flex flex-col items-center gap-y-4 justify-center">

          <h1 className='seven-title text-center font-semibold tracking-tight text-[#1f483e]'>
            We build stunning websites
            <span className="opacity-70 block">At low, affordable prices.</span>
          </h1>

          <p className='paragraph-responsive text-xl text-main leading-loose text-center max-w-4xl'>
            Thryve specializes in small business web design and development for clients worldwide. Our websites are 
            hand-coded without any page builders to ensure the best perfomance and maximum ranking!
          </p>

          <div class="w-full flex justify-center gap-4">               
              <a 
                href='/showcase' 
                class="px-4 py-1 text-center transition300scale flex items-center justify-center text-lg bg-[#387e62] transition300 rounded shadow-md text-white focus:outline-none">
                  View our work
              </a>
          </div>

        </div>

        <div className="w-full py-10 pb-20">
          <Marquee speed={175} style={{paddingBottom: "20px", paddingTop: "20px"}} pauseOnHover>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://ecoeats.us" className='cursor-pointer' target='_blank'>
                <img src={websample2} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                EcoEats - Nonprofit Company
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://pawsandrelax.netlify.app" className='cursor-pointer' target='_blank'>
                <img src={websample11} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Paws and Relax - Dog Grooming Company
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="#" className='cursor-pointer' target='_blank'>
                <img src={websample12} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                InfoSavvy - EdTech Startup
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://glmow.netlify.app" className='cursor-pointer' target='_blank'>
                <img src={websample3} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Green Leaf Mowing - Lawn Mowing Company
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="#" className='cursor-pointer' target='_blank'>
                <img src={websample10} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                EasyAP - AI Startup
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://cleanthegreen.org" className='cursor-pointer' target='_blank'>
                <img src={websample9} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Clean Green - Lawn Mowing Company
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://score1600.com" className='cursor-pointer' target='_blank'>
                <img src={websample8} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Score1600 - SAT Tutoring Website
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://desource.app" className='cursor-pointer' target='_blank'>
                <img src={websample4} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Desource - Software Website
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://amcacademy.vercel.app" className='cursor-pointer' target='_blank'>
                <img src={websample5} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                AMC Academy - Tutoring Company
              </div>
            </div>

            <div className='mr-4 rounded-md shadow-md'>
              <a href="https://learntheweb.org" className='cursor-pointer' target='_blank'>
                <img src={websample6} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Learntheweb - Nonprofit Company
              </div>
            </div>
            
            <div className='mr-4 rounded-md shadow-md'>
              <a href="#" className='cursor-pointer'>
                <img src={websample1} alt="Picture of website sample #1 Thryve has designed" className='h-[20rem] lg:h-[30rem] rounded-t-md'/>
              </a>
              <div className='w-full py-2 text-white text-center bg-secondary rounded-b-md'>
                Flourish - Lawn Mowing Company
              </div>
            </div>

            
          </Marquee>
          <div className="text-center opacity-80">
            Click on a website to view it live!
          </div>
        </div>

      </div>

      <div className="w-full max-w-6xl relative z-50 flex flex-col gap-y-2 tracking-tighter items-center justify-center">
        <div className='text-center flex flex-col max-w-4xl gap-y-2 text-[#1f483e]'>
          <h2 className="five-title font-medium">
            Imagine reaching thousands of new customers and expanding your brand's visibility worldwide.
          </h2>
          <p className='paragraph-responsive font-light'>
            (Well, that's exactly what we do here!)
          </p>
        </div>
        <div className="p-4 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-10 bg-white rounded-md shadow-md flex flex-col gap-y-2">
            <div className="flex gap-x-2 items-center text-xl font-light">
              <FaClockRotateLeft className='h-4 w-4'/>
              Your business without a website
            </div>
            <h2 className="four-title font-medium">
              Limited Reach, Stalled Growth: Business Without a Website
            </h2>
            <div className='font-outfit w-full lg:w-full flex md:flex-row flex-col gap-x-2'>
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
            <div className='font-outfit w-full lg:w-full flex md:flex-row flex-col gap-x-2'>
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