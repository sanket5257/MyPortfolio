import React from 'react'

const Page4 = () => {
  return (
    <div className='h-dvh w-full  bg-white p-4 pt-10  '>
    <div className='relative h-full w-full  overflow-hidden bg-black rounded-3xl '>
      <video autoPlay muted loop playsInline className='pointer-events-none w-full object-cover h-full' src="./man.mp4"></video>
        <div className='absolute top-0 px-8 xl:px-16 text-[30vw] xl:text-[18vw] lg:text-[18vw] '>
         <h1 className="font-[anzo4] uppercase text-gray-400 ">WHAT</h1>

         <h1  className=" font-[anzo4] leading-8  uppercase   text-white">I DO</h1>


        </div>
      <div className=' bottom-4 xl:text-xl md:text-xl text-sm px-8  absolute    '>
        
            <h2 className='text-white   font-[anzo1]'>I DESIGN AND DEVELOP </h2>
            <h3 className='   font-[anzo2]  text-gray-400'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
            <h2 className='text-white uppercase font-[anzo1]'>websites that seamlessly bridge your goals with needs of your clients.</h2>

           
        

        
    </div>


    </div>

    </div>
  )
}

export default Page4