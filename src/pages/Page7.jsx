import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import _gsap from 'gsap/gsap-core'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Page7 = () => {

gsap.registerPlugin(ScrollTrigger);
useGSAP(function(){

  gsap.from("#reachme h1", {
    color:"white",
    y:100 ,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger:1,
    ease: "linear",
    scrollTrigger: {
        trigger: "#reachme h1",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "bottom 90%",
        scrub:1
    }
});



})


  return (
    
    <div id='reachme'   className='lg:top-[5vh] xl:h-sc  h-screen relative bg-white p-4 '>
    <div   className=' overflow-hidden shadow-xl relative  p-2  h-full w-full bg-cover bg-black rounded-[50px]'>
    
    <video autoPlay loop playsInline muted className='pointer-events-none object-cover h-[80vh] w-full xl:h-[80vh]' src="./man.mp4"></video>
      
      <h1  className=' absolute bg-gradient-to-r from-gray-400 to-black bg-clip-text text-transparent text-[20vw] font-[anzo4] text-center w-[94vw] bottom-8'>REACH ME <i class="ri-phone-fill"></i></h1>
    
    </div>
</div>
  )
}

export default Page7