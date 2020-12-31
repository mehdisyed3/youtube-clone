import React from 'react'
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar'



function VideoCard({ image, title, channel, timestamp, views, channelImage, videoId }) {
  return (
    <div className='videoCard' >
      {
        videoId ? <iframe className="videoCard__thumbnail" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe> :
          <img className="videoCard__thumbnail" src={image} alt='' />
      }
     
      <div className='videoCard__info'>
        <Avatar className='videoCard__avatar' alt={channel} src={channelImage} />
        <div className='videoCard__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} - {timestamp}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
