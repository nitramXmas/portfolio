import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Main from './pages/Main.jsx'
import './App.css'

function App() {

  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className='app'>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Main activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default App 
