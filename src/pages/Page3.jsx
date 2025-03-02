import React from 'react'
import { Link } from "react-router-dom";

const Page3 = () => {
  return (
    <div className='h-screen w-full  bg-white p-4 pt-10  '>
    <div className='relative h-full w-full  overflow-hidden bg-black rounded-3xl '>
      <video autoPlay muted loop playsInline className='pointer-events-none w-full object-cover h-full' src="./page3bg.mp4"></video>
        <div className='absolute top-0 flex justify-center items-center w-full h-full text-9xl md:text-[24rem] '>
         <h1 className="font-[anzo4] uppercase opacity-55 text-gray-400 ">WORK</h1>

         {/* <h1  className=" font-[anzo4] leading-8  uppercase   text-white">I DO</h1> */}



        </div>

        {/* <Link to='/Work' className='font-[anzo] bg-white left-10 absolute top-10 px-12 py-2 rounded-full'>Work</Link> */}

      <div className=' bottom-4 xl:text-xl md:text-xl text-sm px-8  absolute    '>
        
            <h2 className='text-white   font-[anzo1]'>I DESIGN AND DEVELOP </h2>
            <h3 className='   font-[anzo2]  text-gray-400'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
            <h2 className='text-white uppercase font-[anzo1]'>websites that seamlessly bridge your goals with needs of your clients.</h2>

           
        

        
    </div>


    </div>

    </div>
  )
}

export default Page3