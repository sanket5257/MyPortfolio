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
          <p className="text-white text-xl md:text-3xl font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            maxime temporibus sunt maiores quae cupiditate repellendus, non
            asperiores repellat nihil nesciunt illum, quam in aliquam. Itaque
            non ab consequuntur vero?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
