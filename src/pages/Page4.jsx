import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen  bg-white p-10 relative '>
    <div className='h-full w-full  overflow-hidden bg-black rounded-[4.9vh] xl:h-[90vh]'>
      <video autoPlay muted loop playsInline className='pointer-events-none w-full object-cover h-[100vh]' src="https://video.wixstatic.com/video/11062b_47e99a65fe474b159516ea5aea634f53/480p/mp4/file.mp4"></video>
      <h1 className="absolute px-10 md:-top-[0vh] top-[3vh] font-[anzo4] uppercase lg:text-[17vw] text-[30vw] md:text-[24vw] text-gray-400 xl:text-[14vw]">WHAT</h1>

      <h1  className="absolute px-10 lg:top-[31vh] top-[19vh] md:top-[30vh] sm:top-[25vh] font-[anzo4] uppercase text-[27vw] lg:text-[17vw]  md:text-[24vw] xl:text-[14vw] xl:top-48  text-white">I DO</h1>


      <div className='absolute bottom-10 xl:bottom-5 p-10 flex items-end justify-between left-0 w-full '>
        <div className='ml-12'>
            <h2 className='text-white  xl:text-xl lg:text-lg text-sm font-[anzo1]'>I DESIGN AND DEVELOP </h2>
            <h3 className=' lg:text-lg  xl:text-xl  font-[anzo2] text-sm text-gray-400'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
            <h2 className='text-white  xl:text-xl  lg:text-lg uppercase text-sm font-[anzo1]'>websites that seamlessly bridge your goals with needs of your clients.</h2>

           
        </div>

        
    </div>


    </div>

    </div>
  )
}

export default Page4