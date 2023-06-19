import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

import "./projectDetails.css"

const ProjectDetails = () => {

const {id} = useParams()
 
 const [projectDetails, setProjectDetails ] = useState([])
 
  useEffect(()=> {

      axios
          .get('/projects.json')
          .then((res) => setProjectDetails(res.data))
          .catch(err => console.log(err))
          
  },[])


  return (
    <>

<Link to="/"> <img className='return_arrow' src="/arrow.png"/></Link>

{projectDetails && 
projectDetails
.filter((project) => project.id === parseInt(id))
.map((project) => (
  <div className='details_container' key={project.id}>
    <div className="details_title">
      <h1>{project.title}</h1>
      <div className="horiz_line"></div>
      <h2>{project.subtitle}</h2>
    </div>
    <div className='details_body'>
      <div className="details_left">
        <div className='details_image' style={{backgroundImage: `url(${project.image})`}}></div>
      </div>
      <div className="details_right">
      <p className="details_text">{project.text}</p>
      <div className='details_techs'>
        {project.tech && project.tech.map((el, index) =>
          <div key={index} className="details_tech">{el}</div>)
        }
      </div>
      <div className='details_links'>
        {project.link ? <a href={project.link}><img src="/click.png" /><h3>Live Demo</h3></a> : null }
        <a href={project.gitLink}><img src="/github.svg" /> <h3>Github</h3></a>
      </div>
      </div>
    </div>
  </div>
))}
     
  </>
  )
}

export default ProjectDetails