import React from 'react'

const Footer = () => {
  return (
    <>
        <div class="bg-[#25180d] py-6 font-outfit">
            <div class="flex flex-col items-center max-w-screen-lg px-4 sm:px-6 text-white mx-auto">
                <div className='sm:grid md:grid-cols-4 sm:grid-cols-2'>
                    <div class="p-5">
                        <h3 class="font-bold text-xl text-secondary">ThryveDesign</h3>
                    </div>
                    <div class="p-5">
                        <div class="text-sm uppercase text-secondary font-bold">Navigation</div>
                        <a class="my-3 block" href="/#">Home</a>
                        <a class="my-3 block" href="/contact">Contact</a>
                    </div>
                    <div class="p-5">
                        <div class="text-sm uppercase text-secondary font-bold">Services</div>
                        <a class="my-3 block" href="/#">Web Design</a>
                        <a class="my-3 block" href="/#">Website Maintanence</a>
                        <a class="my-3 block" href="/#">Website Redesign</a>
                    </div>
                    <div class="p-5">
                        <div class="text-sm uppercase text-secondary font-bold">Contact us</div>
                        <a class="my-3 block" href="/#"> (804) 655 1618</a>
                        <a class="my-3 block" href="/#">pranavkonjeti@gmail.com</a>
                    </div>
                </div>
                <div className='text-center w-full mt-10'>
                    Built with ❤️ by <a href="https://pranavkonjeti.com" target='_blank' className='text-blue-300 underline'>Pranav Konjeti</a>
                </div>
            </div>
        </div>

    </>
  )
}

export default Footer