import React from 'react'
import classes from './sidenav.module.sass'

const SideNav = () => {
  return (<>
    <nav id={classes.sidenav}>
      <h1>ChityChaty</h1>
      <ul>
        <li>Sign In</li>
        <li>Register</li>
      </ul>
    </nav>
  </>
  )
}

export default SideNav