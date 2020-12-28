import React from 'react'
import './SearchPage.css'
import TunedOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
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

      <VideoRow
        views ='999'
        subs = '110K'
        description = "Day 1 of applying jobs on Linkedin"
        channel="Ciyad Mehdee"
        timestamp= '2 weeks ago'
        title = "Let do this!"
        image='https://www.lifewire.com/thmb/m3dthzZpWu--jE6K1wclLehprC4=/775x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-linkedin-3486382-0c224dfb74884776bee7b53d390348bc.png'
      />
    </div>
  )
}

export default SearchPage
