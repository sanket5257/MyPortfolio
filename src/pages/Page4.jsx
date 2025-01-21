import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen w-full  bg-white p-4 relative '>
    <div className='h-full w-full  overflow-hidden bg-black rounded-[4.9vh] '>
      <video autoPlay muted loop playsInline className='pointer-events-none w-full object-cover h-[100vh]' src="./robo.mp4"></video>
        <div className='absolute xl:h-[60vh] xl:pl-10 pl-5 xl:w-[30vw] xl:top-0 top-10'>
         <h1 className="font-[anzo4] uppercase text-gray-400 xl:text-[18vw] text-[25vw]">WHAT</h1>

         <h1  className=" font-[anzo4] xl:leading-6 leading-6 uppercase  xl:text-[18vw] text-[25vw] text-white">I DO</h1>


        </div>
      <div className=' xl:text-[1.5vw] lg:text-[1.5vw] md:text-[2vw]  p-4 text-[3vw] absolute xl:w-[97vw] w-[90vw]   xl:bottom-12 bottom-10 xl:flex xl:justify-center flex flex-col flex-wrap justify-center items-center xl:items-center '>
        
            <h2 className='text-white   font-[anzo1]'>I DESIGN AND DEVELOP </h2>
            <h3 className='   font-[anzo2]  text-gray-400'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
            <h2 className='text-white uppercase font-[anzo1]'>websites that seamlessly bridge your goals with needs of your clients.</h2>

           
        

        
    </div>


    </div>

    </div>
  )
}

export default Page4