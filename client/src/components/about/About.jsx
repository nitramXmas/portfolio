import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section className='about' id='about'>
      <h4 id='about-title'>A propos</h4>
        <p>After <span className="text_enlighted">10 years of experience in systems administration, networks, and databases</span>, I decided to embark on the adventure of web development. I was fortunate enough to join the <span className="text_enlighted">Wild Code School</span> and its "Web and Mobile Developer" program, focused on <span className="text_enlighted">learning React, Express.js, and MySQL</span>.</p>
        <br />
        <p>To date, I have participated in the realization of <span className="text_enlighted">several ambitious projects</span>. One of them is <span className="text_enlighted">Apollo, an interactive 3D planetarium</span> that enables users to explore and discover the solar system. Another project is <span className="text_enlighted">Luggage-Maker</span>, a game based on the theme of vacations, developed within a <span className="text_enlighted">limited time frame of 48 hours</span>.</p>
        <br />
        <p>In my free time, when I'm not at the computer, I regularly <span className="text_enlighted">enjoy engaging in activities</span> such as mountain biking or playing golf. These outdoor pursuits allow me to <span className="text_enlighted"> stay active, explore nature, and challenge myself</span> physically while pursuing my interests in the digital realm.
        </p>
    </section>
  )
}

export default About