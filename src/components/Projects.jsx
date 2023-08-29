import React from 'react'

import "../App.css"





import { Tooltip } from '@mui/material'


import Hangman from '../img/Hangman.PNG'
import Chromeextension from '../img/Chrome extension.PNG'
import CarInventory from '../img/Car inventory.PNG'
import CarList from '../img/Carlistaapp.PNG'
import AnimalCart from '../img/AnimalCart.PNG'
import BlackJack from '../img/BlackJack.PNG'
import MovieApp from '../img/MovieApp.PNG'
import NewsApp from '../img/NewsApp.PNG'
import WeatherApp from '../img/Weather App.PNG'

import expresslogo from "../img/icons8-express-js-50.png"
import nextjslogo from "../img/icons8-nextjs-48.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquareJs} from "@fortawesome/free-brands-svg-icons"
import {faGlobe} from "@fortawesome/free-solid-svg-icons"
import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase} from "@fortawesome/free-solid-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"



export const Projects = () => {
  return (
    <>
    <h2 className='my-projects-heading'>My Projects</h2>
    <div className='project-section'>
    <div className='card-container'>
    <div className="image-container">
      <img src={Chromeextension}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Chrome Extension</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>
        Tech Stack : 
        <Tooltip title="Javascript">
        <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
        </Tooltip>
        <Tooltip title="Html">
        <FontAwesomeIcon size="1x" icon={faHtml5}  style={{color: "#fa6400"}} />
        </Tooltip>
        <Tooltip title="Css">
        <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
        </Tooltip>
        </p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/Chrome-Leads-extension' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Offline">
    <FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} />
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={CarInventory}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Car Inventory</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>
        Tech Stack : 
        <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
                <FontAwesomeIcon size="1x" icon={faReact}  style={{color: "#0054e6"}} />
                <FontAwesomeIcon size="1x" icon={faDatabase}  style={{color: "#259d15"}} />
                <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
                
                </p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/Car-inventory' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Offline">
    <FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} />
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={CarList}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Car List</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack :  
          <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
        <FontAwesomeIcon size="1x" icon={faReact}  style={{color: "#0054e6"}} />
        <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
        <img className='logos-projects' src={expresslogo} alt='express'></img>
        </p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/Car-List-Crud-App' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Offline">
    <FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} />
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={AnimalCart}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Animal Cart</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack :  
           <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
        <FontAwesomeIcon size="1x" icon={faReact}  style={{color: "#0054e6"}} />
        <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} /></p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/My-Animal-World' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Online">
    <a href='https://my-animal-world.vercel.app/' target='_blank'><FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} /></a>
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={BlackJack}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Black Jack</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack :  
           <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
        <FontAwesomeIcon size="1x" icon={faHtml5}  style={{color: "#fa6400"}} />
        <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
        </p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/BlackJack' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Online">
    <a href='https://black-jack-uywen.netlify.app' target='_blank'><FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} /></a>
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={MovieApp}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Movie Search App</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack :  
          <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
        <FontAwesomeIcon size="1x" icon={faReact}  style={{color: "#0054e6"}} />
        <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} /></p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/Movie-Search-App' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Offline">
    <FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} />
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={NewsApp}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>News App</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack : 
        <img className='logos-projects' src={nextjslogo} alt='express'></img>
      <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
      <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
      </p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/News-app' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Offline">
    <FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} />
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={WeatherApp}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>WeatherApp</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack :  
           <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
        <FontAwesomeIcon size="1x" icon={faReact}  style={{color: "#0054e6"}} />
        <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} /></p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/Weather-App-Reactjs' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Online">
    <a href='https://uywenweatherapp.netlify.app' target='_blank'><FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} /></a>
    </Tooltip>
    </div>
    </div>
    </div>

    <div className='card-container'>
    <div className="image-container">
      <img src={Hangman}></img>
    </div>
    <div className='card-content'>
 <div className='card-title'>
      <h3>Hangman</h3>
    </div>
    <div className='card-body'>
      <p style={{color:"white"}}>Tech Stack : 
         <FontAwesomeIcon size='1x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
      <FontAwesomeIcon size="1x" icon={faReact}  style={{color: "#0054e6"}} />
      <FontAwesomeIcon size="1x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
      </p>
    </div>
    <div className='links'>
    <a href='https://github.com/Uywen/hangman-app' target='_blank'><FontAwesomeIcon icon={faGithub} style={{color: "#ffffff",}} /></a>
    <Tooltip title="Online">
    <a href='https://hangman-app-one.vercel.app/' target='_blank'><FontAwesomeIcon icon={faGlobe} style={{color: "#00bfff",marginLeft:"3px"}} /></a>
    </Tooltip>
    </div>
    </div>
    </div>
    </div>

      
    </>
  )
}
