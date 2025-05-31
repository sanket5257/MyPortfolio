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
        <div className="absolute top-10 w-full h-full text-9xl md:text-[24rem] px-16  ">
          <h1 className="font-[anzo4] uppercase text-white ">[about]</h1>
          <p className="text-white text-[3.5vw] md:text-[1.5vw] leading-7 font-bold">
          Sure! Here's a shorter and updated version of your bio:

---

Hi, I’m Sanket—a Computer Science graduate and frontend web developer passionate about building clean, modern, and interactive web applications. I specialize in HTML, CSS, JavaScript, React, and Next.js, with a strong focus on responsive design, smooth animations, and great user experiences. Always curious and creative, I love experimenting with new tools and design ideas.

Feel free to check out my portfolio and connect with me!

          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
