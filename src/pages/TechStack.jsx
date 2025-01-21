import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function TechStack() {
  // Tech Stack images stored in the public folder
  const techStackImages = [
    'Bootstrap.png',
    'C.png',
    'Cpp.png',
    'MySQL.png',
    'Java.png',
    'Mongo.png',
    'Node.png',
  ];

  
   
    
    

  return (
    <div
      id="TechStack"
      className=" w-full text-black bg-white p-8 lg:p-20 flex flex-col items-center justify-center"
    >
      {/* <h1 className="relative text-[18vw] xl:text-[10vw] font-semibold mb-12 leading-normal uppercase bg-white text-transparent font-[anzo]">
        Tech Stack
      </h1> */}
       {/* <video className='absolute' src="https://video.wixstatic.com/video/11062b_47e99a65fe474b159516ea5aea634f53/480p/mp4/file.mp4"></video> */}

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {techStackImages.map((image, index) => (
          <div
            key={index}
            className="flex items-center bg-cover justify-center bg-[url(https://wallpaperaccess.com/full/2124358.jpg)]  p-6 rounded-xl border-3 border-black shadow-lg transform transition-all  tech-image"
          >
            <img
              className="h-24 md:h-28 lg:h-36"
              src={`/images/${image}`} // Images are placed in the public folder under 'images' folder
              alt={`Tech ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
