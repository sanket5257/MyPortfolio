import React from 'react'

const Page6 = () => {
  return (
    <div className='h-screen relative w-full overflow-x-hidden bg-white p-2 pt-4 '>
        <div className='bg-black w-full h-full rounded-[4.9vh] overflow-hidden '>
        <video autoPlay loop playsInline muted  src="./page6bg.mp4" className='pointer-events-none object-cover w-full h-full'></video>
            <div className='text-white absolute text-[15rem] flex justify-center flex-col    items-center h-full w-full bottom-0'> 
               <h1 className='font-[anzo4] uppercase opacity-55'>create</h1>
               <h1 className='font-[anzo4] uppercase opacity-55 leading-5'>your</h1>
               <h1 className='font-[anzo4] uppercase opacity-55'>legacy</h1>
            </div>
        </div>
    </div>
  )
}

export default Page6