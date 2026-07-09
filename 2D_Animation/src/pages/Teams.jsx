import React, { useRef, useState } from 'react'
import argentina from '../assets/TeamArgentina.jpeg'
import brazil from '../assets/TeamBrazil.jpg'
import england from '../assets/TeamEngland.jpg'
import france from '../assets/TeamFrance.jpg'
import germany from '../assets/TeamGermany.jpg'
import netherlands from '../assets/TeamNetherlands.jpg'
import portugal from '../assets/TeamProtugal.jpg'
import spain from '../assets/TeamSpain.jpg'
import TeamCard from '../components/teams/TeamCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import trophy from '../assets/trophy.png'
import { useTransition } from '../context/TransitionContext'

const Teams = () => {
  const sectionRef = useRef(null);
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

  useGSAP(() => {
    gsap.from(
      ".card",
      {
        height: "1px",
        stagger: {
          amount: 1
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          end: "top -200%",
          scrub: true,
        },
      }
    );

    gsap.set(navPanel.current, {
      translateY: '-100%'
    })

    gsap.to(navPanel.current, {
      translateY: '0%'
    })

  }, { scope: sectionRef });

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

  window.addEventListener("mousemove", (e) => {
    const pageHeight = document.documentElement.scrollHeight;

    if (e.pageY > pageHeight * 0.46) {
      gsap.to(navPanel.current, {
        translateY: '-100%'
      })
    } else {
      gsap.to(navPanel.current, {
        translateY: '0%'
      })
    }
  });

  return (
    <div className='p-4 overflow-hidden'>

      <div ref={navPanel} className='w-full absolute top-0 left-0 h-[15vh] flex justify-end z-[70]'>
        <div onClick={() => playTransition('/teams')} onMouseEnter={() => {
          hoverNav(teams)
          text1.current.style.color = "black"
        }} onMouseLeave={() => {
          hoverNavEnd(teams)
          text1.current.style.color = "white"
        }} className='bg-black h-[7vh] w-[20vw] overflow-hidden relative'>
          <h3 ref={text1} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Teams</h3>
          <div ref={teams} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div>
        </div>
        <div onClick={() => playTransition('/players')} onMouseEnter={() => {
          hoverNav(players)
          text2.current.style.color = "black"
        }} onMouseLeave={() => {
          hoverNavEnd(players)
          text2.current.style.color = "white"
        }} className='bg-black h-[11vh] w-[30vw] overflow-hidden relative'>
          <h3 ref={text2} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Players</h3>
          <div ref={players} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div>
        </div>
        <div onClick={() => playTransition('/')} onMouseEnter={() => {
          hoverNav(menu)
          text3.current.style.color = "black"
          line1.current.style.backgroundColor = "black"
          line2.current.style.backgroundColor = "black"
        }} onMouseLeave={() => {
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

      <div className=' pt-[40vh] '>
        <h2 className='font-[font2] text-[10vw] uppercase'>Teams</h2>
      </div>
      <div ref={sectionRef} className='-mt-[8vh] flex flex-col gap-3'>
        <div className='card h-[60vh]' ><TeamCard image1={portugal} image2={france} name1={'portugal'} name2={'france'} win1={70} win2={69} awards1={0} awards2={2} /></div>
        <div className='card h-[60vh]' ><TeamCard image1={argentina} image2={england} name1={'argentina'} name2={'england'} win1={76} win2={65} awards1={3} awards2={1} /></div>
        <div className='card h-[60vh]' ><TeamCard image1={brazil} image2={germany} name1={'brazil'} name2={'germany'} win1={41} win2={44} awards1={5} awards2={4} /></div>
        <div className='card h-[60vh]' ><TeamCard image1={spain} image2={netherlands} name1={'spain'} name2={'netherlands'} win1={69} win2={60} awards1={4} awards2={0} /></div>
      </div>
      <div className='w-screen h-[35vh]'></div>
    </div>
  )
}

export default Teams
