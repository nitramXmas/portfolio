import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Content from '../components/content/Content'

import { useState } from 'react'

const Main = () => {

  const [activeSection, setActiveSection] = useState('about')


  return (
    <div className='main' >
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Content on activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default Main