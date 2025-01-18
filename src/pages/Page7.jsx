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
    
    <div className='relative flex items-center justify-center h-screen '>
        <img className='mobileview  relative top-[0] lg:top-32 lg:h-[150vh]  z-20 h-[60vh] md:h-[100vh] w-full  object-cover ' src="https://static.wixstatic.com/media/f1c650_360814da288f418991547fa9d5e08904~mv2.png/v1/fill/w_942,h_725,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract.png" alt="" />
            <img className='upward absolute h-[50vh] sm:h-[60vh] md:h-[95vh] lg:h-[150vh] ' src="https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_1206,h_974,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg" alt="" />
    </div>
  )
}

export default Page7