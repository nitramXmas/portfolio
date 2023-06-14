import React from 'react'
import './projectCard.css'
import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {

  return (
    <Link state={project}style={{ color: 'inherit', textDecoration: 'inherit'}}  to={`/projects/${project.id}`}>
      <div className='project_container'>
        <div className='project_picture' style={{backgroundImage: `url(${project.image})`}}></div>
        <div className='project_content'>
          <div className="project_header">
            <div className="project_firstline">
              <h1>{project.subtitle}</h1>
              <div className="project_status">
                {project.status === 'Terminé' ? <p> {project.status}      ✅</p> : null}
                {project.status === 'En-cours' ? <p> {project.status}     🚀</p> : null}
              </div>
            </div>
            <div className="project_text">{project.text}</div>
          </div>
          <div className="project_techs">
            {project.tech.map((tech,index) =>
              <div key={index} className='project_tech'>{tech}</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard