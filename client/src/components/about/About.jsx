import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about' id='about'>
      <h4 id='about-title'>A propos</h4>
        <p>After <span className="text_enlighted">10 years of experience</span> in systems administration, networks, and databases, I decided to embark on the adventure of web development. This <span className="text_enlighted">versatility</span>, combined to my <span className="text_enlighted">problem-solving ability</span>, allows me to <span className="text_enlighted">approach projects with a global view</span>, taking into account aspects related to performance, maintenance, and security.</p>
        <br />
        <p>To date, I have participated in the realization of <span className="text_enlighted">several ambitious projects</span>. One of them is <span className="text_enlighted">Apollo, an interactive 3D planetarium</span> that enables users to explore and discover the solar system. Another project is <span className="text_enlighted">Luggage-Maker</span>, a game based on the theme of vacations, developed within a <span className="text_enlighted">limited time frame of 48 hours</span>.</p>
        <br />
        <p>In my free time, when I'm not at the computer, I regularly <span className="text_enlighted">enjoy engaging in activities</span> such as mountain biking or playing golf. These outdoor pursuits allow me to <span className="text_enlighted"> stay active, explore nature, and challenge myself</span> physically while pursuing my interests in the digital realm.
        </p>
    </section>
  )
}

export default About