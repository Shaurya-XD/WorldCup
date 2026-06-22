import React from 'react'

const TeamCard = ({image1, image2}) => {
    return (
        <div className='w-full h-[50vh] mb-[1vh] flex gap-[0.6vw]'>
            <div className='group relative w-1/2 h-full bg-green-400 hover:rounded-[3vw] overflow-hidden transition-all'>
                <img className='h-full w-full group-hover:scale-105 transition-all object-cover object-bottom' src={image1} />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/30 h-full w-full flex items-center justify-center'>
                    <h2 className='font-[font1] text-[3vw] text-white uppercase border-4 rounded-[3vw] h-[8vh] px-[1vw]'>View Team</h2>
                </div>
            </div>
            <div className='group relative w-1/2 h-full bg-green-400 hover:rounded-[3vw] overflow-hidden transition-all'>
                <img className='h-full w-full group-hover:scale-105 transition-all object-cover object-center' src={image2} />
                <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 bg-black/30 h-full w-full flex items-center justify-center'>
                    <h2 className='font-[font1] text-[3vw] text-white uppercase border-4 rounded-[3vw] h-[8vh] px-[1vw]'>View Team</h2>
                </div>
            </div>

        </div>
    )
}

export default TeamCard