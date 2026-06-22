import React, { useRef } from 'react'
import Background from '../assets/Background.jpg'
import CR7 from '../assets/CR7.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import EH9 from '../assets/EH9.png'
import JB10 from '../assets/JB10.png'
import KD7 from '../assets/KD7.png'
import VD4 from '../assets/VD4.png'
import MN1 from '../assets/MN1.png'
import KM10 from '../assets/KM10.png'
import LM10 from '../assets/LM10.png'
import LY10 from '../assets/LY10.png'
import NJ10 from '../assets/NJ10.png'
import M10 from '../assets/M10.png'


const Players = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    CR7,
    KM10,
    M10,
    KD7,
    VD4,
    MN1,
    LY10,
    LM10,
    EH9,
    JB10,
    NJ10,
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 34.4%',
        end: 'top -70%',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * (imageArray.length-1));
          imageRef.current.src = imageArray[imageIndex];
          console.log(imageIndex)
        }
      }
    })
  }, [])

  return (
    <div>
      <div className='section-1'>
        <div ref={imageDivRef} className='absolute rounded-3xl top-[17.5vw] left-[30vw] h-[20vw] w-[13.5vw] overflow-hidden'>
          <img src={Background} className='absolute z-0 h-full w-full' />
          <img ref={imageRef} src={CR7} className='absolute z-10 h-full w-full object-cover object-top' />
          
        </div>
        <div className='relative z-20 pt-[65vh]'>
          <h1 className='text-[15vw] leading-[13vw] text-center uppercase font-[font2]'>Football's<br/>Finest</h1>
          <div className='pl-[40%] mt-[2vh]'>
            <p className='text-[3vw] uppercase font-[font2] leading-[3.2vw] indent-[15vw]'>The world's greatest players gather on football's biggest stage, driven by ambition, pride, and the pursuit of glory. Every touch, every goal, and every victory brings them one step closer to immortality. Meet the stars ready to define the FIFA World Cup 2026.</p>
          </div>
        </div>
      </div>

      <div className="section-2 h-screen">

      </div>
    </div>
  )
}

export default Players