import React from 'react'

const Experience = ({experience}) => {

  return (
    <div className="expCard">
        <div className="techInfos">
            <h4>{experience.title}</h4>
            <p>A : {experience.place}</p>
            <p>{experience.text}</p>
        </div>
        <div className="techs">
            {experience.tech && experience.tech.map((tech)=>(
                <div className="tech">{tech}</div>
            ))}
        </div>
        <p>{experience.duration}</p>
    </div>
  )
}

export default Experience