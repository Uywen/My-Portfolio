import React from 'react'
import "../App.css"

import expresslogo from "../img/icons8-express-js-50.png"
import nextjslogo from "../img/icons8-nextjs-48.png"

import {faSquareJs} from "@fortawesome/free-brands-svg-icons"
import {faReact} from "@fortawesome/free-brands-svg-icons"
import {faDatabase} from "@fortawesome/free-solid-svg-icons"
import {faNode} from "@fortawesome/free-brands-svg-icons"
import {faGitAlt} from "@fortawesome/free-brands-svg-icons"
import {faHtml5} from "@fortawesome/free-brands-svg-icons"
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { Tooltip } from '@mui/material'


export const TechStack = () => {
  return (
    <div className='techStack'>
        <h1 className='techStack-heading'>Tech Stack</h1>
        <div className='tech-stack-labels'>
          <Tooltip  title="Javascript" placement='top-start'>
                <FontAwesomeIcon size='3x' icon={faSquareJs}  style={{color: "#f5ed00"}} />
                </Tooltip>

                <Tooltip title="React" placement='top-start'>
                <FontAwesomeIcon size="3x" icon={faReact}  style={{color: "#0054e6"}} />
                </Tooltip>

                <Tooltip title="MongoDb" placement='top-start'>
                <FontAwesomeIcon size="3x" icon={faDatabase}  style={{color: "#259d15"}} />
                </Tooltip>

                <Tooltip title="Node JS" placement='top-start'>
                <FontAwesomeIcon size="3x" icon={faNode}  style={{color: "#234ac7"}} />
                </Tooltip>
                
                <Tooltip title="Git" placement='top-start'>
                <FontAwesomeIcon size="3x" icon={faGitAlt}  style={{color: "#b60c0c"}} />
                </Tooltip>

                <Tooltip title="Html" placement='top-start'>
                <FontAwesomeIcon size="3x" icon={faHtml5}  style={{color: "#fa6400"}} />
                </Tooltip>

                <Tooltip title="CSS" placement='top-start'>
                <FontAwesomeIcon size="3x" icon={faCss3Alt}  style={{color: "#1c5ac4"}} />
                </Tooltip>

                <Tooltip title="Express" placement='top-start'>
                <img className='logos' src={expresslogo} alt='express'></img>
                </Tooltip>

                <Tooltip title="Next js" placement='top-start'>
                <img className='logos' src={nextjslogo} alt="nextjs"></img>
                </Tooltip>
        </div>
    </div>
    
  )
}
