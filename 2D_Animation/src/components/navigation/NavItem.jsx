import React, { useReducer, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const NavItem = ({ title, image1, image2, info }) => {
    const containerRef = useRef(null)
    const hoverRef = useRef(null)
    const contentsRef = useRef(null)
    const contents2Ref = useRef(null)
    const timeD = title === "Teams" ? 0.5 : title === "Players" ? 0.7 : title === "Home" ? 0.9 : 0;

    useGSAP(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            rotateX: 90,
            delay: timeD
        })
    })

    const handleMouseEnter = (e) => {
        const rect = containerRef.current.getBoundingClientRect()

        const fromTop = e.clientY - rect.top
        const fromBottom = rect.bottom - e.clientY

        gsap.killTweensOf(hoverRef.current)

        gsap.set(hoverRef.current, {
            y: fromTop < fromBottom ? '-100%' : '100%'
        })

        gsap.set([contentsRef.current, contents2Ref.current], {
            opacity: '0%'
        })

        gsap.to(hoverRef.current, {
            y: '0%',
            duration: 0.30,
            ease: 'expo.in'
        })

        gsap.to([contentsRef.current, contents2Ref.current], {
            opacity: '100%',
            duration: 0.30,
            ease: 'power2.out'
        })


    }

    const handleMouseLeave = (e) => {
        const rect = containerRef.current.getBoundingClientRect()

        const leaveTop = e.clientY - rect.top
        const leaveBottom = rect.bottom - e.clientY

        gsap.killTweensOf(hoverRef.current)

        gsap.to(hoverRef.current, {
            y: leaveTop < leaveBottom ? '-100%' : '100%',
            duration: 0.30,
            ease: 'expo.in'
        })

        gsap.to([contentsRef.current, contents2Ref.current], {
            opacity: '0%',
            duration: 0.30,
            ease: 'power2.in'
        })


    }

    return (<div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative overflow-hidden origin-top'
    > <h1 className='relative z-10 text-[8vw] font-[font2] uppercase border-b border-white border-t pt-[1vw] leading-[6vw] text-center'>
            {title} </h1>

        <div
            ref={hoverRef}
            className='absolute top-0 bg-[#D3FD50] text-black flex z-20'
            style={{ transform: 'translateY(-100%)' }}
        >
            <div ref={contentsRef} className='move-x flex items-center w-[143vw] my-1'>
                <h2 className='whitespace-nowrap text-[8vw] font-[font2] uppercase pt-[1vw] leading-[6vw] px-[2vw]'>
                    {info}
                </h2>

                <img
                    className='w-[13vw] h-[6vw] rounded-full object-cover p-1'
                    src={image1}
                />

                <h2 className='whitespace-nowrap text-[8vw] font-[font2] uppercase pt-[1vw] leading-[6vw] px-[2vw]'>
                    {info}
                </h2>

                <img
                    className='w-[13vw] h-[6vw] rounded-full object-cover p-1'
                    src={image2}
                />
            </div>

            <div ref={contents2Ref} className='move-x flex items-center w-[143vw] my-1'>
                <h2 className='whitespace-nowrap text-[8vw] font-[font2] uppercase pt-[1vw] leading-[6vw] px-[2vw]'>
                    {info}
                </h2>

                <img
                    className='w-[13vw] h-[6vw] rounded-full object-cover p-1'
                    src={image1}
                />

                <h2 className='whitespace-nowrap text-[8vw] font-[font2] uppercase pt-[1vw] leading-[6vw] px-[2vw]'>
                    {info}
                </h2>

                <img
                    className='w-[13vw] h-[6vw] rounded-full object-cover p-1'
                    src={image2}
                />
            </div>

        </div>
    </div>


    )
}

export default NavItem
