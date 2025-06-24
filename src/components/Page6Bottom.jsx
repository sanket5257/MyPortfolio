import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";
import { Link } from "react-router-dom";

const Page6Bottom = () => {

      useGSAP(function(){

gsap.to("#sun",{
    rotation:360,
    duration: 4,
    repeat: -1,
    ease:"none"



})

gsap.to("#circle",{
      rotateY:360,
      duration: 4,
      repeat: -1,
      ease:"none"



})

gsap.from("#rocket",{
      y:20,
      duration:1,
      repeat: -1,
      ease:"power0.out",
      yoyo:true
      


})
  gsap.registerPlugin(ScrollTrigger);
 var tl=gsap.timeline();

  tl.from("#page6 h3",{
      color:"gray",
      opacity:0,
      duration:3,
      delay:1,
      ease:"power0.out",
      stagger:3,
      

      scrollTrigger:{
        trigger:"#first",
        start:"top 150%",
        end:"top 110%",
        
        markers:true,
          // yoyo:true,
        scrub:5
      }
      

  })



      })





  return (
    <div id="page6">
      <div id="first" className="absolute top-[65vh]  flex flex-col xl:flex xl:flex-row xl:items-center xl:w-[98vw] xl:h-[80vh] xl:top-[60vh] sm:top-[85vh] md:top-[110vh] lg:top-[140vh]  ">
        <div
          id="description"
          className="xl:w-[40vw] flex h-[40vh] sm:h-[25vh] md:h-[25vh]  justify-center text-white p-16 font-[anzo3] text-sm xl:text-2xl "
        >
          <div>
            <h3 >
              I am a self-taught web and brand designer with a passion for
              creating unique and timeless masterpieces for ambitious
              professionals, entrepreneurs, artists, and boutique businesses. ​
            </h3>
            <div className="flex items-center justify-between  pt-8  ">
              <img id="sun"
                className="h-[10vh] ml-4"
                src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_85,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png"
                alt=""
              />

              <h1 className="font-[anzo4] text-[8vw] text-white xl:text-[5vw]">
                DESIGN <span className="font-[anzo3] text-white text-[4vw] xl:text-[2vw] ">01</span>
              </h1>
            </div>
          </div>
        </div>
        <div
          id="description"
          className=" xl:w-[40vw] flex h-[40vh] sm:h-[25vh] md:h-[25vh]  justify-center text-white p-16 font-[anzo3] text-sm xl:text-2xl"
        >
          <div>
            <h3>
              With a background in strategic marketing and acknowledged
              expertise in web development, I aim to minimize my client's
              resources spent on macro and micro-management, marketing research.
            </h3>
            <div className="flex items-center justify-between  pt-8 ">
              <img id="circle"
                className="h-[10vh] ml-4"
                src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png"
                alt=""
              />

              <h1 className="font-[anzo4] text-white text-[8vw] xl:text-[4vw]">
                DEVELOPMENT <span className="font-[anzo3] text-[4vw] xl:text-[2vw] ">02</span>
              </h1>
            </div>
          </div>
        </div>
        <div
          id="description"
          className=" xl:w-[40vw] flex h-[40vh] sm:h-[25vh] md:h-[25vh]  justify-center text-white p-16 font-[anzo3] text-sm xl:text-2xl "
        >
          <div>
            <h3>
              My mission is to drive growth for my clients by
              increasing their brand appearance, defining their identity, and
              engaging customers through modern, luxurious, and minimalistic
              touch.
            </h3>
            <div className="flex items-center justify-between  pt-8 ">
              <img id="rocket"
                className="h-[10vh] ml-4"
                src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png"
                alt=""
              />

              <h1 className="font-[anzo4] text-white text-[8vw] xl:text-[4vw]">
                BRANDING <span className="font-[anzo3] text-[4vw] xl:text-[2vw]">03</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-400 xl:text-[1.5vw] absolute  bottom-0 p-10 xl:p-10">
        <h1>GOT A PROJECT?</h1>
        <h1>
          THEN PLEASE{" "}
          <Link to="/HireMe" className="text-white font-[anzo1]">CONTACT ME</Link>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Page6Bottom;
