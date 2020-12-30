import React from 'react'
import { useParams } from "react-router"

function VideoStream() {
  let obj = useParams()
  console.log(obj)
  return (
    <div>
      VideoStream
    </div>
  )
}

export default VideoStream
