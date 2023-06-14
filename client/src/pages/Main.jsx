import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Content from '../components/content/Content'

import { useState } from 'react'

const Main = () => {

  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className='main' >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content />
    </div>
  )
}

export default Main