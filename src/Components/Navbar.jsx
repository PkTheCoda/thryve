import { Dialog } from '@headlessui/react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineXMark } from "react-icons/hi2";
import { useState } from 'react';

import thryvelogo from '../assets/thryvelogo1.png'

const navigation = [
  // { name: 'Home', href: '/' },
  // { name: 'About', href: '/about' },
  // { name: 'Portfolio', href: '/portfolio' },

]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="px-10 w-full bg-[#faf7ee] flex justify-center items-center">

        <header className="w-full z-50">
          <nav className="flex rounded-2xl items-center justify-between py-6" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                    className="h-8 w-auto"
                    src={thryvelogo}
                    alt="An image of the Thryve logo"
                    width="300"
                    height="100"
                  />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className=" inline-flex items-center justify-center rounded-md p-2.5 hover:bg-[#a37f2e] hover:text-white transition transform duration-300"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-lg leading-6 font-outfit"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
              <a 
                href="/contact" 
                target='_blank'
                className="text-lg font-normal text-main py-1 px-4 font-outfit transition300scale"
              >
                Our Work
              </a>
              <a 
                href="/contact" 
                target='_blank'
                className="text-lg font-normal transition300scale text-white bg-[#387e62] py-1 px-4 rounded-sm shadow-md font-outfit"
              >
                Book a Call
              </a>
            </div>
          </nav>

          <Dialog as="div" className="lg:hidden font-outfit" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src={thryvelogo}
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-gray-900 hover:bg-gray-50 transition transform duration-300"
                        onClick={(event) => handleNavigationClick(event, item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/contact"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base text-black leading-7 hover:bg-slate-50 transition transform duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

        </header>
      </div>
    </>
  )
}