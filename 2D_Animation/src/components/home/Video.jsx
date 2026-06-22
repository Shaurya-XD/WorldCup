import React from 'react'
import HomePageVideo from '../../assets/HomeVideo.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video
            src={HomePageVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
        />
    </div>
  )
}

export default Video