import React from 'react'

const ProjectCard = ({project}) => {


  return (
    <div className='projCard'>
      {/* <img src={project.image} alt="" /> */}
      <div className="infos">
          <h1>{project.title}</h1>
        <div className="subtitle">
          {project.type}
          {project.status === 'Terminé' ? <p> {project.status}  -  ✅</p> : null}
          {project.status === 'En-cours' ? <p> {project.status} - 🚀</p> : null}
        </div>
        
        

        {project.tech.map((tech,index) => 
        
          <div key={index} className='projectTech'>{tech}</div>

        )}
      </div>
      

    </div>
  )
}

export default ProjectCard