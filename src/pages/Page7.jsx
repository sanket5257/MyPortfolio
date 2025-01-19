import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import _gsap from 'gsap/gsap-core'
import React from 'react'

const Page7 = () => {

gsap.registerPlugin(ScrollTrigger)

useGSAP(function () {
  if(window.innerWidth>900){
    gsap.to(".upward",{
      y: () => window.innerHeight * 0.5, // Move the image up by 50% of the viewport height
      ease: "none",
      scrollTrigger: {
        // markers:true,
        trigger: ".upward",
        start: "top bottom", // Start the animation when the top of the container hits the bottom of the viewport
        end: "bottom top",   // End the animation when the bottom of the container hits the top of the viewport
        scrub: true,         // Makes the animation smooth and scrubbed to the scroll position
            
         
      
      
      
          }
    })}
    else{ 
     
    }
})


  return (
    
    <div className='w-[100vw] sm:h-[95vw] h-[100vh] lg:h-[70vh] p-4 pt-12 '>
      <div className='lg:h-screen sm:h-[90vw]   flex items-center justify-center   lg:w-[98vw] bg-black rounded-[7vh] overflow-hidden'> 
        <video autoPlay loop muted playsInline className='pointer-events-none h-[90vh] lg:h-[150vh] object-cover' src="./man.mp4"></video>
        </div>
    </div>
  )
}

export default Page7