import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

function Header() {
  const [searcj, setSearch] = useState('')
  return (
    <div className='header'>

      <div className='header__left'>
        <MenuIcon />
        <img className="header__logo" src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='' />
      </div>

      <div className='header__input'>
        <input type='text' placeholder='Search' />
        <SearchIcon className='header__inputButton' />
      </div>

      <div className="header__icons">
        <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar
          alt=''
          src='https://avatars1.githubusercontent.com/u/21147250?s=400&
              u=2e46b2ce19e4bcb38b64392b265d960f77cbc43a&v=4'
        />
      </div>

    </div>
  )
}

export default Header
