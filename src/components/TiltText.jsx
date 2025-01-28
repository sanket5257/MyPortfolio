import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MyComponent = (props) => {
  const tiltDivRef = useRef(null);

  // We preserve props.abc as the ref, assigning it directly to tiltDivRef
  useEffect(() => {
    // Update the tiltDivRef to match props.abc
    tiltDivRef.current = props.abc.current;
  }, [props.abc]);

  // Track screen width
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to handle screen resizing
  const handleResize = () => {
    const isCurrentlyMobile = window.innerWidth <= 768;
    setIsMobile(isCurrentlyMobile);

    // If switching to desktop, stop any GSAP animation
    if (!isCurrentlyMobile) {
      gsap.killTweensOf(tiltDivRef.current);
      gsap.killTweensOf('.animate-text');
    }
  };

  // Listen for resize events
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the resize event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Apply GSAP animation only for mobile screens
    if (isMobile) {
      gsap.fromTo(
        tiltDivRef.current, // Ensure this is the correct ref (from props.abc)
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0,delay:3,  duration: 1.5, ease: 'power3.out' }
      );

      // Animate the text elements with stagger effect
      gsap.fromTo(
        '.animate-text',
        { opacity: 0, y: 50 },
        {
          delay:3,
          opacity: 1,
          y: 0,
          duration: 2.5,
          ease: 'power3.out',
          stagger: 0.3, // Stagger the text animation for a better visual effect
        }
      );
    }
  }, [isMobile]); // Re-run animation logic when isMobile changes

  return (
    <div
      id="tiltDiv"
      ref={props.abc} // Preserve your original `ref` here
      className="text-white  xl:ml-6 ml-10 mt-[25vh] animate-text"
    >
      <h1 className="text-[6vw] lg:text-[4.2vw] leading-[4vw] lg:leading-[4vw] font-[anzo]">
        HI, I'M <span className=" text-white">CREATIVE </span>
      </h1>
      <h1 className="font-[anzo] lg:text-[8vw] leading-[11vw] lg:leading-[7vw] text-[10vw] animate-text">
        DEVELOPER
      </h1>
      <h1 className="text-[6vw] lg:text-[4.2vw] leading-[4vw] lg:leading-[4vw] font-[anzo] animate-text">
        TO HIRE
      </h1>
    </div>
  );
};

export default MyComponent;
