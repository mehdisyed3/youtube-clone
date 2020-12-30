import React from 'react'
import './VideoCard.css'
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom'


function VideoCard({ image, title, channel, timestamp, views, channelImage, videoId }) {
  return (
    <div className='videoCard' >
      <Link to='/videostream' >
      {
        videoId ? <iframe className="videoCard__thumbnail" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe> :
          <img className="videoCard__thumbnail" src={image} alt='' />
      }
      </Link>
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
