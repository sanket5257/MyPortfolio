import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

const ContactCard = () => {
  return (
    <div><div id='upperpart' className='  text-xl flex-col flex justify-center items-center h-[40vh]'>
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
  )
}

export default ContactCard