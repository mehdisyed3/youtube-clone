import React from 'react'
import { useParams } from "react-router"
import RecommendedVideos from './RecommendedVideos'
import './VideoStream.css'

function VideoStream() {
  const { id } = useParams()
  const info = id.split(',')
  const vidID = info[0]
  const title = info[1]

  console.log(vidID, title)

  return (
    <div className='videostream'>

      <iframe title={title} height='100%' width='90%' className="videostream__frame" src={`https://www.youtube.com/embed/${vidID}?autoplay=1`} frameBorder="0" allow='autoplay; encrypted-media' allowFullScreen></iframe>
      <h3 className='videostream__title'>{title}</h3>

      <div className="videostream__recommended">
        <RecommendedVideos heading="More Videos" />
      </div>
    </div>
  )
}

export default VideoStream
