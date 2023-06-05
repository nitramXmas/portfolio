import Navbar from './components/Navbar'
import Core from './pages/Core'
import Profile from './components/Profile'
import './App.css'

function App() {


  return (
    <div className='main'>
        <Profile />
        <Navbar />
        <Core />
    </div>
  )
}

export default App
