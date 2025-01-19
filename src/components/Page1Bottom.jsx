import { useGSAP } from '@gsap/react'
import gsap, { Linear } from 'gsap'
import React from 'react'

const Page1Bottom = () => {

useGSAP(function(){
  gsap.to('#banner img',{
    rotate:360,
    duration: 3,
    repeat:-1,
    ease:Linear
  })
})

  return (
    <div className='absolute bottom-0 p-10 flex items-end justify-between left-0 w-full '>
        <div className='ml-14'>
            <h2 className='texr-sm text-white lg:text-2xl font-[anzo1]'>DESIGNER | &#10092; CODER &#10093; </h2>
            <h3 className=' text-sm lg:text-2xl font-[anzo2] text-gray-400'>SANKET CHOUGULE</h3>
           
        </div>

        {/* <div id='banner'>
            <img className='mb-10'  src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png" alt="" />
            <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png" alt="" />
        
        </div> */}
    </div>
  )
}

export default Page1Bottom
