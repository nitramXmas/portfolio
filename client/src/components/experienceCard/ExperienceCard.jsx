import React from 'react'
import './experienceCard.css'

const Experience = ({experience}) => {

  return (
    <div className="card_container">
      <div className="card_duration">{experience.duration}</div>
        <div className="card_content">
            <div className="card_header">
              <div className="card_title">
                <h4>{experience.title}</h4>
                <p>{experience.place}</p>
              </div>
            </div>
            <p>{experience.text}</p>
            <div className="exp_techs">
                {experience.tech && experience.tech.map((tech, index)=>(
                  <div key={index} className="exp_tech">{tech}</div>
                  ))}
        </div>
      </div>
    </div>
  )
}

export default Experience