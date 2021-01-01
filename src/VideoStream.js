import React, { useState } from 'react'
import { useParams } from "react-router"
import './VideoStream.css'

function VideoStream() {
   const { id } = useParams()
   const info = id.split(',')
  const vidID = info[0]
  const title =info[1]

  console.log(vidID,title)

  return (
    <div className='videostream'>

      <iframe height='90%' width='70%' className="videostream__frame" src={`https://www.youtube.com/embed/${vidID}?autoplay=1`} frameBorder="0" allow='autoplay; encrypted-media' allowFullScreen></iframe> 
      <h3 className='videostream__title'>{title}</h3>
    </div>
  )
}

export default VideoStream
