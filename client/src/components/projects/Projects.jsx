import { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '../projectCard/ProjectCard'


const Projects = () => {

  const [projects, setProjects ] = useState([])

useEffect(()=> {

    axios
        .get('./projects.json')
        .then((res) => setProjects(res.data))
        .catch(err => console.log(err))
        
},[])

  return (
    <section id='projects'>
    <h4>Projects</h4>
    <div className='project_cards'>

      {projects && projects.map((project)=>(
          <ProjectCard key={project.id} project = {project} />
      ))}

    </div>
    </section>
  )
}

export default Projects