import React, { useEffect, useRef, useState } from 'react'
// import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TiltText from '../components/TiltText'
import logo from '../assets/logo.png'


const Page1 = () => {

const tiltRef = useRef(null)
const [xVal, setXVal] = useState(0)
const [yVal, setYVal] = useState(0)

const mouseMoving=(e)=>{

// console.log(tiltRef.current.getBoundingClientRect())

setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/20)
setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20)
// setYVal(e.clientY/100)

// tiltRef.current.style.transform=`rotateX(${yVal}deg) rotateY(${xVal}deg)`

}

useGSAP(function(){
  gsap.to(tiltRef.current,{
    transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
    duration: 2,
    ease:'power4.out'
    
  })
},[xVal,yVal])









  return (
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-screen relative overflow-x-hidden bg-white p-4  '>
      <div id='video-frame'  className='shadow-xl relative overflow-hidden bg-black shadow-gray-700 h-full w-full  rounded-[5vh]'>

      <video autoPlay muted loop playsInline onLoadedData={tiltRef} className='absolute h-full w-full  pointer-events-none  object-cover' src="./page1bg.mp4"> </video>
      

      <img className='h-[14vh] absolute top-8 lg:top-4'  src={logo} alt="" />



      <TiltText abc={tiltRef}/>
        <Page1Bottom/>
      </div>

   
    </div>
  )
}

export default Page1
