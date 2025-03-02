
import React, { useState } from "react";


const Work = () => {
 


  return (
    <div className="overflow-x-hidden text-white relative bg-white h-screenw-full p-4">
      <div className="bg-black h-screen w-full pl-4 pr-4 md:pl-20 md:pr-20 pt-32 rounded-[4.9vh]">
          <div className="project">
              <div className="flex justify-between items-center">
                <h1 className="font-[anzo] text-4xl md:text-8xl">zentry.com</h1>
                <div className="logos flex gap-2">
                  <img className="size-5 md:size-16" src="./SUN.avif" alt="" />
                  <img className="size-5 md:size-16" src="./EARTH.png" alt="" />
                  <img className="size-5 md:size-16" src="./START UP.avif" alt="" />
                </div>
              </div>
              <div className="line h-[2px] mt-10 bg-gray-400 w-full"></div>
          </div>
          <div className="project">
              <div className="flex justify-between items-center">
                <h1 className="font-[anzo] text-4xl md:text-8xl">Portfolio</h1>
                <div className="logos flex gap-2">
                  <img className="size-5 md:size-16" src="./SUN.avif" alt="" />
                  <img className="size-5 md:size-16" src="./EARTH.png" alt="" />
                  <img className="size-5  md:size-16" src="./START UP.avif" alt="" />
                </div>
              </div>
              <div className="line h-[2px] mt-10 bg-gray-400 w-full"></div>
          </div>




      </div>
    </div>
  );
};

export default Work;
