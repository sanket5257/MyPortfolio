import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all"; // Import ScrollToPlugin
import 'remixicon/fonts/remixicon.css'
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef(null);

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
    <div className=" fixed w-full z-50 p-16 bottom-[15%] sm:p-12 md:p-16 lg:p-20 flex items-center justify-end">
      
      
      
      <Link to='/HireMe' className=" bg-black border-4 text-cyan-50 px-6 py-2 sm:px-6 sm:py-2 rounded-full hover:bg-gray-500 transition-all duration-200">
        Say Hello
      </Link>
    
      <button
        onClick={toggleAudioIndicator}
        className="ml-5 bg-white px-2 py-2  rounded-3xl flex items-center space-x-0.5"
      >
        <audio
          ref={audioElementRef}
          className="hidden"
          src="./bgaudio.mp3"
          loop
          autoPlay
        />

        <i class="ri-music-fill"></i>
      </button>
    </div>
  );
};

export default Header;
