import React from "react";
import { useParams } from "react-router-dom";

import easyap_fullpage from "../fullpages/easyap_fullpage.png";
import cleangreen_fullpage from '../fullpages/cleangreen_fullpage.png'
import score1600_fullpage from '../fullpages/score1600_fullpage.png'
import ecoeats_fullpage from '../fullpages/ecoeats_fullpage.png'
import greenleaf_fullpage from '../fullpages/greenleaf_fullpage.png'
import pawsandrelax_fullpage from '../fullpages/pawsandrelax_fullpage.png'
import ultra_fullpage from '../fullpages/ultra_fullpage.png'
import crackd_fullpage from '../fullpages/crackd_fullpage.png'

const ShowcasePages = () => {
  const { showcaselink } = useParams();

  const showcaseSites = {
    easyap: {
        link: "https://easyap.vercel.app",
        fullpage: easyap_fullpage,
        paragraph:
        "EasyAP is a tech startup focusing on making AP Exam prep easier. The website has a massive database of 500+ MCQ and FRQ questions in more than 10+ AP subjects that users can answer. The website also uses a custom-trained AI model to provide feedback, hints, guidance, and more.",
        title: "EasyAP",
        subtitle: "AP-Exam Prep Startup"
    },
    ultra: {
        link: "https://useultra.ai",
        fullpage: ultra_fullpage,
        paragraph:
        "Ultra is a Y-Combinator backed EdTech startup that provides a suite of tools making it easier for ambitious students to chase their dreams -- from college evaluations to exclusive opportunities to detailed roadmaps. ",
        title: "Ultra",
        subtitle: "EdTech Startup"
    },
    crackd: {
        link: "https://thryvedesign.com",
        fullpage: crackd_fullpage,
        paragraph:
        "Crackd is an online SAT & ACT prep platform with over 100,000 users to date. It serves as the ultimate test prep platform with personalized study plans, expert tutors, and engaging practice materials.",
        title: "Crackd",
        subtitle: "EdTech Startup"
    },
    cleangreen: {
        link: "https://cleanthegreen.org",
        fullpage: cleangreen_fullpage,
        paragraph:
        "CleanGreen is a lawn mowing company based out of Richmond, Virginia that focuses on keeping your lawn clean and beautiful alongside professional landscaping as well! The website uses a clean white-green color scheme.",
        title: "CleanGreen",
        subtitle: "Lawn Mowing Company"
    },
    pawsandrelax: {
        link: "https://pawsandrelax.netlify.app",
        fullpage: pawsandrelax_fullpage,
        paragraph:
        "Paws and Relax is a local dog grooming company based out of Richmond, Virginia that offers Professional grooming to keep your furry friend happy, healthy, and looking their absolute best every day.",
        title: "Paws and Relax",
        subtitle: "Dog Grooming Company"
    },
    score1600: {
        link: "https://score1600.com",
        fullpage: score1600_fullpage,
        paragraph:
        "Score1600 is an SAT tutoring startup started by Pranav and his friends in order to bring cheap, effective, local SAT tutoring to the greater Richmond Area. The website utilizes a green-yellow color scheme.",
        title: "Score1600",
        subtitle: "SAT Startup"
    },
    greenleaf: {
        link: "https://glmow.netlify.app",
        fullpage: greenleaf_fullpage,
        paragraph:
        "GreenLeaf Mowing is a lawn mowing company based out of Richmond, Virginia that focuses on professional mowing and landscaping along with yardwork, trimming, and much more. The website utilizes a green-brown color scheme.",
        title: "GreenLeaf Mowing",
        subtitle: "Lawn Mowing Company"
    },
    ecoeats: {
        link: "https://ecoeats.us",
        fullpage: ecoeats_fullpage,
        paragraph:
        "EcoEats is a nonprofit aimed at connecting restaurants with surplus food with homeless shelters and food banks. The website utilizes a strong white-green color scheme and many Figma-designed assets to build out its beautiful pages!",
        title: "EcoEats",
        subtitle: "Nonprofit Organization"
    },
  };

  return (
    <div className="py-20 font-outfit bg-secondary">
        {
            Object.hasOwn(showcaseSites, showcaselink) ?
            <div className="max-w-[95rem] mx-auto flex flex-col gap-y-20 relative">
                <div className="flex flex-col gap-y-4 items-center text-secondary sticky text-center">
                    <div className="">
                        <h4 className="two-title tracking-widest uppercase">
                            {showcaseSites[showcaselink].subtitle}
                        </h4>
                        <h1 className="eight-title font-medium tracking-tight">
                            {showcaseSites[showcaselink].title}
                        </h1>
                    </div>
                    <p className="one-title max-w-3xl">
                        {showcaseSites[showcaselink].paragraph}
                    </p>
                    <a href={showcaseSites[showcaselink].link} target="_blank" class="w-max flex items-center text-lg h-10 px-4 bg-main rounded-md shadow-md text-main transition300scale focus:outline-none">
                        Visit Site
                    </a>
                </div> 
                <div className="">
                        <img 
                            src={showcaseSites[showcaselink].fullpage} 
                            alt={`A picture of one our custom build websites: ${showcaseSites[showcaselink].title}`} 
                            className="shadow-md rounded-md"
                        />
                </div> 
            </div> :
            <div className="h-screen flex flex-col items-center justify-center px-4 text-secondary gap-y-4">
                    <p className="mt-4 tracking-widest uppercase">page not found</p>
                    <h1 className="text-9xl font-black">404</h1>
                
                    <p className="one-title max-w-lg text-center">
                        Uh-oh! We couldn't find that page - take a look at our showcase page instead!
                    </p>
            
                
                    <a href="/showcase" class="w-max flex items-center text-lg h-10 px-4 bg-main rounded-md shadow-md text-main transition300scale focus:outline-none">
                        Showcase Page
                    </a>
            </div>
        }
    </div>
  );
};

export default ShowcasePages;
