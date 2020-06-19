import React from 'react';
  



const BackgroundVideo = () => {
  const videoSource = '../../styles/images/lessTraveledMainVideo'
  return (
    <div className='video-container'>
      <video autoPlay="autoplay" loop="loop" muted>
        <source src={videoSource} type='video/mp4'></source>
          Your Browser does not support this video
      </video>
    </div>
  )
}

export default BackgroundVideo;