import React from "react";

const Aboutme = () => {
  return (
    <div className="h-screen w-full  bg-white p-4 mt-7 ">
      <div className="relative h-full w-full  overflow-hidden bg-black rounded-[4.9vh]  ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none w-full opacity-60 object-cover h-full"
          src="./aboutme.mp4"
        ></video>
        <div className="absolute top-10 md:w-[30vw] h-full text-9xl md:text-[24rem] md:px-16 px-4 ">
          <h1 className="font-[anzo4] uppercase text-white ">[about]</h1>
          <p className="text-white text-[3.5vw] md:text-[1.5vw] leading-7 font-bold">
           Hi, I’m Sanket—a frontend developer with a passion for clean, responsive web apps using HTML, CSS, JavaScript, React, and Next.js. I love crafting smooth, modern user experiences. Let’s connect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
