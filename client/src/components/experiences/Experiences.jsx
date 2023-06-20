import { useEffect, useState } from 'react'
import axios from 'axios'
import Experience from '../experienceCard/ExperienceCard'
import "./experiences.css"


const Experiences = () => {

const [experiences, setExperiences] = useState([])



useEffect(()=> {

    axios
        .get('./experiences.json')
        .then((res) => setExperiences(res.data))
        .catch(err => console.log(err))
        
},[])

  return (
    <section className='experiences' id='experiences'>
    <h4>Experience</h4>
            <div className="experience_cards">
                {experiences && experiences.map((experience)=>(
                    <Experience key={experience.id} experience = {experience} />
                ))}
            </div>
            <div className="resume_file"><img className='resume_arrow' src="/arrow.png"/><a href="./Martin-NOEL.pdf" download="Resume of Martin NOEL">Full resume available here</a></div>
    </section>
  )
}

export default Experiences