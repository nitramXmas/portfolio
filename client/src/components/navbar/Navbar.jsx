import React from 'react'
import './navbar.css'
import Profile from '../profile/Profile'
import Socials from '../socials/Socials'
import { HashLink } from 'react-router-hash-link';


const Navbar = ({activeSection, setActiveSection}) => {
  return (

    <div className='navbar'>
      <div className="header">
        <Profile />
          <ul className='navlist'>

              <HashLink onClick={()=>setActiveSection('about')} className={activeSection === 'about' ? 'navline active' : 'navline'} smooth to="/#about"><div className='line'></div><li>ABOUT</li></HashLink>
              <HashLink onClick={()=>setActiveSection('experiences')} className={activeSection === 'experiences' ? 'navline active' : 'navline'} smooth to="/#experiences"><div className='line'></div><li>EXPERIENCES</li></HashLink>
              <HashLink onClick={()=>setActiveSection('projects')} className={activeSection === 'projects' ? 'navline active' : 'navline'} smooth to="/#projects"><div className='line'></div><li>PROJECTS</li></HashLink>
              
          </ul>
      </div>
        <Socials />
    </div>
  )
}

export default Navbar