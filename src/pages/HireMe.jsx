import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import _ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

const HireMe = () => {
  useGSAP(function () {
    gsap.to("#rotateImage", {
      rotation: 360, // Rotate the image 360 degrees
      repeat: -1, // Make it repeat infinitely
      duration: 5, // Time it takes for one full rotation (in seconds)
      ease: "none", // No easing, smooth constant speed
      transformOrigin: "center center", // Rotate around the center of the image
    });

      gsap.registerPlugin(ScrollTrigger);

      // gsap.from("#swipein",{
      //   opacity:0,
        
      //   duration:1,
      //   delay:3,
      //   stagger:1,
      //   ease:"power4.out",
      //   scrollTrigger:{
      //     trigger:"#HireMe",
      //     scrub:5,
      //     markers:true,
          
      //   }

      // })

      

      
    
  });

  return (
    <div id="HireMe" className=" h-screen xl:top-10 relative bg-white p-2 ">
      <div
        id="page1-in"
        className=" shadow-xl relative  p-2 shadow-gray-700 h-full xl:w-full w-[95vw] bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1854,h_1005,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Background%20Anzo_Studio.jpg)] rounded-[50px]"
      >
        <div className="GotanIdea h-[40vh] ">
          <h1 className=" font-[anzo4] uppercase text-[25vw] xl:text-[18vw]  text-gray-400">
            GOT AN
          </h1>

          <h1 className=" text-[25vw] leading-7 xl:text-[18vw]    font-[anzo4] uppercase  text-white">
            IDEA
          </h1>
        </div>

        <div className="mid-content flex sm:justify-between sm:items-center">
          <img
            id="rotateImage"
            className="h-[18vw] sm:h-[10vh] md:h-[15vh] md:ml-[32vw]   lg:ml-[40vw] xl:h-[10vw] xl:ml-[45vw] lg:h-[12vw] sm:ml-[25vw] ml-[15vw]"
            src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_128,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/World%20Contact.png"
            alt=""
          />
          <div  className="contactinfo    "></div>
          <div className="text-white text-center text-[3vw] sm:text-[2.8vw] md:text-[2vw] xl:text-[1.5vw] sm:mr-8 md:text-2xl ml-5">
            <h1 id="swipein"  className="text-gray-400">GET IN TOUCH</h1>
            <h1 id="swipein">
              EMAIL:
              <span className="text-white font-[anzo1]">
                chougulesanket30@gmail.com
              </span>
            </h1>
            <h1 id="swipein" className="text-gray-400">+91-123456789</h1>
          </div>
        </div>


        {/* <div className="footer text-white ">
          <h1>IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h1>
          <h1>
            BUT
            <span className="text-white font-[anzo1]">
              OFFERING THE TRANSFORMATION!
            </span>
          </h1>
          <h1 className="">
            @2025ft.leostudio
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default HireMe;
