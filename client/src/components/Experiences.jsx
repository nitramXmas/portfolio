import { useEffect, useState } from 'react'
import axios from 'axios'
import Experience from './Experience'
import './experiences.css'


const Experiences = () => {

const [experiences, setExperiences] = useState([])

useEffect(()=> {

    axios
        .get('./experiences.json')
        .then((res) => setExperiences(res.data))
        .catch(err => console.log(err))
        
},[])

  return (
    <>
    <h4>Experience</h4>
    <div className='experiences'>
        <div className="timeline">
            <div className='line'></div>
            <div className="expCards">
                {experiences && experiences.map((experience)=>(
                    <Experience key={experience.id} experience = {experience} />
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Experiences