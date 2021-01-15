import React, { useEffect, useState } from 'react'
import './SearchPage.css'
import TunedOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'
import { useParams } from "react-router"
import * as timeago from 'timeago.js'
import { Link } from 'react-router-dom'


function SearchPage() {
  const [res, setRes] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')
  let { searchTerm } = useParams()

  useEffect(() => {

    setSearchPhrase(searchTerm)

    const fetchSearch = async function () {

      await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=AIzaSyCqMyROln9xn38eQ7eVpnhrMXc6uhgPbos&type=video&q=${searchPhrase}`)
        .then(response => response.json())
        .then(data => setRes(data.items))
    }
    fetchSearch()
  }, [searchTerm, searchPhrase])
  console.log(">>>>", searchTerm)


  const videoSearched = res.map(item => (
    <Link style={{ textDecoration: 'none' }} key={item.id.videoId} to={`/videostream/${item.id.videoId},${item.snippet.title}`} >
      <VideoRow
        key={item.id.videoId}
        views={Math.round(Math.random() * 100) + 'K'}
        subs={Math.round(Math.random() * 100) + 'K'}
        description={item.snippet.description}
        channel={item.snippet.channelTitle}
        timestamp={timeago.format(item.snippet.publishedAt)}
        title={item.snippet.title}
        image={item?.snippet?.thumbnails.high.url}
        videoId={item.id.videoId}
      />
    </Link>
  ))
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TunedOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image='https://avatars1.githubusercontent.com/u/21147250?s=400&
      u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
        channel="Ciyad Mehdee"
        verified
        subs="110K"
        noOfVideos={786}
        description="Life of a developer who is looking for a employment"
      />
      <hr />
      <div className='searchPage__result'>
        {videoSearched}
      </div>
    </div>
  )
}

export default SearchPage
