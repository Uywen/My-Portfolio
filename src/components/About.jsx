import React from 'react'
import '../App.css'

import Container from 'react-bootstrap/Container'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLink} from "@fortawesome/free-solid-svg-icons"


export const About = () => {
return (
<>
<div  className='education'>
  <Container>
    <h1 className='typewriter'>About me</h1>
    <p className='education-paragraph' >Im a Full Stack Web Developer,working with "MERN" stack.I always loved working with
      computers and had a strong love for scrolling on websites.So I decided to join Hyperion Dev because I
      did not want to be anything else.Unfortunately I did not have the subjects in high school to become one
      and I decided to join a Bootcamp to chase my Dream Career as a web developer.Im an introvert and extrovert
      and Im a foodie.I also love problem-solving.
    </p>
    </Container>
  </div>
  <div className='education'>
    <Container>
    <h1 className='typewriter'>Education</h1>
    <p className='education-paragraph'>
      I completed highschool in 2021 at Cravenby Combined School.
      Ater a few months I decided to learn how to code because I was
      not really interested in the degree that i was initially going to
      study for.I then fell inlove with writing code and found out I can
      create websites using code so I registered myself at <a href='https://www.hyperiondev.com/ ' target='_blank'>HyperionDev
      </a>'s
      Full Stack Web Developer Bootcamp.I then completed the bootcamp in february 2022 which i started on the 23 October 2021.
      <br>
      </br>
      <br>
      </br>
      <FontAwesomeIcon  icon={faLink} style={{color: "#ffffff",}} />  <a href='https://www.hyperiondev.com/portfolio/99011/' target='_blank'>HyperionDev portfolio</a>
      <br></br>
      <br></br>
      <FontAwesomeIcon  icon={faLink} style={{color: "#ffffff",}} />  <a href='https://www.dropbox.com/scl/fi/86u9v5rusx4iv94d9yr1c/Uywen-Africa-Full-Stack-Web-Developer-Bootcamp.pdf?rlkey=uitd95t8l5q6o3crmymlfg3c8&dl=0' target='_blank'>HyperionDev Certificate</a>
    </p>
    </Container>
  </div>
  
</>
)
}