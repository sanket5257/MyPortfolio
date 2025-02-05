import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
const HireMe = () => {
  return (
    <div className="h-dvh w-full">
      <div className="h-full w-full p-4 ">
        <div className="h-full w-full overflow-hidden rounded-3xl">
          <div id="desktop-view" className="h-full w-full hidden md:block">
            <img
              className=" object-cover h-full w-full "
              src="/Hiremebg.avif"
              alt=""
            />
          </div>
          <div id="mobile-view" className="h-full w-full  md:invisible">
            {/* <img className='h-full w-full' src="/whitemask.avif" alt="" /> */}
            <div
              id="background"
              className="h-full w-full overflow-hidden relative"
            >
              <img
                src="https://static.wixstatic.com/media/f1c650_e2b405cf03e845ac9e79ab98decea582~mv2.jpg/v1/fill/w_441,h_541,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/me%201.jpg"
                alt=""
              />
              <div id="content" className="text-black min-h-dvh w-full absolute top-0">
                <img
                  className="relative"
                  src="https://static.wixstatic.com/media/f1c650_95d5864be0b84ba48d6a9a26a8e954be~mv2.png/v1/crop/x_129,y_0,w_1665,h_3640/fill/w_441,h_964,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mask%20group%20(6).png"
                  alt=""
                />

                <div id="text" className="text-[5rem] absolute top-[60vh] pl-4">
                  <div id="name">
                  
                    <h1 className="font-[anzo4] uppercase">sanket</h1>
                  </div>
                  <div id="number" className="text-[0.8rem] flex gap-4 font-[anzo3]">
                    <h1 className="text-gray-400">#</h1>
                    <h1>+91 12345678</h1>
                  </div>
                  <div id="email" className="text-[0.8rem] flex gap-4 font-[anzo3]">
                    <h1 className="text-gray-400">@</h1>
                    <h1>chougulesanket30@gmail.com</h1>
                    
                  </div>
                </div>
              </div>
                  <div id="bottom-icons" className="text-white absolute top-0 right-0 left-0 bottom-0">
                  <img
                className=" relative h-full w-full"
                src="/blackmask.avif"
                alt=""
              />
                                  <FaWhatsapp className=" absolute bottom-4 right-24 text-xl" />
                                  <GrLinkedinOption  className=" absolute bottom-4 right-14 text-xl"/>

                  </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
