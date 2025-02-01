import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const HireMe = () => {
  return (
    <div className='h-dvh  bg-black w-full' >
      <div className='flex bg-black  w-full items-center flex-col md:flex-row'>
        
          <div id='left ' className='w-full font-[anzo2]'>
                  <div id='main-contaniner' className=' w-full h-screen grid grid-cols-2 grid-rows-3'>
                    <div id='top-part' className='  col-span-1 row-span-1'>
                     <div><div id='upperpart' className=' md:text-lg  text-sm flex-col flex justify-center items-center h-[40vh]'>
                         <h3 className='text-red-500 font-[anzo6]'>Drop me &nbsp; &nbsp;&nbsp; a line:</h3>
                             <div className='mr-20 flex gap-2 '>
                             <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                               <h3 className='text-white'>Telegram</h3>
                               
                             </div>
                             <div className='ml-20 flex gap-2'>
                             <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                             <h3 className='text-white'>WhatsApp</h3>
                             </div>
                         </div></div>
                    </div>
                    <div id="mid-part" className=' col-span-2 row-span-1'>
                    <div><div id='upperpart' className='  md:text-lg text-sm flex-col flex justify-center items-center h-[40vh]'>
                        <h3 className='text-red-500 font-[anzo6]'>Social &nbsp; &nbsp;&nbsp; media:</h3>
                            <div className=' flex gap-2 '>
                            <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                              <h3 className='text-white'>Instagram</h3>
                              
                            </div>
                            <div className='ml-20 flex gap-2'>
                            <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                            <h3 className='text-white'>Linkedin</h3>
                            </div>
                            <div className=' flex gap-2'>
                            <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                            <h3 className='text-white'>Github</h3>
                            </div>
                        </div></div>
                    </div>

                    <div id="mid-part" className=' col-span-2  ml-10 row-span-1'>
                    <div><div id='upperpart' className=' md:text-lg  text-sm flex-col flex justify-center   h-[40vh]'>
                        <h3 className='text-red-500 font-[anzo6]'>Copy:</h3>
                            <div className='mr-20 flex gap-2 '>
                            <MdOutlineArrowOutward  className='text-red-500 text-lg'/>
                              <h3 className='text-white'>chougulesanket30@gmail.com</h3>
                              
                            </div>
                            
                        </div></div>
                    </div>
                    <div id="bottom-part" className=' col-span-2 row-span-1'>
                    <div className='font-[anzo6] text-[4rem] md:text-[6rem]  flex items-end justify-center'>
                            <MdOutlineArrowOutward  className='text-red-500 '/>
                            <h3 className='text-white'>Let's Talk</h3>
                            </div>
                    </div>

                  </div>

          </div>
                
          <div className='w-1/2'>
          <img className=' p-4 ' src="https://www.stabondar.com/_astro/contact.DGTOomyR.webp" alt="" />

          </div>
  
         
     
        </div>

      
    </div>
  )
}

export default HireMe