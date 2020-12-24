import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'
function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className='recommendedVideos__videos'>

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

      </div>


    </div>
  )
}

export default RecommendedVideos
