import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProjectDetails = () => {

 const { state } = useLocation();
 const {image, status, type, title, subtitle, link, gitLink} = state


// const [projectDetails, setProjectDetails ] = useState([])

//   useEffect(()=> {

//       axios
//           .get('./projects.json')
//           .then((res) => setProjectDetails(res.data))
//           .catch(err => console.log(err))
          
//   },[])


  return (
    <>
      {/* <div style={{backgroundImage: `url(${image})`}}></div> */}
      <div>{title}</div>
  </>
  )
}

export default ProjectDetails