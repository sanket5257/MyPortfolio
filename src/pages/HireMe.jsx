import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import React from 'react'

const HireMe = () => {

  useGSAP(function(){

    gsap.to("#rotateImage", {
      rotation: 360,          // Rotate the image 360 degrees
      repeat: -1,             // Make it repeat infinitely
      duration: 5,            // Time it takes for one full rotation (in seconds)
      ease: "none",           // No easing, smooth constant speed
      transformOrigin: "center center"  // Rotate around the center of the image
  });
  })
  

  return (
    <div id='HireMe' className='lg:top-[40vh] h-screen relative bg-white p-4 '>
        <div id='page1-in'  className=' shadow-xl relative  p-2 shadow-gray-700 h-full w-full bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1854,h_1005,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] rounded-[50px]'>
        <h1 className="absolute px-4 xl:text-[13vw] lg:px-20 top-0 font-[anzo4] uppercase text-[22vw]  text-gray-400">GOT AN</h1>

<h1   className="absolute px-4   xl:text-[13vw] xl:top-44 lg:px-20 top-[12vh] sm:top-[17vh] md:top-[20vh] lg:top-[35vh] font-[anzo4] uppercase text-[20vw] text-white">IDEA</h1>


      
      </div>
      <div id='contact' className='absolute flex justify-between items-center h-screen w-[90vw] lg:w-[30vw] top-0 left-14 md:left-[24vw] sm:left-[20vw] lg:left-[45vw]'>
        <img  id='rotateImage' className='h-20 lg:h-32' src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png" alt="" />
        <div  className="text-gray-400 absolute ml-[24vw] lg:ml-[14vw] text-[3vw] lg:text-xl ">
        <div> 
        <h1>GET IN TOUCH</h1>
        <h1>EMAIL: <span className="text-white font-[anzo1]">chougulesanket30@gmail.com</span>  </h1>
        </div>
       
        <div id='footer'>
          <h1>+91-123456789</h1>
        </div>
        </div>

      </div>
      <div  className="text-gray-400 absolute bottom-20 lg:bottom-10 m-6 text-sm lg:text-xl flex items-center justify-col w-[90vw] lg:justify-between ">
        <div className='lg:ml-20'> 
        <h1>IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h1>
        <h1>BUT <span className="text-white font-[anzo1]">OFFERING THE TRANSFORMATION!</span>  </h1>
        </div>
       
        
         
        
        </div>
        <h1 className='top-[90vh] text-gray-400 text-sm lg:text-xl lg:right-10  ml-28  absolute'>@2025ft.leostudio</h1>
    </div>
  )
}

export default HireMe