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
import { ScrollTrigger } from 'gsap/all'
import trophy from '../assets/trophy.png'

gsap.registerPlugin(ScrollTrigger)

const Teams = () => {
  const sectionRef = useRef(null)
  const teamInfo = useRef(null)
  const [name, setName] = useState("")
  const [win, setWin] = useState(0)
  const [n, setN] = useState(0)

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

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  const handleMouseEnter = () => {
    gsap.to(teamInfo.current, {
      translateY: '0%'
    })
  }

  const handleMouseExit = () => {
    gsap.to(teamInfo.current, {
      translateY: '-100%'
    })
  }

  return (
    <div className='p-4 overflow-hidden'>

      <div ref={teamInfo} className='fixed w-full h-[10.5vh] top-[0] left-0 z-[55] -translate-y-full'>
        <div className='h-full w-full'>
          <div className='bg-green-100 w-full h-[5.5vh]'></div>
          <div className='w-full h-[5vh] border-b-2 border-t-2 bg-green-300 flex justify-between items-center'>
            <h2 className='pl-[4.5vw] font-[font2] text-[4vh] uppercase'>{name}</h2>
            <div className='flex justify-start -space-x-[2vw]'>
              {Array.from({ length: n }).map((_, index) => (
                <img
                  key={index}
                  className="h-[11vh] pr-[7vw] -mt-[4.5vh] object-cover"
                  src={trophy}
                  alt="Trophy"
                />
              ))}
            </div>
            <h2 className='font-[font2] text-[4vh] uppercase'>{win}%</h2>
          </div>
        </div>
      </div>

      <div className=' pt-[45vh] '>
        <h2 className='font-[font2] text-[10vw] uppercase'>Teams</h2>
      </div>
      <div ref={sectionRef} className='-mt-[8vh] flex flex-col gap-3'>
        <div className='card h-[60vh]' onMouseEnter={() => {
          handleMouseEnter();
          setName('portugal')
          setWin(60)
          setN(1)
        }} onMouseLeave={handleMouseExit}><TeamCard image1={portugal} image2={france} /></div>
        <div className='card h-[60vh]' onMouseEnter={() => {
          handleMouseEnter();
          setName('portugal')
          setWin(60)
          setN(1)
        }} ><TeamCard image1={argentina} image2={england} /></div>
        <div className='card h-[60vh]' onMouseEnter={() => {
          handleMouseEnter();
          setName('portugal')
          setWin(60)
          setN(1)
        }} ><TeamCard image1={brazil} image2={germany} /></div>
        <div className='card h-[60vh]' onMouseEnter={() => {
          handleMouseEnter();
          setName('portugal')
          setWin(60)
          setN(1)
        }} ><TeamCard image1={spain} image2={netherlands} /></div>
      </div>
      <div className='w-screen h-[35vh]'></div>
    </div>
  )
}

export default Teams
