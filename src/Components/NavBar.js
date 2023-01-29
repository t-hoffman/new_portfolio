import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
  const classNameFunc = ({ isActive }) => (isActive ? 'nav-link-active' : '')

  return (
    <div className="nav-bar">
      <h1>TYLER&nbsp;</h1>
      <div className="nav-link" style={{marginTop:'50px'}}>
        <NavLink to="/" className={classNameFunc}>Home</NavLink></div>
      <div className="nav-link">
        <NavLink to="/aboutme" className={classNameFunc}>About me</NavLink></div>
      <div className="nav-link">
        <NavLink to="/skills" className={classNameFunc}>Skills</NavLink></div>
      <div className="nav-link">
        <NavLink to="/projects" className={classNameFunc}>Portfolio</NavLink></div>
      <div className="nav-link">
        <NavLink to="/contactme" className={classNameFunc}>Contact</NavLink></div>
    </div>
  )
}

export default NavBar
