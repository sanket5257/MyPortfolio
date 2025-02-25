import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React from 'react'
import { Link } from 'react-router-dom';

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
    <div className='bg-black text-white w-full pt-20'>
                    <div id="buttons" className="pt-14 md:pt-0  h-[50vh] md:gap-36 gap-6 w-full flex justify-center items-center md:items-center md:justify-center flex-col md:flex-row">
                    <img
            id="rotateImage"
            className=""
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
            alt=""
          />
          
          
          <div id="ReachMe" className="text-center flex-col flex justify-center items-center">
          <Link to="/" className="font-[anzo2] text-xl pb-4  hover:text-orange-500 text-gray-500  ">HOME</Link>
          <Link to="/Work" className="font-[anzo2] text-xl pb-4 hover:text-orange-500 leading-3 text-gray-500 ">WORK</Link>
          <Link to="/HireMe" className="font-[anzo2] text-xl pb-4 hover:text-orange-500 text-gray-500">CONTACT</Link>


          </div>
          <div id="social" className=" text-center flex flex-col justify-center items-center">
          <a  className="font-[anzo2] text-xl pb-4  ">SOCIAL</a>
          <a href='' className="font-[anzo2] text-xl pb-4 hover:text-orange-500 leading-3 text-gray-500 ">Instagram</a>
          <a href='https://github.com/sanket5257' className="font-[anzo2] text-xl pb-4 hover:text-orange-500 text-gray-500">Git-hub</a>


          </div>
          

        </div>

        
    </div>
  )
}

export default Footer