import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='text-[9vw] uppercase leading-[7vw] text-white font-[font1] pt-3 text-center'>
        <div>FIFA World Cup</div>
        <div className='flex justify-center items-center'>One <div className='h-[6.5vw] w-[15vw] rounded-full overflow-hidden -mt-4 mr-1'> <Video/> </div> Game</div>
        <div>One Champion</div>
    </div>
  )
}

export default HomeHeroText