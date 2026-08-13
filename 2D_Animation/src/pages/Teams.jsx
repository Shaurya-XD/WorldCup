import React, { useEffect, useRef, useState } from 'react'
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

const teamFacts = {
  portugal: { code: 'POR', nickname: 'A Seleção', note: 'A technically fearless side with a taste for decisive nights.' },
  france: { code: 'FRA', nickname: 'Les Bleus', note: 'Power, pace and a generation built for the biggest stage.' },
  argentina: { code: 'ARG', nickname: 'La Albiceleste', note: 'World champions carrying a nation’s unmistakable footballing soul.' },
  england: { code: 'ENG', nickname: 'The Three Lions', note: 'A deep pool of talent chasing a new chapter of history.' },
  brazil: { code: 'BRA', nickname: 'Seleção', note: 'The yellow shirt remains football’s most joyful global symbol.' },
  germany: { code: 'GER', nickname: 'Die Mannschaft', note: 'Tournament pedigree, precision and an appetite for renewal.' },
  spain: { code: 'ESP', nickname: 'La Roja', note: 'Possession with purpose, shaped by a fearless young core.' },
  netherlands: { code: 'NED', nickname: 'Oranje', note: 'A distinct football culture, always capable of a statement.' },
}

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
  const [selectedTeam, setSelectedTeam] = useState(null)
  const { playTransition } = useTransition()

  useGSAP(() => {
    gsap.from('.card', { height: '1px', stagger: { amount: 1 }, scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', end: 'top -200%', scrub: true } })
    gsap.set(navPanel.current, { translateY: '-100%' })
    gsap.to(navPanel.current, { translateY: '0%' })
  }, { scope: sectionRef });

  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setSelectedTeam(null) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const hoverNav = (panel) => gsap.to(panel.current, { translateY: '0%', duration: 0.2 })
  const hoverNavEnd = (panel) => gsap.to(panel.current, { translateY: '-100%', duration: 0.2 })
  const selectedFact = selectedTeam ? teamFacts[selectedTeam.name] : null

  window.addEventListener('mousemove', (e) => {
    const pageHeight = document.documentElement.scrollHeight;
    gsap.to(navPanel.current, { translateY: e.pageY > pageHeight * 0.46 ? '-100%' : '0%' })
  });

  return (
    <div className='p-4 overflow-hidden'>
      <div ref={navPanel} className='w-full absolute top-0 left-0 h-[15vh] flex justify-end z-[70]'>
        <div onClick={() => playTransition('/teams')} onMouseEnter={() => { hoverNav(teams); text1.current.style.color = 'black' }} onMouseLeave={() => { hoverNavEnd(teams); text1.current.style.color = 'white' }} className='bg-black h-[7vh] w-[20vw] overflow-hidden relative'><h3 ref={text1} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Teams</h3><div ref={teams} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div></div>
        <div onClick={() => playTransition('/players')} onMouseEnter={() => { hoverNav(players); text2.current.style.color = 'black' }} onMouseLeave={() => { hoverNavEnd(players); text2.current.style.color = 'white' }} className='bg-black h-[11vh] w-[30vw] overflow-hidden relative'><h3 ref={text2} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Players</h3><div ref={players} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div></div>
        <div onClick={() => playTransition('/')} onMouseEnter={() => { hoverNav(menu); text3.current.style.color = 'black'; line1.current.style.backgroundColor = 'black'; line2.current.style.backgroundColor = 'black' }} onMouseLeave={() => { hoverNavEnd(menu); text3.current.style.color = 'white'; line1.current.style.backgroundColor = 'white'; line2.current.style.backgroundColor = 'white' }} className='bg-black relative h-full w-[14vw] overflow-hidden'><h3 ref={text3} className='absolute z-[80] text-white bottom-0 px-[0.5vw] text-[2.1vh] uppercase font-[font2]'>Home</h3><div ref={line1} className='w-[3vw] h-[0.1vh] mt-[2.5vh] absolute right-0 mr-[1.7vw] z-[80] bg-white'></div><div ref={line2} className='w-[1.5vw] h-[0.1vh] mt-[3.1vh] absolute right-0 z-[80] mr-[1.7vw] bg-white'></div><div ref={menu} className='bg-[#D3FD50] h-full w-full -translate-y-full'></div></div>
      </div>
      <div className='pt-[40vh]'><h2 className='font-[font2] text-[10vw] uppercase'>Teams</h2></div>
      <div ref={sectionRef} className='-mt-[8vh] flex flex-col gap-3'>
        <div className='card h-[60vh]'><TeamCard image1={portugal} image2={france} name1='portugal' name2='france' win1={70} win2={69} awards1={0} awards2={2} onTeamSelect={setSelectedTeam} /></div>
        <div className='card h-[60vh]'><TeamCard image1={argentina} image2={england} name1='argentina' name2='england' win1={76} win2={65} awards1={3} awards2={1} onTeamSelect={setSelectedTeam} /></div>
        <div className='card h-[60vh]'><TeamCard image1={brazil} image2={germany} name1='brazil' name2='germany' win1={41} win2={44} awards1={5} awards2={4} onTeamSelect={setSelectedTeam} /></div>
        <div className='card h-[60vh]'><TeamCard image1={spain} image2={netherlands} name1='spain' name2='netherlands' win1={69} win2={60} awards1={4} awards2={0} onTeamSelect={setSelectedTeam} /></div>
      </div>
      <div className='w-screen h-[35vh]'></div>
      {selectedTeam && <div className='fixed inset-0 z-[200] bg-black/90 p-4 md:p-8 flex items-center justify-center' role='dialog' aria-modal='true' aria-label={`${selectedTeam.name} team details`} onClick={() => setSelectedTeam(null)}><section className='relative w-full max-w-6xl min-h-[72vh] overflow-hidden rounded-[2rem] bg-[#D3FD50] text-black grid md:grid-cols-[1.05fr_0.95fr] shadow-2xl' onClick={(event) => event.stopPropagation()}><div className='relative min-h-[36vh] overflow-hidden bg-black'><img src={selectedTeam.image} alt={`${selectedTeam.name} national team`} className='h-full w-full object-cover' /><div className='absolute inset-0 bg-gradient-to-t from-black/65 to-transparent'></div><p className='absolute bottom-6 left-7 font-[font2] text-[1.1rem] tracking-[0.25em] text-white uppercase'>{selectedFact.code} / World Cup 2026</p></div><div className='relative p-7 md:p-10 flex flex-col justify-between'><button type='button' onClick={() => setSelectedTeam(null)} className='absolute right-5 top-5 h-11 w-11 rounded-full border-2 border-black text-2xl leading-none hover:bg-black hover:text-[#D3FD50] transition-colors' aria-label='Close team details'>×</button><div><p className='font-[font2] text-sm tracking-[0.22em] uppercase'>{selectedFact.nickname}</p><h2 className='mt-5 pr-10 font-[font2] text-[clamp(3.5rem,8vw,7rem)] leading-[0.8] uppercase'>{selectedTeam.name}</h2><p className='mt-8 max-w-md font-[font1] text-xl leading-tight'>{selectedFact.note}</p></div><div className='mt-10 grid grid-cols-2 border-t-2 border-black pt-5'><div><p className='font-[font2] text-xs tracking-widest uppercase'>Win rate</p><p className='font-[font2] text-5xl'>{selectedTeam.win}%</p></div><div><p className='font-[font2] text-xs tracking-widest uppercase'>World cups</p><div className='flex items-center gap-1'>{Array.from({ length: selectedTeam.awards }).map((_, index) => <img key={index} src={trophy} alt='' className='h-10 w-10 object-contain' />)}{selectedTeam.awards === 0 && <p className='font-[font2] text-5xl'>—</p>}</div></div></div></div></section></div>}
    </div>
  )
}

export default Teams
