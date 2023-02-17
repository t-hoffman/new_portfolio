import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar = () => {
  const classNameFunc = ({ isActive }) => (isActive ? 'nav-link-active' : '')
  const navItems = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/aboutme',
      title: 'About Me',
    },
    {
      path: '/skills',
      title: 'Skills',
    },
    {
      path: '/projects',
      title: 'Portfolio',
    },
    {
      path: '/contactme',
      title: 'Contact',
    },
  ]

  return (
    <div className="nav-bar">
      <h1 style={{marginBottom:'50px'}}>TYLER&nbsp;</h1>
      {
        navItems.map((nav, idx) => (
          <div className="nav-link" key={idx}>
            <NavLink to={nav.path} className={classNameFunc}>{nav.title}</NavLink>
          </div>
        ))
      }
      <div className="nav-link">
        <a href="/Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </div>
    </div>
  )
}

export default NavBar
