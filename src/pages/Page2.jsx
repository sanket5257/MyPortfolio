import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    if (window.innerWidth > 1000) {
      gsap.from('.rotateText', {
        transform: 'rotateX(-80deg)',
        opacity: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: '.rotateText',
          start: 'top 60%',
          end: 'top -270%',
          scrub: 2,
        },
      });
    }

    else{
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".rotateText",{
            y:80,
            opacity:0,
            duration:2,
            stagger:5,
            ease:"power1.in",
            scrollTrigger:{
              trigger:".rotateText",
              scrub:5,
              
            }


      })



    }
  });

  return (
    <div  className="bg-white text-center top-10 xl:p-20 text-black">
      <h3 className="text-gray-500 text-xl font-[anzo2]">
        © ft.leo.studio 2025 | designed and developed
      </h3>

      <div id="section2" className="rotateText mt-16">
        <h1 className="lg:text-[40vw] text-[40vw] text-black font-[anzo4] leading-[20vw] lg:leading-[35vw]">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="lg:text-[40vw] text-[40vw] text-black font-[anzo4] leading-[40vw] lg:leading-[35vw]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="lg:text-[40vw] text-[40vw] text-black font-[anzo4] leading-[22vw] lg:leading-[35vw]">
          IS THE
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="lg:text-[40vw] text-[40vw] text-black font-[anzo4] leading-[40vw] lg:leading-[35vw]">
          DESIGN
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="lg:text-[40vw] text-[40vw] text-black font-[anzo4] leading-[22vw] lg:leading-[35vw]">
          THAT
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="lg:text-[40vw] text-[40vw] text-black font-[anzo4] leading-[38vw] lg:leading-[35vw]">
          WORKS!
        </h1>
      </div>

      {/* <div className="h-1 w-1/3 relative left-1/2 -translate-x-1/2 mt-20 bg-black"></div> */}
    </div>
  );
};

export default Page2;
