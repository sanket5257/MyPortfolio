import React from "react";
import Page6Bottom from "../components/Page6Bottom";

const Page6 = () => {
  return (
    <div className="h-[260vh] lg:h-[140vh] md:h-[180vh] bg-white p-2 relative  z-40">
      <div className="h-[260vh] lg:h-[140vh] md:h-[180vh] w-full overflow-hidden bg-black rounded-[4.9vh]">
        <video
          autoPlay
          loop
          muted
          className="h-[50vh] lg:h-[100vh] w-full object-cover"
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"
        ></video>
        <div className="flex lg:justify-between flex-col h-[60vh] -top-5 lg:w-[100vw] w-[50vw] absolute left-7 lg:left-20 ">
          <div className=" w-full h-[50vh] lg:h-[60vh] lg:w-full" >
            <h1 className="absolute   font-[anzo4] uppercase text-[40vw] lg:text-[20vw] text-gray-400">
              HOW
            </h1>

            <h1 className="absolute lg:top-[30vh]  top-[19vh] sm:top-[25vh] md:top-[38vh] font-[anzo4] uppercase text-[40vw] lg:text-[20vw] text-white">
              CAN
            </h1>
          </div>

          <div className="w-full h-[50vh] lg:w-[50%]  lg:*:right-44">
            <h1 className="absolute  lg:top-[1vh] top-[38vh] sm:top-[50vh] md:top-[77vh] font-[anzo4] uppercase text-[40vw] lg:text-[20vw] text-white">
              I HELP
            </h1>

            <h1 className="absolute  lg:top-[30vh] top-[57vh]  sm:top-[75vh] md:top-[115vh] font-[anzo4] uppercase text-[40vw] lg:text-[20vw] text-white">
              YOU
            </h1>
          </div>
        </div>

        <Page6Bottom/>
      </div>
    </div>
  );
};

export default Page6;
