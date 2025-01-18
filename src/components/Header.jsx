import React from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all'; // Import ScrollToPlugin

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

  return (
    <div className="fixed w-full z-50 p-16 sm:p-12 md:p-16 lg:p-20 flex items-center justify-end">
  <button 
    onClick={handleScrollToHireMe} 
    className="bg-black border-4 text-cyan-50 px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-gray-500 transition-all duration-200">
    Hire me
  </button>
  

</div>

  );
};

export default Header;
