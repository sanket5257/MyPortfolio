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
          className="pointer-events-none w-full object-cover h-full"
          src="./aboutme.mp4"
        ></video>
        <div className="absolute top-10 w-full h-full text-9xl md:text-[24rem] px-16  ">
          <h1 className="font-[anzo4] uppercase text-white ">[about]</h1>
          <p className="text-white text-[3.5vw] md:text-[1.5vw] font-bold">
          Hello! I'm Sanket, a final-year B.Tech student specializing in Computer Science and Engineering. I am passionate about technology, and I focus on creating modern, visually appealing, and user-friendly web designs.

As a frontend web developer, I have a deep interest in crafting clean, responsive, and interactive web applications. I bring designs to life by using the latest web technologies such as HTML, CSS, JavaScript, and frameworks like React. My work reflects a blend of functionality and creativity, with a particular emphasis on animations and smooth user experiences.

I am always eager to learn new tools and techniques to stay on top of the ever-evolving field of web development. In addition to my academic background, I love experimenting with creative design ideas and incorporating them into my projects.

Feel free to explore my portfolio and connect with me!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
