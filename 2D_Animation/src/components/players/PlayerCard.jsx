import React, { useRef, useState } from 'react'
import football2 from '../../assets/football2.png'
import gsap from 'gsap';

const PlayerCard = ({ name, goals }) => {
    const [hoverPanel, setHoverPanel] = useState(true);
    const hoverRef = useRef(null)

    const handleMouseEnter = () => {
        console.log("Entered")
        gsap.set(hoverRef.current, {
            y: '-100%',
        })

        gsap.to(hoverRef.current, {
            y: '0%'
        })
    }

    const handleMouseExit = () => {
        console.log("Exit")
        gsap.set(hoverRef.current, {
            y: '0%',
        })

        gsap.to(hoverRef.current, {
            y: '-100%'
        })
    }


    return (
        <div onMouseLeave={handleMouseExit} onMouseEnter={handleMouseEnter} className='bg-black overflow-hidden relative text-white transition-all hover:text-black w-full h-[10vh] border-t-2 border-b-2 border-white/50'>
            <div className='absolute z-10 flex justify-between items-center h-full w-full'>
                <div className=' h-full flex justify-start gap-[0.5vw] items-center pl-[1vw]'>
                    <h2 className='text-[1.5vw] font-[font2]'>{goals}</h2>
                    <img className='h-[1.7vw]' src={football2} />
                </div>
                <h2 className='text-[3vw] font-[font1] pr-[2vw] '>{name}</h2>
            </div>

            <div ref={hoverRef} style={{ transform: 'translateY(-100%)' }} className='absolute top-0 w-full h-full bg-yellow-300'></div>


        </div>
    )
}

export default PlayerCard