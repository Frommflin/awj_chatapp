import React from 'react'
import './register.sass'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const handleRegistration = (e) => {
    e.preventDefault()

    navigate('/signin')
  }

  return (
    <form id='register' onSubmit={handleRegistration}> 
        <h1>Register account</h1>
        <div className="input-group mb-3">
            <span id='username' className="input-group-text">Username</span>
            <input 
              type="text" 
              placeholder="Username" 
              className="form-control" 
              aria-label="Username" 
              aria-describedby="username" 
            />
        </div>
        <div className="input-group mb-3">
            <span id='password' className="input-group-text">Password</span>
            <input 
              type="password" 
              placeholder="Password" 
              className="form-control" 
              aria-label="Password" 
              aria-describedby="password" 
            />
        </div>
        <div className="input-group mb-3">
            <span id='email' className="input-group-text">E-mail</span>
            <input 
              type="email" 
              placeholder="example@example.com" 
              className="form-control" 
              aria-label="Email" 
              aria-describedby="email" 
            />
        </div>
        <div className="input-group mb-3">
            <span id='avatar' className="input-group-text">Avatar</span>
            <input 
              type="url" 
              placeholder="Avatar URL" 
              className="form-control" 
              aria-label="Avatar" 
              aria-describedby="avatar" 
            />
        </div>
        <button type='submit' className='btn btn-outline-success'>Create account</button>
    </form>
  )
}

export default Register