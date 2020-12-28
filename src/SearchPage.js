import React from 'react'
import './SearchPage.css'
import TunedOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TunedOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
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
    </div>
  )
}

export default SearchPage
