import React from 'react'
import mockuphero from '../assets/mockuphero.png'

const Hero = () => {
  return (
    <div className='bg-[#faf7ee] font-outfit h-max py-10 flex justify-center'>
      <div className="max-w-[100rem] w-full py-4 flex gap-x-6">

        <div className="py-4 w-5/12 flex flex-col gap-y-4 justify-center">

          <h1 className='six-title font-bold text-[#1f483e]'>
            We turn your dreams
            into realities.
          </h1>

          <p className='paragraph-responsive text-[#878785] leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit quas voluptate voluptates reprehenderit culpa deleniti!
            Optio blanditiis reprehenderit aliquam dolor distinctio.
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
    </div>
  )
}

export default Hero