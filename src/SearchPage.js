import React from 'react'
import './SearchPage.css'
import TunedOutlinedIcon from '@material-ui/icons/TuneOutlined'

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TunedOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
    </div>
  )
}

export default SearchPage
