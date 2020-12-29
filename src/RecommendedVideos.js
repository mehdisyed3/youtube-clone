import React, { useEffect, useState } from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'


function RecommendedVideos() {
  const [videos, setVideos] = useState([])
  
  useEffect(()=>{

  const pullVideos= async function(){
    
   await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=25&playlistId=PLub7sJmces1R7hB_EyLoJBl1sMX6Mre-J&key=AIzaSyCqMyROln9xn38eQ7eVpnhrMXc6uhgPbos')
    .then(res=> res.json())
    .then(data => setVideos(data.items))    
}
  pullVideos()
  },[])

  const display = videos.map(item => (
  <VideoCard 
  key={item.id}
  channel={item.snippet.channelTitle}
  title={item.snippet.title}
  timestamp={item.snippet.publishedAt}
  image={item?.snippet?.thumbnails.high.url} 
  />
                                      ))
                                      
    console.log('AAAA',videos[0]?.snippet.thumbnails.high.url)

  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>
        {display}
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/
        u/21147250?s=460&
        u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
        />
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/u/21147250?s=460&u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4' />
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/u/21147250?s=460&u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4' />
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/u/21147250?s=460&u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4' />
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/u/21147250?s=460&u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4' />

<VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/
        u/21147250?s=460&
        u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
        />
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/
        u/21147250?s=460&
        u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
        />
        <VideoCard
          image='https://picsum.photos/id/237/200'
          title="Welcome to the "
          channel="Syed Mehdi"
          timestamp='3 days ago'
          views='2.3M Views'
          channelImage='https://avatars1.githubusercontent.com/
        u/21147250?s=460&
        u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
        />
      </div>


    </div>
  )
}

export default RecommendedVideos
