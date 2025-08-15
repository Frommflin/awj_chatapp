import React from 'react'
import './login.sass'

const Login = () => {
  return (
    <form id='login'> 
        <h1>Sign in</h1>
        <div className="input-group mb-3">
            <span id='username' className="input-group-text">Username</span>
            <input type="text" placeholder="Username"  className="form-control" aria-label="Username" aria-describedby="username" />
        </div>
        <div className="input-group mb-3">
            <span id='password' className="input-group-text">Password</span>
            <input type="password" placeholder="Password"  className="form-control" aria-label="Password" aria-describedby="password" />
        </div>
        <button type='submit' className='btn btn-outline-success'>Sign in</button>
    </form>
  )
}

export default Login