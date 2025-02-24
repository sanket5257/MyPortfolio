import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React from 'react'

const Footer = () => {
    useGSAP(function () {
        gsap.to("#rotateImage", {
          rotation: 360, // Rotate the image 360 degrees
          repeat: -1, // Make it repeat infinitely
          duration: 5, // Time it takes for one full rotation (in seconds)
          ease: "none", // No easing, smooth constant speed
          transformOrigin: "center center", // Rotate around the center of the image
        });
    
          
    
          
    
          
        
      });
  return (
    <div className='bg-black text-white w-full'>
                    <div id="buttons" className="pt-14  h-[50vh] md:gap-36 w-full flex justify-center items-start md:items-center flex-col md:flex-row">
                    <img
            id="rotateImage"
            className=""
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
            alt=""
          />
          
          
          <div id="ReachMe" className="">
          <h1 className="font-[anzo2] text-xl pb-4  ">HOME</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 leading-3 text-gray-500 ">WORK</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 text-gray-500">ABOUT</h1>


          </div>
          <div id="social" className="">
          <h1 className="font-[anzo2] text-xl pb-4  ">SOCIAL</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 leading-3 text-gray-500 ">Instagram</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 text-gray-500">Git-hub</h1>


          </div>
          

        </div>

        
    </div>
  )
}

export default Footer