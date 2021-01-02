import './VideoRow.css'
import React from 'react'

function VideoRow({ views, subs, description, channel, timestamp, title, image }) {
  return (
    <div className='videoRow'>
      <img className="videoCard__thumbnail" src={image} alt='' />
      <div className='videoRow__text'>
        <h3>{title}</h3>
        <p className='videoRow__headline'>
          {channel} -
          <span className='videoRow__subscribers'>
            <span className='videoRow__subs'>{subs}</span> Subscribers
            </span>
          {views} Views - {timestamp}
        </p>
        <p className='videoRow__description'>{description}</p>

      </div>

    </div>
  )
}

export default VideoRow
