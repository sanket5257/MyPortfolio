import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen bg-white p-10 relative '>
    <div className='h-full w-full overflow-hidden bg-black rounded-[4.9vh]'>
      <video autoPlay muted loop className='object-cover h-[100vh]' src="/src/assets/page4bg.mp4"></video>
      <h1 className="absolute px-16 top-[1vh] font-[anzo4] uppercase lg:text-[20vw] text-[30vw] text-gray-400">WHAT</h1>

      <h1  className="absolute px-16 lg:top-[29vh] top-[17vh] md:top-[27vh] sm:top-[25vh] font-[anzo4] uppercase text-[30vw] lg:text-[20vw] text-white">I DO</h1>


      <div className='absolute bottom-10 p-10 flex items-end justify-between left-0 w-full '>
        <div className='ml-12'>
            <h2 className='text-white lg:text-2xl text-sm font-[anzo1]'>I DESIGN AND DEVELOP </h2>
            <h3 className=' lg:text-2xl font-[anzo2] text-sm text-gray-400'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
            <h2 className='text-white lg:text-2xl text-sm font-[anzo1]'>websites that seamlessly bridge your goals with needs of your clients.</h2>

           
        </div>

        
    </div>


    </div>

    </div>
  )
}

export default Page4