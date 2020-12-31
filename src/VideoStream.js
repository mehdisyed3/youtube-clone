import React, { useState } from 'react'
import { useParams } from "react-router"

function VideoStream() {
  const [str,setstr] = useState('')
   const { searchTerm } = useParams()
   console.log("@@@@",searchTerm)
  // setstr(id)
  // console.log("IDIDIDI",str)

  return (
    <div>
      <h1>Widi</h1>
      {/* <iframe className="videoCard__thumbnail" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allowFullScreen></iframe>  */}
    </div>
  )
}

export default VideoStream
