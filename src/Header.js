import React, { useState } from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Header() {
  const [inputSearch, setInputSearch] = useState('')
  // console.log(inputSearch)

  // var logo='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
  var currentLogo = 'https://www.vippng.com/png/detail/85-853653_patreon-logo-png-transparent-background-youtube-logo.png'

  const searchPhrase = inputSearch?.replace(" ", "+")
  return (
    <div className='header'>

      <div className='header__left'>
        <MenuIcon />
        <Link to='/'>
          <img className="header__logo" src={currentLogo} alt='' />
        </Link>
      </div>

      <div className='header__input'>
        <input type='text' placeholder='Search' value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
        <Link to={`/search/${searchPhrase}`} >
          <SearchIcon className='header__inputButton' />
        </Link>
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
