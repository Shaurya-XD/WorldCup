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
  const section2Ref = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageTop = useRef(null)
  const imageBottom = useRef(null)
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
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 34.4%',
        end: 'top -70%',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          const imageIndex = Math.floor(elem.progress * (imageArray.length - 1));
          imageRef.current.src = imageArray[imageIndex];
          console.log(imageIndex)
        }
      },

    })

    gsap.to(imageTop.current, {
      scrollTrigger: {
        trigger: imageTop.current,
        start: 'top 0%',
        end: 'top -100%',
        scrub: true,
        pin: true
      },

    })

    gsap.to(imageBottom.current, {
      scrollTrigger: {
        trigger: imageBottom.current,
        start: 'top 0%',
        end: 'top -100%',
        scrub: true,
        pin: true
      }
    })

    gsap.to(section2Ref.current, {
      backgroundColor: "#000",
      marker: true,
      ease: "none",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top -80%",
        end: "+=100%",
        scrub: true,
      },
    });

  }, [])

  return (
    <div ref={section2Ref}>
      <div className='section-1'>
        <div ref={imageDivRef} className='absolute rounded-3xl top-[17.5vw] left-[30vw] h-[20vw] w-[13.5vw] overflow-hidden'>
          <img src={Background} className='absolute z-0 h-full w-full' />
          <img ref={imageRef} src={CR7} className='absolute z-10 h-full w-full object-cover object-top' />

        </div>
        <div className='relative z-20 pt-[65vh]'>
          <h1 className='text-[15vw] leading-[13vw] text-center uppercase font-[font2]'>Football's<br />Finest</h1>
          <div className='pl-[40%] mt-[2vh]'>
            <p className='text-[3vw] uppercase font-[font2] leading-[3.2vw] indent-[15vw]'>The world's greatest players gather on football's biggest stage, driven by ambition, pride, and the pursuit of glory. Every touch, every goal, and every victory brings them one step closer to immortality. Meet the stars ready to define the FIFA World Cup 2026.</p>
          </div>
        </div>
      </div>

      <div className="relative section-2 mt-[30vh] h-[200vh] w-screen ">
        <div className='absolute top-0 left-0 w-screen h-screen'>
          <div ref={imageTop} className='relative flex flex-col h-screen items-center'>
            <img className='absolute z-10 h-[100vh] rounded-3xl' src={Background} />
            <img className='absolute z-20 h-[100vh] top-0 left-1/2 -translate-x-50/97' src={CR7} alt="" />
          </div>
          <div className='absolute z-30 top-3/5 left-0 flex gap-[50vw] w-fit'>
            <h1 className='move-text font-[font2] text-[8vw] text-yellow-400 uppercase whitespace-nowrap'>Cristiano Ronaldo</h1>
          </div>
          <div className=' absolute z-30 top-1/4 left-0 flex gap-[50vw] w-fit'>
            <h1 className='opacity-0 move-text2 font-[font2] text-yellow-400 text-[8vw] uppercase whitespace-nowrap'>Greatest Of all time</h1>
          </div>
        </div>

        <div className='absolute top-[100vh] left-0 w-screen h-screen'>
          <div ref={imageBottom} className='relative flex flex-col h-screen items-center'>
            <img className='absolute z-10 h-[100vh] rounded-3xl' src={Background} />
            <img className='absolute z-20 h-[100vh] top-0 left-1/2 -translate-x-50/97' src={LM10} alt="" />
          </div>
          <div className='absolute z-30 top-3/5 left-0 flex gap-[50vw] w-fit'>
            <h1 className='move-text font-[font2] text-[8vw] text-yellow-400 uppercase whitespace-nowrap'>Lionel Messi</h1>
          </div>
          <div className=' absolute z-30 top-1/4 left-0 flex gap-[50vw] w-fit'>
            <h1 className='opacity-0 move-text2 font-[font2] text-[8vw] text-yellow-400 uppercase whitespace-nowrap'>Greatest Of all time</h1>
          </div>
        </div>

        <div className='absolute top-[200vh] left-0 w-screen h-screen bg-amber-900'>

        </div>

      </div>


    </div>
  )
}

export default Players