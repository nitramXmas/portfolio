import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import About from './../components/About'
import './core.css'

const Core = () => {
  return (
    <div className='container'>
        <About />
        <Experiences />
        <Projects />
    </div>
  )
}

export default Core