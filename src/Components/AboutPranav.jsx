import React from 'react'
import headshot from '../assets/headshot.png'
import { IoChatboxEllipses } from 'react-icons/io5'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FaMailBulk } from 'react-icons/fa'
import { MdOutlineBusinessCenter } from 'react-icons/md'

const AboutPranav = () => {
  return (
    <div className='font-outfit py-20 flex justify-center bg-[#e6e3d9] px-4 md:px-0'>
        <div className="py-4 flex md:flex-row flex-col gap-8 max-w-5xl w-full items-center px-8">

            <div className="md:w-[35%] flex flex-col gap-y-2 items-center justify-center ">
                <img 
                    src={headshot}
                    alt="A picture of me! (Pranav Konjeti)" 
                    className='rounded-md shadow-md w-full md:w-full'
                />
                <div className='flex sm:flex-row flex-col gap-2 items-center w-full '>
                    <a href='https://me.pranavkonjeti.com' target='_blank' className="w-full flex items-center justfiy-center text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 transition300scale focus:outline-none">
                        <p className='w-full text-center'>View my Portfolio</p>
                    </a>
                    {/* <a href='https://drive.google.com/file/d/1CPUSBaFwPdwwFsnrXYgNnju5K6q5da7e/view?usp=sharing' target='_blank' class="w-max flex items-center text-lg h-12 px-4 bg-[#387e62] border-2 border-[#387e62] rounded shadow-md text-blue-50 transition300scale focus:outline-none">
                        Download my Resume
                    </a> */}
                </div>
            </div>

            <div className="md:w-[65%] flex flex-col justify-center gap-y-2 text-[#1D4B40]">

                    {/* <p className="paragraph-responsive tracking-wide font-light">
                        A bit about the Founder
                    </p> */}
                    <h2 className="six-title font-semibold">
                        Hey, I'm
                        <span className=" opacity-70">{' '}Pranav!</span>
                    </h2>

                <p className='text-xl tracking-wide leading-8'>
                    I'm a current freshman studying Computer Science @ UIUC. I've always found web design and development to come naturally to me 
                    and enjoyed the artistic/creative aspects of it. To date, I've had the amazing opportunity to run Thryve and work with over 25+ 
                    different organizations ranging from nonprofits to startups to local businesses. I look forward to working with you/your company!
                </p>

                <div className="flex space-x-4 items-center  gap-x-2">
                    <a
                      href="https://www.linkedin.com/in/pranav-konjeti/"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaLinkedin className="text-2xl" />
                    </a>
                    <a
                      href="mailto:pranavkonjeti@gmail.com"
                      className="contact-buttons-about"
                    >
                      <FaMailBulk className="text-2xl" />
                    </a>
                    <a
                      href="https://github.com/PkTheCoda"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                    <a
                      href="https://thryvedesign.com"
                      target="_blank"
                      className="contact-buttons-about"
                    >
                      <MdOutlineBusinessCenter className="text-2xl" />
                    </a>
                </div>

                {/* <div className='flex flex-col gap-y-2'>
                    <h2 className="four-title font-medium mt-2 opacity-80">
                        My Past Experience:
                    </h2>
                    <p className='text-xl tracking-wide font-light leading-8'>
                        My first website, <a href="https://talem.org" target='_blank' className='underline'>talem.org</a>, 
                        which connects students with academic opportunities, garnered over 1M page visits, 200k lifetime users, and raised $3000. 
                        After that, I launched a <a href="https://learntheweb.org" target='_blank' className='underline'>computer science learning platform</a> {' '}
                        and a site for <a href="https://desource.app" target='_blank' className='underline'>web developers to find design resources.</a> {' '}
                        Today, I’m focusing on building my <a href="https://www.youtube.com/watch?v=yoCWJ0LHDfU&t=32s" target='_blank' className='underline'>edtech startup</a> {' '}
                        while also freelancing for companies & businesses around the world.
                    </p>
                </div> */}
                
                <>
                    {/* <dl class="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3 mt-2">
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
                            30+
                            </dd>
                        </div>
                    </dl> */}
                </>




            </div>
        </div>
    </div>
  )
}

export default AboutPranav