import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu" 
import SearchIcon from "@material-ui/icons/Search" 
import VideoCallIcon from "@material-ui/icons/VideoCall" 
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  return (
    <div className='header'>
      <MenuIcon />
      <img className="header__logo" src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='' />
      <input type='text' />
      <SearchIcon />
      <VideoCallIcon />
      <AppsIcon />
      <NotificationsIcon />
      <Avatar 
        alt=''
        src='https://avatars1.githubusercontent.com/u/21147250?s=400&
              u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
      />


    </div>
  )
}

export default Header
