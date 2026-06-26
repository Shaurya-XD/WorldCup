import React, { useRef, useState } from 'react'
import football1 from '../../assets/football.png'
import football2 from '../../assets/football2.png'
import { useTransition } from '../../context/TransitionContext'
import FullScreenNav from './FullScreenNav'
import gsap from 'gsap'

const Navbar = () => {
    const { playTransition } = useTransition();
    const navColorRef = useRef(null)
    const lineColor1 = useRef(null)
    const lineColor2 = useRef(null)
    const [isNavOpen, setIsNavOpen] = useState(false)


    return (
        <>
            <div className='fixed top-0 w-full flex justify-between z-[60]'>
                <img onClick={() => playTransition('/')} className='h-[4.5vw] py-2 px-3' src={football2} />
                <div onClick={() => setIsNavOpen(true)} className='h-[5.5vh] w-[14vw] bg-black' onMouseEnter={() =>{
                    navColorRef.current.style.height = '5.5vh'
                    lineColor1.current.style.backgroundColor = 'black'
                    lineColor2.current.style.backgroundColor = 'black'
                }} onMouseLeave={() =>{
                    navColorRef.current.style.height = '0%'
                    lineColor1.current.style.backgroundColor = 'white'
                    lineColor2.current.style.backgroundColor = 'white'
                }}>
                    <div ref={navColorRef} className='bg-yellow-300 absolute top-0 w-[14vw] right-0 transition-all'>
                        <div ref={lineColor1} className='w-[3vw] h-[0.1vh] mt-[2.5vh] absolute right-0 mr-[1.7vw] bg-white'></div>
                        <div ref={lineColor2} className='w-[1.5vw] h-[0.1vh] mt-[3.1vh] absolute right-0 mr-[1.7vw] bg-white'></div>
                    </div>
                </div>
            </div>
            {isNavOpen && <FullScreenNav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />}

        </>
    )
}

export default Navbar