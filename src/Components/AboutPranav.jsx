import React from 'react'

const AboutPranav = () => {
  return (
    <div className='font-outfit py-10 flex justify-center bg-[#faf7ee]'>
        <div className="py-4 flex gap-8 max-w-7xl w-full">
            <div className="w-5/12 flex flex-col gap-y-2 items-center">
                <img 
                    src="https://www.pranavkonjeti.com/assets/pranavlatest-5dc23609.jpg" 
                    alt="A picture of me! (Pranav Konjeti)" 
                    className='rounded-md shadow-md'
                />
                <div className='flex gap-x-2'>
                    <a href='https://pranavkonjeti.com' target='_blank' class="w-max flex items-center text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 transition300scale focus:outline-none">
                        View my Portfolio
                    </a>
                    <a href='https://drive.google.com/file/d/1CPUSBaFwPdwwFsnrXYgNnju5K6q5da7e/view?usp=sharing' target='_blank' class="w-max flex items-center text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 transition300scale focus:outline-none">
                        Download my Resume
                    </a>
                </div>
            </div>
            <div className="w-7/12 flex flex-col justify-center gap-y-2 text-[#1D4B40]">

                <div>
                    {/* <p className="paragraph-responsive tracking-wide font-light">
                        A bit about the Founder
                    </p> */}
                    <h2 className="six-title font-medium">
                        Let's put a face to this,
                        <span className="block opacity-70">Shall we?</span>
                    </h2>
                </div>

                <p className='text-xl tracking-wide font-light leading-9'>
                    Hey! I'm Pranav Konjeti - a Rising Senior in Highschool based out of Richmond Virginia. When I was in my Sophomore 
                    year of Highschool, I picked up web-design and web-development and absolutely fell in love with it! That passion has 
                    led me to create my own web-design agency: <span className="font-bold">Thryve.</span>
                </p>

                <div className='flex flex-col gap-y-2'>
                    <h2 className="four-title font-medium mt-2 opacity-80">
                        Wait a Second. A highschooler? Do I even have enough experience?
                    </h2>
                    <p className='text-xl tracking-wide font-light leading-9'>
                        I get this question a lot whenever I reach out to clients/businesses - obviously one would have
                        concerns about paying a 16-year old for a website, no? I personally believe that my results speak 
                        for themselves:
                    </p>
                </div>
                
                <>
                    <dl class="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3 mt-2">
                        <div
                            class="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400" id="item-1">
                            Views Across my Websites
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold leading-none dark:text-indigo-100"
                            aria-describedby="item-1" id="starsCount">
                            2M+
                            </dd>
                        </div>
                        <div
                            class="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                            Lifetime Visitors across my websites
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold leading-none dark:text-indigo-100"
                            id="downloadsCount">
                            300k
                            </dd>
                        </div>
                        <div
                            class="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                            Websites Made for Clients
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold leading-none dark:text-indigo-100"
                            id="sponsorsCount">
                            20+
                            </dd>
                        </div>
                    </dl>
                    <p className='text-md tracking-wide font-light leading-9'>
                        **Take a look at my <a href="https://pranavkonjeti.com" className="underline">portfolio site</a> 
                        {' '}and resume if you're curious on what exactly I've built!
                    </p>
                </>




            </div>
        </div>
    </div>
  )
}

export default AboutPranav