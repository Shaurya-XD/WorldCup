import React from 'react'
import { useTransition } from '../../context/TransitionContext';

const HomeBottomText = () => {
  const { playTransition } = useTransition();
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 uppercase text-[6vw] text-white pb-3'>
        <button onClick={()=> playTransition('/teams')} className='border-4 rounded-full px-8 pt-3 leading-[6vw] hover:text-yellow-300'>Teams</button>
        <button onClick={()=> playTransition('/players')} className='border-4 rounded-full px-8 pt-3 leading-[6vw] hover:text-yellow-300'>Players</button>
    </div>
  )
}

export default HomeBottomText 
