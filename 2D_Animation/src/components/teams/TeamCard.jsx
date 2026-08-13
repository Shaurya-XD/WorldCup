import React, { useRef, useState } from 'react'
import trophy from '../../assets/trophy.png'
import gsap from 'gsap'

const TeamCard = ({ image1, image2, name1, name2, win1, win2, awards1, awards2, onTeamSelect }) => {
    const teamInfo = useRef(null)
    const [name, setName] = useState("")
    const [win, setWin] = useState(0)
    const [n, setN] = useState(0)

    const handleMouseEnter = () => {
        gsap.to(teamInfo.current, { translateY: '0%' })
    }

    const handleMouseExit = () => {
        gsap.to(teamInfo.current, { translateY: '-100%' })
    }

    return (
        <div className='w-full h-full mb-[2vh] flex gap-[0.6vw]'>
            <div ref={teamInfo} className='fixed w-full h-[10.5vh] top-[0] left-0 z-[55] -translate-y-full'>
                <div className='h-full w-full'>
                    <div className='bg-green-100 w-full h-[5.5vh]'></div>
                    <div className='w-full h-[5vh] border-b-2 border-t-2 bg-green-300 flex justify-between items-center'>
                        <h2 className='pl-[4.5vw] font-[font2] text-[4vh] uppercase'>{name}</h2>
                        <div className='flex justify-start -space-x-[9vw]'>
                            {Array.from({ length: n }).map((_, index) => <img key={index} className="h-[11vh] pr-[7vw] -mt-[4.5vh] object-cover" src={trophy} alt="Trophy" />)}
                        </div>
                        <h2 className='font-[font2] text-[4vh] uppercase'>{win}%</h2>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => { handleMouseEnter(); setName(name1); setWin(win1); setN(awards1) }} onMouseLeave={handleMouseExit} onClick={() => onTeamSelect({ image: image1, name: name1, win: win1, awards: awards1 })} className='group relative w-1/2 h-full bg-green-400 hover:rounded-[3vw] overflow-hidden transition-all cursor-pointer'>
                <img className='h-full w-full group-hover:scale-105 transition-all object-cover object-center' src={image1} />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/30 h-full w-full flex items-center justify-center'>
                    <h2 className='font-[font1] text-[3vw] text-white uppercase border-4 rounded-[3vw] h-[8vh] px-[1vw]'>{name1}</h2>
                </div>
            </div>
            <div onMouseEnter={() => { handleMouseEnter(); setName(name2); setWin(win2); setN(awards2) }} onMouseLeave={handleMouseExit} onClick={() => onTeamSelect({ image: image2, name: name2, win: win2, awards: awards2 })} className='group relative w-1/2 h-full bg-green-400 hover:rounded-[3vw] overflow-hidden transition-all cursor-pointer'>
                <img className='h-full w-full group-hover:scale-105 transition-all object-cover object-center' src={image2} />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/30 h-full w-full flex items-center justify-center'>
                    <h2 className='font-[font1] text-[3vw] text-white uppercase border-4 rounded-[3vw] h-[8vh] px-[1vw]'>{name2}</h2>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
