import React from 'react'
import { TransitionProvider, useTransition } from '../../context/TransitionContext'

const Stairs = () => {
  const { stairParentRef } = useTransition()

  return (
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
  )
}

export default Stairs