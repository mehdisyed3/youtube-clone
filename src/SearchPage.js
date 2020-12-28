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
      image='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
      channel="Ciyad Mehdee"
      verified
      subs="110K"
      noOfVideos={786}
      description="Life of a developer, looking for a employment" 
      />
    </div>
  )
}

export default SearchPage
