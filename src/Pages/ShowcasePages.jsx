import React from "react";
import { useParams } from "react-router-dom";

import easyap_fullpage from "../fullpages/easyap_fullpage.png";
import cleangreen_fullpage from '../fullpages/cleangreen_fullpage.png'
import score1600_fullpage from '../fullpages/score1600_fullpage.png'
import ecoeats_fullpage from '../fullpages/ecoeats_fullpage.png'
import greenleaf_fullpage from '../fullpages/greenleaf_fullpage.png'

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
    cleangreen: {
        link: "https://cleanthegreen.org",
        fullpage: cleangreen_fullpage,
        paragraph:
        "EasyAP is a tech startup focusing on making AP Exam prep easier. The website has a massive database of 500+ MCQ and FRQ questions in more than 10+ AP subjects that users can answer. The website also uses a custom-trained AI model to provide feedback, hints, guidance, and more.",
        title: "CleanGreen",
        subtitle: "Lawn Mowing Company"
    },
    score1600: {
        link: "https://score1600.com",
        fullpage: score1600_fullpage,
        paragraph:
        "EasyAP is a tech startup focusing on making AP Exam prep easier. The website has a massive database of 500+ MCQ and FRQ questions in more than 10+ AP subjects that users can answer. The website also uses a custom-trained AI model to provide feedback, hints, guidance, and more.",
        title: "Score1600",
        subtitle: "SAT Startup"
    },
    greenleaf: {
        link: "https://glmow.netlify.app",
        fullpage: greenleaf_fullpage,
        paragraph:
        "EasyAP is a tech startup focusing on making AP Exam prep easier. The website has a massive database of 500+ MCQ and FRQ questions in more than 10+ AP subjects that users can answer. The website also uses a custom-trained AI model to provide feedback, hints, guidance, and more.",
        title: "GreenLeaf Mowing",
        subtitle: "Lawn Mowing Company"
    },
    ecoeats: {
        link: "https://ecoeats.us",
        fullpage: ecoeats_fullpage,
        paragraph:
        "EasyAP is a tech startup focusing on making AP Exam prep easier. The website has a massive database of 500+ MCQ and FRQ questions in more than 10+ AP subjects that users can answer. The website also uses a custom-trained AI model to provide feedback, hints, guidance, and more.",
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
