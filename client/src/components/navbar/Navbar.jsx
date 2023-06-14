import React from 'react'
import './navbar.css'
import Profile from '../profile/Profile'
import Socials from '../socials/Socials'


const Navbar = ({activeSection, setActiveSection}) => {
  return (

    <div className='navbar'>
      <div className="header">
        <Profile />
          <ul className='navlist'>
              <a onClick={()=>setActiveSection('about')} href='#about' className={activeSection === 'about' ? 'navline active' : 'navline'}>
                <div className='line'></div>
                <li>A PROPOS</li>
              </a>
              <a onClick={()=>setActiveSection('experiences')} href='#experiences' className={activeSection === 'experiences' ? 'navline active' : 'navline'}>
                <div className='line'></div>
                <li>EXPERIENCE</li>
              </a>
              <a onClick={()=>setActiveSection('projects')} href='#projects' className={activeSection === 'projects' ? 'navline active' : 'navline'}>
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