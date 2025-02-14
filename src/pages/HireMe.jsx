import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";

const HireMe = () => {
  const splittedText = () => {};

  const handle = (dets) => {
    console.log(dets);
    gsap.to("#dot", {
      x: `${dets.clientX -200}`,
      y: `${dets.clientY}`,
    });
  };

  

  return (
    <div onMouseMove={handle} className="overflow-x-hidden p-4 md:pl-[25vh] md:pr-[25vh] text-white relative bg-black h-dvh
     w-full">
      <div
        id="dot"
        className="z-20 absolute  bg-white size-4 rounded-full"
      ></div>
      <div id="main-content" className="h-screen w-full">
        <div id="getintouch" className="pt-16">
          <h1 className="font-[anzo2] text-xl pb-4">GET IN TOUCH</h1>
          <p className="font-[anzo4] text-7xl">
            I love to hear from you. Whether you have a question or just want to
            chat about design, tech & art — shoot me a message.
          </p>
        </div>
        <div id="buttons" className="pt-14  h-[50vh] md:gap-36 w-full flex justify-center items-start md:items-center flex-col md:flex-row">
          <div id="ReachMe" className="">
          <h1 className="font-[anzo2] text-xl pb-4  ">REACH ME AT</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 leading-3 text-gray-500 ">chougulesanket30@gmail.com</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 text-gray-500">123456789</h1>


          </div>
          <div id="social" className="">
          <h1 className="font-[anzo2] text-xl pb-4  ">SOCIAL</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 leading-3 text-gray-500 ">Instagram</h1>
          <h1 className="font-[anzo2] text-xl pb-4 hover:text-orange-500 text-gray-500">Git-hub</h1>


          </div>
          <div id="sayhello" className="">
          <button className="bg-[#2C2C2D] hover:text-orange-500 h-[9vh] md:w-[40vh] w-[90vw] uppercase text-orange-200 ">s a y &nbsp; h e l l o</button>


          </div>

        </div>
        <div id="footer" className="h-[20vh] w-full  flex justify-center items-center" >

        <h3 id="run" className="text-gray-500 text-xl font-[anzo2]">
        © ft.leo.studio 2025 | designed and developed
      </h3>

        </div>
      </div>
    </div>
  );
};

export default HireMe;
