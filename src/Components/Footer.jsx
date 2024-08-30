import React from 'react'

const Footer = () => {
  return (
    <>
        <div class="bg-[#c0bcb0] py-6 font-outfit">
            <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                <div class="p-5">
                    <h3 class="font-bold text-xl text-main">Thryve.design</h3>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-main font-bold">Navigation</div>
                    <a class="my-3 block" href="/#">Home</a>
                    <a class="my-3 block" href="/contact">Contact</a>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-main font-bold">Services</div>
                    <a class="my-3 block" href="/#">Web Design</a>
                    <a class="my-3 block" href="/#">Website Maintanence</a>
                    <a class="my-3 block" href="/#">Website Redesign</a>
                </div>
                <div class="p-5">
                    <div class="text-sm uppercase text-main font-bold">Contact us</div>
                    <a class="my-3 block" href="/#"> (804) 655 1618</a>
                    <a class="my-3 block" href="/#">support@thryve.design</a>
                </div>
            </div>
        </div>

    </>
  )
}

export default Footer