import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all'; // Import ScrollToPlugin
import { useSearchParams } from 'react-router-dom';
// import clsx from "clsx";
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  
  // Handle the scroll to "Hire Me" section when the button is clicked
  const handleScrollToHireMe = () => {
    // Delay the scroll to ensure that the page is fully rendered
    setTimeout(() => {
      gsap.to(window, {
        scrollTo: "#HireMe",  // Scroll to the element with ID "HireMe"
        duration: 1,           // Duration of the scroll animation
        ease: "power2.out"     // Easing for smooth scroll
      });
    }, 100); // Adding a small delay (100ms) to ensure the target is available
  };

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef(null)

// Toggle audio and visual indicator
const toggleAudioIndicator = () => {
  setIsAudioPlaying((prev) => !prev);
  setIsIndicatorActive((prev) => !prev);
};


 
useEffect(() => {
  if (isAudioPlaying) {
    audioElementRef.current.play();
  } else {
    audioElementRef.current.pause();
  }
}, [isAudioPlaying]);

  

  return (
    <div className="fixed w-full z-50 p-16 bottom-0 sm:p-12 md:p-16 lg:p-20 flex items-center justify-end">
  <button 
    onClick={handleScrollToHireMe} 
    className="bg-black border-4 text-cyan-50 px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-gray-500 transition-all duration-200">
    Hire me
  </button>
  

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 bg-white px-2 py-2  rounded-3xl flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="./bgaudio.mp3"
                loop autoPlay
              />
                
                <i class="ri-music-fill"></i>
                
            </button>
        
      
    
  

</div>

  );
};

export default Header;
