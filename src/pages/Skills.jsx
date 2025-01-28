import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";

const Skills = () => {
  //

  
  

  return (
    <div className="   h-dvh w-full bg-white p-4 ">
        
      <div className=  " relative text-white bg-black h-screen w-full rounded-3xl overflow-hidden">
      <video autoPlay loop playsInline muted className="pointer-events-none absolute w-full h-full  object-cover" src="./robo.mp4"></video>
        <h1 className="absolute  p-4 text-[18vw] font-[anzo4] uppercase">Skills</h1>
        <div id="skill-section" className="absolute top-[28vw] md:top-36 xl:top-40  flex flex-col justify-center items-center w-full">
          <div id="1st section" className="font-[anzo2] ">
            <div id="title" className="bg-white h-10 w-full">
              <h1  className="text-black text-center pt-2 cursor-pointer">
                Languages
              </h1>
            </div>
            <div id="languages" className="flex justify-center items-center">
              <div id="html" className="p-5">
                <i className="ri-html5-line text-3xl"></i>
                <h3 className="text-sm text-center">HTML5</h3>
              </div>

              <div id="css" className="p-5">
                <i className="ri-css3-fill text-3xl"></i>
                <h3 className="text-sm text-center">CSS</h3>
              </div>

              <div id="javascript" className="p-5">
                <i className="ri-javascript-line text-3xl"></i>
                <h3 className="text-sm text-center">JS</h3>
              </div>

              <div id="java" className="p-5">
                <i className="ri-java-line text-3xl"></i>
                <h3 className="text-sm text-center">JAVA</h3>
              </div>
            </div>
          </div>
          <div className="font-[anzo2] ">
            <div id="title" className="bg-white h-10 w-full">
              <h1  className="text-black text-center pt-2 cursor-pointer">
                Languages
              </h1>
            </div>
            <div id="languages" className="flex justify-center items-center">
              <div id="html" className="p-5">
                <i className="ri-html5-line text-3xl"></i>
                <h3 className="text-sm text-center">HTML5</h3>
              </div>

              <div id="css" className="p-5">
                <i className="ri-css3-fill text-3xl"></i>
                <h3 className="text-sm text-center">CSS</h3>
              </div>

              <div id="javascript" className="p-5">
                <i className="ri-javascript-line text-3xl"></i>
                <h3 className="text-sm text-center">JS</h3>
              </div>

              <div id="java" className="p-5">
                <i className="ri-java-line text-3xl"></i>
                <h3 className="text-sm text-center">JAVA</h3>
              </div>
            </div>
          </div>
          <div className="font-[anzo2] ">
            <div id="title" className="bg-white h-10 w-full">
              <h1  className="text-black text-center pt-2 cursor-pointer">
                Languages
              </h1>
            </div>
            <div id="languages" className="flex justify-center items-center">
              <div id="html" className="p-5">
                <i className="ri-html5-line text-3xl"></i>
                <h3 className="text-sm text-center">HTML5</h3>
              </div>

              <div id="css" className="p-5">
                <i className="ri-css3-fill text-3xl"></i>
                <h3 className="text-sm text-center">CSS</h3>
              </div>

              <div id="javascript" className="p-5">
                <i className="ri-javascript-line text-3xl"></i>
                <h3 className="text-sm text-center">JS</h3>
              </div>

              <div id="java" className="p-5">
                <i className="ri-java-line text-3xl"></i>
                <h3 className="text-sm text-center">JAVA</h3>
              </div>
            </div>
          </div>
          <div className="font-[anzo2] ">
            <div id="title" className="bg-white h-10 w-full">
              <h1  className="text-black text-center pt-2 cursor-pointer">
                Languages
              </h1>
            </div>
            <div id="languages" className="flex justify-center items-center">
              <div id="html" className="p-5">
                <i className="ri-html5-line text-3xl"></i>
                <h3 className="text-sm text-center">HTML5</h3>
              </div>

              <div id="css" className="p-5">
                <i className="ri-css3-fill text-3xl"></i>
                <h3 className="text-sm text-center">CSS</h3>
              </div>

              <div id="javascript" className="p-5">
                <i className="ri-javascript-line text-3xl"></i>
                <h3 className="text-sm text-center">JS</h3>
              </div>

              <div id="java" className="p-5">
                <i className="ri-java-line text-3xl"></i>
                <h3 className="text-sm text-center">JAVA</h3>
              </div>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default Skills;
