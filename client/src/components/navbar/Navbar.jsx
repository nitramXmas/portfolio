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
              <li>A propos</li>
              <li>Experience</li>
              <li>Projects</li>
          </ul>
      </div>
        <Socials />
    </div>
  )
}

export default Navbar