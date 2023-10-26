import React from 'react'
import searchicon from './images/search.svg'
import bell from './images/bell.svg'
import headerplaceholderimage from './images/Ellipse 314.svg'
import hamburgericon from './images/hamburger-menu.svg'
import chaticon from './images/Header-Chat-Icon.svg'
import cogicon from './images/Header-Cog-Icon.svg'
import gifticon from './images/Header-Gift-Icon.svg'


const Header = ({setShowSideNav, showSideNav}) => {
  return (
    <div className='header'>

      <div className='header-search-div'>
        <div className='listing-search-div'>
          <input placeholder='Search here' className='listing-search-input'></input>
          <button className='listing-search-icon-button'>
            <img src={searchicon} alt='Search Icon' className='listing-search-icon'></img>
          </button>
        </div>
      </div>

      <div className='header-notification-div'>
        <div className="notification-icon">
          <img src={bell} alt='Bell Icon' className='header-bell-icon'></img>
          <span className="notification-count">2</span>
        </div>

        <div className="notification-icon">
          <img src={chaticon} alt='Chat Icon' className='header-chat-icon'></img>
          <span className="notification-count">2</span>
        </div>

        <div className="notification-icon header-gift-icon-div">
          <img src={gifticon} alt='Gift Icon' className='header-gift-icon'></img>
          <span className="notification-count">2</span>
        </div>

        <div className="notification-icon header-cog-icon-div">
          <img src={cogicon} alt='Cog Icon' className='header-cog-icon'></img>
          <span className="notification-count">2</span>
        </div>
      </div>

      <div className='header-admin-div'>
        <div className="notification-icon">
          <img src={bell} alt='Bell Icon' className='header-bell-icon'></img>
        </div>
        <span className='header-admin'>Admin</span>
      </div>

      <div>
        <span className='header-greeting'>Hello, <span className='header-greeting-name-span'>Hilary</span></span>
        <img src={headerplaceholderimage} alt='User' className='header-user-image'></img>
      </div>

      <button className='header-menu-hamburger-icon-button' onClick={() => setShowSideNav(!showSideNav)}>
        <img src={hamburgericon} alt='Menu Hamburger Icon' className='header-menu-hamburger-icon'></img>
      </button>

    </div>
  )
}

export default Header