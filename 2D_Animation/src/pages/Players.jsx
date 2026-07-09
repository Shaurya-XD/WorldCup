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
import PlayerCard from '../components/players/PlayerCard'
import { useTransition } from '../context/TransitionContext'


const Players = () => {
  gsap.registerPlugin(ScrollTrigger)
  const section2Ref = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageTop = useRef(null)
  const imageBottom = useRef(null)
  const panelImage = useRef(null)
  const backPanel = useRef(null)
  const menu = useRef(null)
  const players = useRef(null)
  const teams = useRef(null)
  const navPanel = useRef(null)
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const { playTransition } = useTransition()

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

  const handleMouseEnter = (image) => {
    gsap.set(backPanel.current, {
      autoAlpha: 1,
    })
    panelImage.current.src = image;
  }

  const handleMouseExit = () => {
    gsap.set(backPanel.current, {
      autoAlpha: 0,
    })
    panelImage.current.src = null;
  }

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
      ease: "none",
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top -150%",
        end: "+=20%",
        scrub: true,
      },
    });

    gsap.set(navPanel.current, {
      translateY: '-100%'
    })

    gsap.to(navPanel.current, {
      translateY: '0%'
    })

    const tween = gsap.to(backPanel.current, {
      scrollTrigger: {
        trigger: backPanel.current,
        start: 'top 34.4%',
        end: 'top -40%',
        scrub: true,
        pin: true,
      },
    })

    tween.scrollTrigger.pin.parentNode.style.pointerEvents = "none";

  }, [])

  const hoverNav = (panel) => {
    gsap.to(panel.current, {
      translateY: '0%',
      duration: 0.2
    })
  }

  const hoverNavEnd = (panel) => {
    gsap.to(panel.current, {
      translateY: '-100%',
      duration: 0.2
    })
  }

  return (
    <div ref={section2Ref} className='overflow-hidden'>

      <div ref={navPanel} className='w-full absolute top-0 left-0 h-[15vh] flex justify-end z-[70]'>
        <div onClick={() => playTransition('/teams')} onMouseEnter={()=>{
          hoverNav(teams)
          text1.current.style.color = "black"
        }} onMouseLeave={() =>{
          hoverNavEnd(teams)
          text1.current.style.color = "white"
        } } className='bg-black h-[7vh] w-[20vw] overflow-hidden relative'>
          <h3 ref={text1} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Teams</h3>
          <div ref={teams} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div>
        </div>
        <div onClick={() => playTransition('/players')} onMouseEnter={()=>{
           hoverNav(players)
           text2.current.style.color = "black"
        }} onMouseLeave={() =>{
          hoverNavEnd(players)
          text2.current.style.color = "white"
        }} className='bg-black h-[11vh] w-[30vw] overflow-hidden relative'>
          <h3 ref={text2} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Players</h3>
          <div ref={players} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div>
        </div>
        <div onClick={() => playTransition('/')} onMouseEnter={()=>{
          hoverNav(menu)
          text3.current.style.color = "black"
          line1.current.style.backgroundColor = "black"
          line2.current.style.backgroundColor = "black"
        }} onMouseLeave={() =>{
          hoverNavEnd(menu)
          text3.current.style.color = "white"
          line1.current.style.backgroundColor = "white"
          line2.current.style.backgroundColor = "white"
        }} className=' bg-black relative h-full w-[14vw] overflow-hidden'>
          <h3 ref={text3} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Home</h3>
          <div ref={line1} className='w-[3vw] h-[0.1vh] mt-[2.5vh] absolute right-0 mr-[1.7vw] z-[80] bg-white'></div>
          <div ref={line2} className='w-[1.5vw] h-[0.1vh] mt-[3.1vh] absolute right-0 z-[80] mr-[1.7vw] bg-white'></div>
          <div ref={menu} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div>
        </div>
      </div>

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

      <div className="relative section-2 mt-[30vh] h-[350vh] w-screen overflow-hidden">
        <div className='absolute top-0 left-0 w-screen h-screen'>
          <div ref={imageTop} className='relative z-10 flex flex-col h-screen items-center'>
            <img className='absolute z-10 h-[100vh] rounded-3xl' src={Background} />
            <img className='absolute z-20 h-[100vh] top-0 left-1/2 -translate-x-50/97' src={CR7} alt="" />
          </div>
          <div className='absolute z-30 top-3/5 left-0 flex gap-[50vw] w-fit'>
            <h1 className='move-text font-[font2] text-[8vw] text-yellow-400 uppercase whitespace-nowrap'>Cristiano Ronaldo</h1>
          </div>
          <div className=' absolute z-0 top-1/4 left-0 flex gap-[50vw] w-fit'>
            <h1 className='opacity-0 move-text2 font-[font2] text-yellow-400 text-[8vw] uppercase whitespace-nowrap'>Greatest Of all time</h1>
          </div>
        </div>

        <div className='absolute top-[100vh] left-0 w-screen h-screen'>
          <div ref={imageBottom} className='relative z-10 flex flex-col h-screen items-center'>
            <img className='absolute z-10 h-[100vh] rounded-3xl' src={Background} />
            <img className='absolute z-20 h-[100vh] top-0 left-1/2 -translate-x-50/97' src={LM10} alt="" />
          </div>
          <div className='absolute z-30 top-3/5 left-0 flex gap-[50vw] w-fit'>
            <h1 className='move-text font-[font2] text-[8vw] text-yellow-400 uppercase whitespace-nowrap'>Lionel Messi</h1>
          </div>
          <div className=' absolute z-0 top-1/4 left-0 flex gap-[50vw] w-fit'>
            <h1 className='opacity-0 move-text2 font-[font2] text-[8vw] text-yellow-400 uppercase whitespace-nowrap'>Greatest Of all time</h1>
          </div>
        </div>



        <div className='absolute top-[200vh] z-20 left-0 w-screen h-screen bg-black'>

          <div ref={backPanel} className='absolute invisible z-[999] pl-[25vw] top-[1vh] left-0 pointer-events-none'>
            <div className='relative w-[19.5vw] h-[55vh] bg-red-400 rounded-[1vw] overflow-hidden'>
              <img className='object-cover h-full' src={Background} />
              <img ref={panelImage} className='absolute top-0 h-full w-full object-cover object-top' />
            </div>
          </div>

          <div className='w-full h-[15vh]'></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(CR7)}><PlayerCard name={'Cristiano Ronaldo'} goals={975} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(LM10)}><PlayerCard name={'Lionel Messi'} goals={916} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(NJ10)}><PlayerCard name={'Neymar Jr'} goals={470} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(KM10)}><PlayerCard name={'Kylian Mbappé'} goals={420} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(EH9)}><PlayerCard name={'Erling Haaland'} goals={350} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(KD7)}><PlayerCard name={'Kevin De Bruyne'} goals={186} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(M10)}><PlayerCard name={'Luka Modrić'} goals={177} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(JB10)}><PlayerCard name={'Jude Bellingham'} goals={80} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(VD4)}><PlayerCard name={'Virgil Van Dijk'} goals={69} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(LY10)}><PlayerCard name={'Lamine Yamal'} goals={50} /></div>
          <div onMouseLeave={handleMouseExit} onMouseEnter={()=> handleMouseEnter(MN1)}><PlayerCard name={'Manuel Neuer'} goals={0} /></div>
          <div className='w-full h-[30vh] bg-black'></div>
          
        </div>

      </div>


    </div>
  )
}

export default Players