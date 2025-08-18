import React from 'react'
import classes from './sidenav.module.sass'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (<>
    <nav id={classes.sidenav}>
      <h1>ChityChaty</h1>
      <ul>
        <li><NavLink to='/signin'>Sign In</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </nav>
  </>
  )
}

export default SideNav