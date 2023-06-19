import About from '../about/About.jsx'
import Experiences from '../experiences/Experiences.jsx'
import Projects from '../projects/Projects.jsx'
import './content.css'

const Content = () => {

  return (
    <div className='content'>
      <About  />
      <Experiences />
      <Projects />
    </div>
  )
}

export default Content