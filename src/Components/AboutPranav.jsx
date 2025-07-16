import React from 'react'

const AboutPranav = () => {
  return (
    <div className='font-outfit py-10 flex justify-center bg-[#faf7ee] px-4 lg:px-0'>
        <div className="py-4 flex lg:flex-row flex-col gap-8 max-w-7xl w-full">

            <div className="lg:w-4/12 flex flex-col gap-y-2 items-center justify-center ">
                <img 
                    src="https://www.pranavkonjeti.com/assets/pranavprofile-2fa6d5ac.jpg" 
                    alt="A picture of me! (Pranav Konjeti)" 
                    className='rounded-md shadow-md w-full sm:w-1/2 lg:w-full'
                />
                <div className='flex sm:flex-row flex-col gap-2 items-center'>
                    <a href='https://me.pranavkonjeti.com' target='_blank' class="w-max flex items-center text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 transition300scale focus:outline-none">
                        View my Portfolio
                    </a>
                    {/* <a href='https://drive.google.com/file/d/1CPUSBaFwPdwwFsnrXYgNnju5K6q5da7e/view?usp=sharing' target='_blank' class="w-max flex items-center text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 transition300scale focus:outline-none">
                        Download my Resume
                    </a> */}
                </div>
            </div>

            <div className="lg:w-8/12 flex flex-col justify-center gap-y-2 text-[#1D4B40]">

                <div>
                    {/* <p className="paragraph-responsive tracking-wide font-light">
                        A bit about the Founder
                    </p> */}
                    <h2 className="six-title font-medium">
                        Hey, I'm
                        <span className=" opacity-70">{' '}Pranav</span>
                    </h2>
                </div>

                <p className='text-xl tracking-wide font-light leading-8'>

                    I’m an incoming freshman studying <b>Computer Science @ UIUC</b> from Richmond, Virginia. I started building websites in my sophomore year 
                    of high school and quickly fell in love with the process. For me, web development is a mix between logic and creativity. Over the past year, 
                    I’ve had the opportunity to work with over 30+ different businesses and help improve their online presence!
                </p>

                <div className='flex flex-col gap-y-2'>
                    <h2 className="four-title font-medium mt-2 opacity-80">
                        My Past Experience:
                    </h2>
                    <p className='text-xl tracking-wide font-light leading-8'>
                        My first website, <a href="https://talem.org" target='_blank' className='underline'>talem.org</a>, 
                        which connects students with academic opportunities, garnered over 1M page visits, 200k lifetime users, and raised $3000. 
                        After that, I launched a <a href="https://learntheweb.org" target='_blank' className='underline'>computer science learning platform</a> {' '}
                        and a site for <a href="https://desource.app" target='_blank' className='underline'>web developers to find design resources.</a> {' '}
                        Today, I’m focusing on building my <a href="https://www.youtube.com/watch?v=yoCWJ0LHDfU&t=32s" target='_blank' className='underline'>edtech startup</a> {' '}
                        while also freelancing for organizations around the world.
                    </p>
                </div>
                
                <>
                    <dl class="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3 mt-2">
                        <div
                            class="flex flex-col items-center justify-center p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400" id="item-1">
                            Views Across my Websites
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold leading-none dark:text-indigo-100"
                            aria-describedby="item-1" id="starsCount">
                            2M+
                            </dd>
                        </div>
                        <div
                            class="flex flex-col items-center justify-center p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                            Lifetime Visitors across my websites
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold leading-none dark:text-indigo-100"
                            id="downloadsCount">
                            300k
                            </dd>
                        </div>
                        <div
                            class="flex flex-col items-center justify-center p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                            <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                            Websites Developed for Clients
                            </dt>
                            <dd class="order-1 text-5xl font-extrabold leading-none dark:text-indigo-100"
                            id="sponsorsCount">
                            25+
                            </dd>
                        </div>
                    </dl>
                    <p className='text-md tracking-wide font-light leading-9 italic'>
                        *Take a look at my <a href="https://me.pranavkonjeti.com" className="underline">portfolio site</a> 
                        {' '}and resume if you're curious on what exactly I've built!
                    </p>
                </>




            </div>
        </div>
    </div>
  )
}

export default AboutPranav