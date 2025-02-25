import gsap from "gsap/all";
import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowDown } from "react-icons/go";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Work = () => {
  const handle = (dets) => {
    console.log(dets);
    gsap.to("#dot", {
      x: `${dets.clientX - 200}`,
      y: `${dets.clientY}`,
    });
  };

  useGSAP(function () {
    gsap.to(".marque", {
      transform: `translateX(-200%)`,
      duration: 6,
      repeat: -1,
      ease: "none",
    });
  });

  return (
    <div
      onMouseMove={handle}
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
            Over the last two years, my expertise has centered around JavaScript,
            encompassing code writing, refactoring, and seamless integration of
            RESTful APIs with framework like React. Explore my
            projects below to witness firsthand the impact of my skills.
          </p>
        </div>

        <h1 className="text-5xl flex font-[anzo1] items-center h-44 gap-5">
          PROJECTS <GoArrowDown />
        </h1>
      </div>
      <div
        id="projects"
        className=" w-fit  text-white font-[anzo3] text-4xl md:text-6xl "
      >
        <div id="card" className=" text-gray-400 hover:text-orange-600">
          <a
            href="https://zentry-clone-indol.vercel.app/"
            className="flex items-center"
          >
            {" "}
            Zentry-Clone <MdArrowOutward />
          </a>
        </div>

        <div id="card" className="pt-10 text-gray-400 hover:text-orange-600">
          <a
            href="https://portfolioleo-o.vercel.app/"
            className="flex items-center"
          >
            {" "}
            Portfolio <MdArrowOutward />
          </a>
        </div>
      </div>

      <div
        id="move"
        className=" font-[anzo3] mt-10  w-full h-[20vh] flex  text-white items-center text-9xl  gap-48 justify-center "
      >
        <div className="marque  translate-x-[58%] text-center ">
          <h1>INTRESTED!!</h1>
        </div>
        <div className="marque  translate-x-[58%] text-center ">
          <h1>INTRESTED!!</h1>
        </div>
        <div className="marque translate-x-[58%] text-center ">
          <h1>INTRESTED!!</h1>
        </div>
        <div className="marque  translate-x-[58%] text-center">
          <h1>INTRESTED!!</h1>
        </div>
        <div className="marque  translate-x-[58%] text-center">
          <h1>INTRESTED!!</h1>
        </div>
        <div className="marque  translate-x-[58%] text-center">
          <h1>INTRESTED!!</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-20  items-center justify-center gap-10 ">
        <div className="w-full">
          <p className="pt-10 font-[anzo2 ] text-2xl text-gray-400 hover:text-orange-600">
          As a student passionate about coding, I am eager to collaborate with you and elevate your projects to new heights. I offer a fresh perspective and the enthusiasm to help optimize and refine your code. Let’s work together to maximize your project’s potential and achieve outstanding results. Don’t miss out on this opportunity to partner with me!
          </p>
        </div>
        <Link to="/HireMe" className="w-full text-center   ">
          <h1 className="border-2 rounded-full py-4 text-xl">lets talk</h1>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Work;
