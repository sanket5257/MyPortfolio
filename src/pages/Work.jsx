import gsap from "gsap/all";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GiThornedArrow } from "react-icons/gi";
import { useGSAP } from "@gsap/react";

const Work = () => {
    const handle = (dets) => {
        console.log(dets);
        gsap.to("#dot", {
          x: `${dets.clientX-200}`,
          y: `${dets.clientY}`,
        });
      };

      useGSAP(function(){
     gsap.to(".marque",{
        transform:`translateX(-200%)`,
        duration:6,
        repeat:-1,
        ease:"none"
     }

     )
      })
    
  return (

    
    <div  onMouseMove={handle} 
      className="overflow-x-hidden  p-4 md:pl-[25vh] md:pr-[25vh] text-white relative bg-black h-dvh
     w-full"


    >
        <div
        id="dot"
        className="z-20 absolute hidden md:block  bg-white size-4 rounded-full"
      ></div>

        
      <div id="heading" className=" text-white w-full pt-10">
        <div className="">
          <h1 className="font-[anzo] uppercase text-5xl ">projects</h1>
          <h1 className="font-[anzo2] uppercase text-5xl ">Section</h1>
        </div>

        <div className="pt-10 font-[anzo2 ] text-2xl text-gray-400 hover:text-orange-600">
          <p>
            Over the last decade, my expertise has centered around JavaScript,
            encompassing code writing, refactoring, and seamless integration of
            RESTful APIs with frameworks like Angular, React, and Vue.js. My
            experience extends beyond, having worked with diverse tech stacks. I
            stand ready to provide invaluable assistance and guidance to your
            developers, ensuring they adhere to best practices. Explore my
            projects below to witness firsthand the impact of my skills.
          </p>
        </div>

        <h1 className="text-5xl flex items-center h-44 gap-5">PROJECTS <GiThornedArrow /></h1>
      </div>
      <div id="projects" className=" w-[50%]  text-white font-[anzo3] text-4xl md:text-6xl ">
        <div  id="card" className=" text-gray-400 hover:text-orange-600">
            <a href="https://zentry-clone-indol.vercel.app/" className="flex items-center"> Zentry-Clone <MdArrowOutward /></a>
        </div>

        <div id="card" className="pt-10 text-gray-400 hover:text-orange-600">
            <a href="https://zentry-clone-indol.vercel.app/" className="flex items-center"> Zentry-Clone <MdArrowOutward /></a>
        </div>

     
      </div>

      <div id="move" className=" font-[anzo3] mt-10 bg-[#D8FF04] w-full h-[20vh] flex  text-black items-center text-9xl  gap-48 justify-center "  >
      <div className="marque  translate-x-[58%] text-center ">
      <h1>
            INTRESTED!!
            </h1>
        </div>
        <div className="marque  translate-x-[58%] text-center ">
      <h1>
            INTRESTED!!
            </h1>
        </div>
        <div className="marque translate-x-[58%] text-center ">
      <h1>
            INTRESTED!!
            </h1>
        </div>
        <div className="marque  translate-x-[58%] text-center">
      <h1>
            INTRESTED!!
            </h1>
        </div>
        
      </div>
     
      
    </div>
  );
};

export default Work;
