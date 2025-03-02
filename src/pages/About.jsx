import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full  bg-white p-4 mt-7  '>
    <div className='relative h-full w-full  overflow-hidden bg-black rounded-[4.9vh] '>
      <video autoPlay muted loop playsInline className='pointer-events-none w-full object-cover h-full' src="./about.mp4"></video>
        <div className='absolute top-0 flex justify-center items-center w-full h-full text-9xl md:text-[24rem] '>
         <h1 className="font-[anzo4] uppercase opacity-55 text-gray-400 ">ABOUT</h1>

         {/* <h1  className=" font-[anzo4] leading-8  uppercase   text-white">I DO</h1> */}



        </div>

        

      
           
        

        
  


    </div>

    </div>
  )
}

export default About