import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import _gsap from 'gsap/gsap-core'
import React from 'react'

const Page7 = () => {




  return (
    
    <div  className='lg:top-[5vh] h-screen relative bg-white p-4 '>
    <div id='page1-in'  className=' overflow-hidden shadow-xl relative  p-2  h-full w-full bg-cover bg-black rounded-[50px]'>
    
    <video autoPlay loop playsInline muted className='object-cover h-[80vh] w-full xl:h-[80vh]' src="./man.mp4"></video>
     
    
    </div>
</div>
  )
}

export default Page7