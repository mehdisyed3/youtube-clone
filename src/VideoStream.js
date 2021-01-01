import React, { useState } from 'react'
import { useParams } from "react-router"
import './VideoStream.css'

function VideoStream() {
  const [str,setstr] = useState('')
   const { id } = useParams()
   console.log("@@@@",id)

  return (
    <div className='videostream'>
      <h1>Widi</h1>
      <iframe height='90%' width='70%' className="videostream__frame" src={`https://www.youtube.com/embed/${id}?autoplay=1`} frameBorder="0" allowFullScreen></iframe> 
    </div>
  )
}

export default VideoStream
