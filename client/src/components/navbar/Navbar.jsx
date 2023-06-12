import React from 'react'
import './navbar.css'
import Profile from '../profile/Profile'
import Socials from '../socials/Socials'


const Navbar = () => {
  return (

    <div className='navbar'>
      <div className="header">
        <Profile />
          <ul className='navlist'>
              <a href='#about' className='navline'>
                <div className='line'></div>
                <li>A PROPOS</li>
              </a>
              <a href='#experiences' className="navline">
                <div className='line'></div>
                <li>EXPERIENCE</li>
              </a>
              <a href='#projects' className="navline">
                <div className='line'></div>
                <li>PROJECT</li>
              </a>
          </ul>
      </div>
        <Socials />
    </div>
  )
}

export default Navbar