import About from '../about/About.jsx'
import Experiences from '../experiences/Experiences.jsx'
import Projects from '../projects/Projects.jsx'
import './content.css'


const Content = ({activeSection, setActiveSection}) => {

  return (
    <div className='content'>
      <About activeSection={activeSection} setActiveSection={setActiveSection}   />
      <Experiences activeSection={activeSection} setActiveSection={setActiveSection} />
      <Projects activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default Content