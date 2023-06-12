import { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectCard from '../projectCard/ProjectCard'
import './projects.css'

const Projects = () => {

  const [projects, setProjects ] = useState([])

useEffect(()=> {

    axios
        .get('./projects.json')
        .then((res) => setProjects(res.data))
        .catch(err => console.log(err))
        
},[])

  return (
    <>
    <h4>Projects</h4>
    <div className='projects'>

      {projects && projects.map((project)=>(
          <ProjectCard key={project.id} project = {project} />
      ))}

    </div>
    </>
  )
}

export default Projects