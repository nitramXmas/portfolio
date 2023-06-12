import About from '../components/about/About.jsx'
import Experiences from '../components/experiences/Experiences.jsx'
import Projects from '../components/projects/Projects'
import './main.css'

const Main = (prps) => {

  return (
    <div className='main'>
      <About />
      <Experiences />
      <Projects />
    </div>
  )
}

export default Main