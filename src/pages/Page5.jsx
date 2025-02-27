import React from "react";
import Page6Bottom from "../components/Page6Bottom";

const Page5 = () => {
  return (
    <div className="h-[230vh] xl:h-[200vh] xl:w-full  lg:h-[240vh] md:h-[220vh] bg-white p-2 relative  z-40">
      <div className="h-[230vh]  lg:h-[240vh] xl:h-[200vh] md:h-[220vh] xl:w-full overflow-hidden bg-black rounded-[4.9vh]">
        <video
          playsInline
          autoPlay
          loop
          muted
          className="pointer-events-none h-full  w-full object-cover"
          src="./page5bg.mp4"
        ></video>
        <div className=" pl-5  top-10 xl:p-10 absolute xl:h-[30vw] xl:w-[98vw] xl:flex xl:justify-between ">
          <div className="  xl:w-[50vw]   xl:flex xl:flex-col xl:justify-center xl:items-start  ">
            <h1 className=" text-[25vw]  xl:text-[20vw]    font-[anzo4] uppercase  text-gray-400 ">
              HOW
            </h1>

            <h1 className=" text-[25vw] leading-5 xl:leading-10 xl:text-[20vw]  font-[anzo4] uppercase text-white">can</h1>
          </div>
          <div className="  xl:w-[50vw]   xl:flex xl:flex-col  xl:justify-center xl:items-end   ">
            <h1 className=" text-[25vw]  xl:text-[20vw]    font-[anzo4] uppercase  text-gray-400 ">
              i help
            </h1>

            <h1 className=" text-[25vw] leading-5 xl:leading-6 xl:text-[20vw]  font-[anzo4] uppercase text-white">you</h1>
          </div>
          

          </div>
        

       
      </div>


      <Page6Bottom/>


    </div>

     

  );
};

export default Page5;
