import React, { useContext } from 'react'
import classes from './sidenav.module.sass'
import { NavLink } from 'react-router-dom'
import { ChatContext } from '../context/ChatContextProvider'

const SideNav = () => {
  const {isAuthenticated,logOut} = useContext(ChatContext)
  return (<>
    <nav id={classes.sidenav}>
      <h1>ChityChaty</h1>
      <ul>
        {isAuthenticated ? (
          <li><a href="#" onClick={logOut}>Sign out</a></li>
        ) : (
          <div>
            <li><NavLink to='/signin'>Sign In</NavLink></li>
            <li><NavLink to='/register'>Register</NavLink></li>
          </div>
        )}
        
      </ul>
    </nav>
  </>
  )
}

export default SideNav