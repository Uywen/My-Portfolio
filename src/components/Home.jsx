import React from 'react'
import image from "../img/me.jpg"
import "../App.css"


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"

export const Home = () => {
  return (
    <div className='home'>
    <div className='my-image'>
      <div className='name'>
        <h1 className='my-name'>Uywen Africa</h1>
        <div>
        <p className='info-me'>Full Stack Web Developer</p>
        <p className='info-me'>Mern Stack</p>
        </div>
      </div>
        <img className='image' src={image} alt='me'></img>
    </div>
    <div className='contact-me'>
    <FontAwesomeIcon icon={faLocationDot} style={{color: "#ffffff",}} />  <> Cape Town, South Africa</>
    <br>
    </br>
    <br>
    </br>
    <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} /> 
     <> Uywenafrica27@gmail.com</>
    <br>
    </br>
    <br>
    </br>
    <FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /> <a href='https://github.com/Uywen' target='_blank'>Github</a>
    </div>
    </div>
  )
}
