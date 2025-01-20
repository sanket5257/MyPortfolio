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
    'Node.png'
  ];

  useGSAP(function(){
     // GSAP ScrollTrigger animation for images
    const images = document.querySelectorAll('.tech-image');

    images.forEach((image) => {
      gsap.from(image, {
        opacity: 0,
        y: -100, // Start from 100px above
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        duration: 1, // Duration of the animation
        ease: 'expo.out', // Smooth easing effect
        scrollTrigger: {
          trigger: image, // Trigger the animation when the image enters the viewport
          start: 'top 70%', // Start the animation when the top of the image is at 80% from the top of the viewport
          end: 'bottom 50%', // End when the bottom of the image is at 20% from the bottom of the viewport
          toggleActions: 'play none none none', // Play the animation only once
          scrub: true, // Optional: makes the animation smooth while scrolling
        },
      });
    });
  })
    
  

  return (
    <div
      id="TechStack"
      className="bg-white text-black dark:bg-slate-900 dark:text-white p-8 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl lg:text-5xl font-semibold mb-12 leading-normal uppercase text-gray-500 font-[anzo4]">
        Tech Stack
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {techStackImages.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-300 dark:bg-fuchsia-800 p-6 rounded-xl border-2 border-black shadow-lg transform transition-all hover:scale-105 tech-image"
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
