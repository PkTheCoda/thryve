import React from "react";
import { LuExternalLink } from "react-icons/lu";
import easyap_fullpage from "../fullpages/easyap_fullpage.png";
import websample1 from '../assets/websample1.png'
import websample2 from '../assets/websample2.png'
import websample3 from '../assets/websample3.png'
import websample4 from '../assets/websample4.png'
import websample5 from '../assets/websample5.png'
import websample6 from '../assets/websample6.png'
import websample7 from '../assets/websample7.png'
import websample8 from '../assets/websample8.png'
import websample9 from '../assets/websample9.png'
import websample10 from '../assets/websample10.png'
import websample11 from '../assets/pawsandrelaxhero.png'
import ultrapic from '../assets/ultra1.png'

export default function Showcase() {

    const websiteData = [
        {
            title: "EcoEats",
            subtitle: "Nonprofit Food-Waste Organization",
            image: websample2,
            link: "/showcase/ecoeats"
        },
        {
            title: "Ultra AI",
            subtitle: "EdTech Startup",
            image: ultrapic,
            link: "/showcase/ultra"
        },
        {
            title: "GreenLeaf Mowing",
            subtitle: "Local Lawn-Mowing Company",
            image: websample3,
            link: "/showcase/greenleaf"
        },
        {
            title: "Paws and Relax",
            subtitle: "Dog Grooming Company",
            image: websample11,
            link: "/showcase/pawsandrelax"
        },
        {
            title: "EasyAP",
            subtitle: "EdTech Startup",
            image: websample10,
            link: "/showcase/easyap"
        },
        {
            title: "Desource",
            subtitle: "Web-Development Resources Directory",
            image: websample4,
            link: "https://desource.app"
        },
        {
            title: "CleanGreen",
            subtitle: "Lawn Mowing Company",
            image: websample9,
            link: "/showcase/cleangreen"
        },
        {
            title: "Score1600",
            subtitle: "SAT Tutoring Company",
            image: websample8,
            link: "/showcase/score1600"
        },
        {
            title: "LearnTheWeb",
            subtitle: "Online Tutoring Platform",
            image: websample6,
            link: "https://learntheweb.org"
        },
        {
            title: "Vihaana",
            subtitle: "Music Nonprofit Organization",
            image: websample7,
            link: "https://vihaana.org"
        },
        
    ]


  return (
    <>
      <div className="pb-20 bg-[#faf7ee] font-outfit">
        <div className="max-w-[90rem] mx-auto py-20 flex flex-col items-center gap-20">

          <div className="space-y-4 text-center">
              <div className="space-y-2">
                  <h3 className="tracking-widest uppercase two-title">
                    Showcase
                  </h3>
                  <h1 className="seven-title text-center font-semibold tracking-tight text-[#1f483e]">
                    Take a look at our
                    <span className="opacity-70 block">Stunning Websites</span>
                  </h1>
              </div>
              <p className="one-title max-w-xl">
                Take a look at some of our client's websites ranging from large nonprofits to local 
                lawn-mowing businesses to tutoring websites.
              </p>

          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">

            {websiteData.map((website, index) => {
                return (
                    <div className="w-full p-4 flex flex-col gap-y-2">
                        <div className="flex justify-between items-start">
                            <div className="text-main">
                                <h2 className="six-title font-medium tracking-tight">
                                    {website.title}
                                </h2>
                                <h5>
                                    {website.subtitle}
                                </h5>
                            </div>
                            <a href={website.link} target="_blank" className="p-4 bg-secondary rounded-full shadow-md transition300scale">
                                <LuExternalLink className="h-4 w-4 text-white"/>
                            </a>
                        </div>
                        <img src={website.image} alt="" className="rounded-md shadow-md"/>
                    </div>
                )
            })}
            

          </div>

          <div className="w-full text-center two-title max-w-4xl leading-10 px-4">
            <p>
                Many websites are not listed here due to protecting the privacy of our clients! If you're interested in 
                seeing more examples of our work, please <a href="mailto:pranavkonjeti@gmail.com" className="text-blue-600 underline">reach out to us.</a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
