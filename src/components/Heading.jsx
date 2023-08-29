import React from 'react'
import './Heading.css'
import {NavLink} from "react-router-dom"

export const Heading = () => {
  return (
    <div >
        <nav className='nav' >
            <NavLink to='/' className="title-heading">UywenDev</NavLink>
            <ul>  
            <NavLink to="/projects">Projects</NavLink> 
            <NavLink to='/about'>About Me</NavLink>
            </ul>
        </nav>
    </div>
  )
}
