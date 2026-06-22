import React from 'react'
import argentina from '../assets/TeamArgentina.jpeg'
import brazil from '../assets/TeamBrazil.jpg'
import england from '../assets/TeamEngland.jpg'
import france from '../assets/TeamFrance.jpg'
import germany from '../assets/TeamGermany.jpg'
import netherlands from '../assets/TeamNetherlands.jpg'
import portugal from '../assets/TeamProtugal.jpg'
import spain from '../assets/TeamSpain.jpg'
import TeamCard from '../components/teams/TeamCard'

const Teams = () => {
  return (
    <div className='p-4'>
      <div className='bg-red-300 pt-[45vh] '>
        <h2 className='font-[font2] text-[10vw] uppercase bg-amber-300'>Teams</h2>
      </div>
      <div className='-mt-[8vh]'>
        <TeamCard image1={portugal} image2={argentina}/>
        <TeamCard image1={brazil} image2={england}/>
        <TeamCard image1={france} image2={germany}/>
        <TeamCard image1={netherlands} image2={spain}/>
      </div>
    </div>
  )
}

export default Teams