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

setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/50)
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


const [currentIndex, setCurrentIndex] = useState(1);
const [hasClicked, setHasClicked] = useState(false);
const [loading, setLoding] = useState(true);
const [loadedVideos, setLoadedVideos] = useState(0);


const totalVideos=4;

const nextVideoRef = useRef(null);
const handleVideoLoad=()=>{
  setLoadedVideos((prevLoadedVideos)=>prevLoadedVideos+1);
}
const handleVidClick=()=>{
setHasClicked(true)
setCurrentIndex((prevIndex)=>prevIndex+1);
}




const getVideoSrc=(Index)=>`videos/hero-${Index}.mp4`;

  return (
    <div id='page1' onMouseMove={(e)=>{
      mouseMoving(e)
    }} className='h-dvh relative overflow-x-hidden bg-white p-4  '>
      <div id='video-frame'  className='shadow-xl relative overflow-hidden bg-black shadow-gray-700 h-full w-full  rounded-[5vh]'>

      <video autoPlay muted loop playsInline className='absolute h-full w-full  pointer-events-none  object-cover' src="./startrobo.mp4"> </video>
      

      <img className='h-[14vh] absolute top-8 lg:top-4'  src={logo} alt="" />

          <div className=' absolute size-64 cursor-pointer  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] '>
            <div onClick={handleVidClick} className=' scale-50 origin-center opacity-0 transition-all duration-500 ease-in hover:opacity-100  hover:scale-100 '>
              <video loop autoPlay muted playsInline ref={nextVideoRef} className='pointer-events-none size-64 origin-center scale-150 object-cover object-center   '  src={getVideoSrc(currentIndex+1)}></video>
            </div>
          </div>


      <TiltText abc={tiltRef}/>
        <Page1Bottom/>
      </div>

   
    </div>
  )
}

export default Page1
