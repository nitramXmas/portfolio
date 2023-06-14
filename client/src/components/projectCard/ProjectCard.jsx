import React from 'react'
import './projectCard.css'

const ProjectCard = ({project}) => {


  return (
    <div className='project_container'>
      {project.link ? <a href={project.link} className='project_picture' style={{backgroundImage: `url(${project.image})`}}>
      </a> : <div className='project_picture' style={{backgroundImage: `url(${project.image})`}}></div> }
      <div className='project_content'>
        <div className="project_header">
          <div className="project_firstline">
            <h1>{project.title}</h1>
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
  )
}

export default ProjectCard