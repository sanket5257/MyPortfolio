import React from 'react'

const Page3 = () => {
  return (
    <div className='bg-white relative flex items-center justify-center h-screen'>
        <img className='absolute z-20 lg:h-[55vh] lg:w-[65vw] h-[35vh] w-[100vw] sm:w-[80vw] md:w-[50vw] md:h-[50vh] xl:w-[60vw] xl:h-[35vw] ' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1248,h_717,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />

        <video autoPlay loop muted playsInline className=' pointer-events-none relative  z-10 lg:h-[55vh] md:w-[40vw] lg:w-[47vw] h-[30.3vh] w-[75vw]  sm:w-[45vw] xl:h-[60vh]  object-cover' src="./intro.mp4"></video>

            {/* <div className='z-0 absolute bg-black h-0.5 w-3/5 top-[45%] '></div> */}
            {/* <div className='z-0 absolute  bg-black h-0.5 w-4/5 top-[60%] '></div> */}
            {/* <div className='z-0 absolute bg-black h-0.5 lg:w-full w-[45%] top-[75%] '></div> */}
    </div>
  )
}

export default Page3