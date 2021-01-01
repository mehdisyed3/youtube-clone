
import React, { useEffect, useState } from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
import * as timeago from 'timeago.js'
import {Link} from 'react-router-dom'


function RecommendedVideos() {
  const [videos, setVideos] = useState([])

  useEffect(() => {

    const pullVideos = async function () {

      await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=15&playlistId=PLub7sJmces1R7hB_EyLoJBl1sMX6Mre-J&key=AIzaSyCqMyROln9xn38eQ7eVpnhrMXc6uhgPbos')
        .then(res => res.json())
        .then(data => setVideos(data.items))
    }
    pullVideos()
  }, [])



  const display = videos.map(item => (
    <Link style={{ textDecoration: 'none' }}  to={`/videostream/${item.snippet.resourceId.videoId},${item.snippet.title}`} >
    <VideoCard
      key={item.snippet.resourceId.videoId}
      videoId={item.snippet.resourceId.videoId}
      channel={item.snippet.channelTitle}
      title={item.snippet.title}
      views={Math.round(Math.random() * 100) + 'K'}
      channelImage='https://yt3.ggpht.com/ytc/AAUvwniLl7OesYjCTfZ-9psJroLEQmDFH0oXOIP81Q_ZeA=s88-c-k-c0x00ffffff-no-rj'
      timestamp={timeago.format(item.snippet.publishedAt).replace(".", "")}
      image={item?.snippet?.thumbnails.high.url}
    />
    </Link>
  ))
  // console.log("THumbnal>>>>", videos[0]?.snippet.thumbnails.high.url)

  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>

        {display}

        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Cute puppy :)"
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/u/21147250?s=460&u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4' />

        <VideoCard
          image='https://m.media-amazon.com/images/M/MV5BMTc4NTQ3MDc3Nl5BMl5BanBnXkFtZTgwNDM4Mjg0MzI@._V1_CR0,59,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
          title="Welcome to the Jungle "
          channel="Syed Mehdi"
          timestamp='7 months ago'
          views='1.7M Views'
          channelImage='https://avatars1.githubusercontent.com/u/21147250?s=460&u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4' />

      </div>


    </div>
  )
}

export default RecommendedVideos
