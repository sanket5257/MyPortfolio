import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const HireMe = () => {

// useGSAP(function(){
//   gsap.to("#upperpart",{
//   x:500,
//   duration:4,
//   repeat:-1,
//   ease:"power1.inOut",
//   yoyo:true
//  })
//  gsap.to("#midpart",{
//   x:-500,
//   duration:4,
//   repeat:-1,
//   ease:"power1.inOut",
//   yoyo:true
//  })
//  gsap.to("#mid2part",{
//   x:1000,
//   duration:4,
//   repeat:-1,
//   ease:"power1.inOut",
//   yoyo:true
//  })
// })

  return (
    <div className='h-dvh  bg-black w-full overflow-x-hidden ' >
      
     
          <div className='textanimation'>
          <video autoPlay muted loop playsInline className='pointer-events-none absolute h-full w-full object-cover' src="/hireMebg.mp4"></video>

                    <div className=' px-16 h-full w-full '>

                      <div>
                      <div id='upperpart' className=' absolute  md:text-xl  text-sm flex-col flex justify-center items-center h-[40vh]'>
                            <h3 className='text-red-500 font-[anzo6]'>Drop me &nbsp; &nbsp;&nbsp; a line:</h3>
                          <div className='mr-20 flex gap-2 '>
                          <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                            <h3 className='text-white'>Telegram</h3>
                            
                          </div>
                          <div className='ml-20 flex gap-2'>
                          <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                          <h3 className='text-white'>WhatsApp</h3>
                          </div>
                          </div>
                          </div>
                          <div>
                      <div id='midpart' className=' absolute top-32 right-10 md:text-xl  text-sm flex-col flex justify-center items-center h-[40vh]'>
                            <h3 className='text-red-500 font-[anzo6]'>Social &nbsp; &nbsp;&nbsp; media:</h3>
                          <div className='mr-20 flex gap-2 '>
                          <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                            <h3 className='text-white'>Instagram</h3>
                            
                          </div>
                          <div className='ml-20 flex gap-2'>
                          <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                          <h3 className='text-white'>Linkedin</h3>
                          </div>
                          </div>
                          </div>
                          <div>
                      <div id='mid2part' className=' absolute top-64  md:text-xl  text-sm flex-col flex justify-center items-center h-[40vh]'>
                            <h3 className='text-red-500 mr-36 font-[anzo6]'>Copy:</h3>
                          <div className=' flex gap-2 '>
                          <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                            <h3 className='text-white'>chougulesanket30@gmail.com</h3>
                            
                          </div>
                          
                          </div>
                          <div className='bottom flex gap-2 bottom-0 '>
                          <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                            <h3 className='text-white'>chougulesanket30@gmail.com</h3>
                            
                          </div>
                            </div>
                          
                          

                        </div>




          </div>

          <div className=' absolute flex gap-2 justify-center w-full items-end bottom-0 '>
                          <MdOutlineArrowOutward  className='text-red-500 text-[4rem] md:text-[6rem]'/>
                            <h3 className='text-white text-[4rem] md:text-[8rem] font-[anzo]'>Let's talk</h3>
                            
                          </div>
  
         
     
        </div>

      
    
  )
}

export default HireMe