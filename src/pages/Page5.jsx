import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import _gsap from 'gsap/gsap-core'
import React from 'react'

const Page5 = () => {
gsap.registerPlugin(ScrollTrigger)


useGSAP(function(){
  if(window.innerWidth>1000){
    gsap.from(".rotateText2",{
      transform:'rotateX(-80deg)',
      opacity:0,
      duration: 1,
      stagger:1,
      scrollTrigger:{
        trigger:'.rotateText2',
        // markers:true,
        start:'top 60%',
        end:'top -270%',
        scrub:2
  
  
  
      }
    })
  }else{}
})


  return (
    <div id='section2' className='bg-white text-center p-10 text-black'>
      {/* <h3 className='text-gray-500 text-xl font-[anzo2]'>©  ft.leo.studio 2024 | designed and developed</h3> */}
    
    <div id='' className='rotateText2 mt-16 '>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>HELPING</h1>
    </div>
    <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>MY</h1>
    </div>
    <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>CLIENTS</h1>
    </div>
    <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>TO ACHIEVE</h1>
    </div>
    <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>THEIR</h1>
    </div>
    <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[anzo4] leading-[35vw]'>DREAMS!</h1>
    </div>





    
    </div>
  )
}

export default Page5
