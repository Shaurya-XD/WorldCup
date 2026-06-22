import React, { useRef } from 'react'
import NavItem from './NavItem'

import portugal from '../../assets/Portugal.jpeg'
import argentina from '../../assets/Argentina.jpeg'
import football2 from '../../assets/football2.png'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

const FullScreenNav = ({ setIsNavOpen, isNavOpen }) => {
    const contents = useRef(null)
    const stairParentRef = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.set(stairParentRef.current, {
            display: 'block',
            opacity: 1
        })

        tl.set(contents.current, {
            opacity: 0
        })

        tl.fromTo(
            '.stair',
            { y: '-100%' },
            {
                y: '0%',
                duration: 0.6,
                ease: 'expo.out',
                stagger: {
                    amount: -0.6
                }
            }
        )

        // Immediately reveal content when stairs finish
        tl.set(contents.current, {
            opacity: 1,
            duration: 0.15
        }, "-=0.6")

        // Immediately remove the stair overlay
        tl.set(stairParentRef.current, {
            display: 'none'
        }, "-=0.6")

    }, [])

    const playReveal = () => {
        const tl = gsap.timeline()

        gsap.set(stairParentRef.current, {
            display: 'block',
            opacity: 1
        })

        gsap.to(contents.current, {
            opacity: 0,
            duration: 0.2
        })

        tl.fromTo(
            '.stair',
            { y: '0%' },
            {
                y: '-100%',
                duration: 0.4,
                ease: 'expo.out',
                stagger: {
                    amount: -0.6
                }
            }
        )

        tl.call(() => {
            setIsNavOpen(false)
        })

    }

    return (
        <>
            <div ref={contents} className={`h-screen w-screen absolute bg-black text-white z-[100] overflow-hidden `}>
                <div className='absolute top-0 flex justify-between w-full'>
                    <img onClick={() => {
                        playReveal()
                    }} className='h-[4.5vw] py-2 px-3' src={football2} />
                    <button onClick={() => playReveal()}><i className="ri-close-large-fill text-[6vw] -mt-[3vh] pr-2"></i></button>
                </div>
                <div className='flex flex-col justify-center h-full w-full'>

                    <NavItem
                        title='Teams'
                        image1={portugal}
                        image2={argentina}
                        info='Best Squads'
                    />

                    <NavItem
                        title='Players'
                        image1={portugal}
                        image2={argentina}
                        info='lol'
                    />

                    <NavItem
                        title='Home'
                        image1={portugal}
                        image2={argentina}
                        info='hahaahha'
                    />

                </div>
            </div>
            <div
                ref={stairParentRef}
                className='w-screen h-screen fixed z-[999] hidden pointer-events-none'
            >
                <div className='w-full h-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
        </>


    )
}

export default FullScreenNav
