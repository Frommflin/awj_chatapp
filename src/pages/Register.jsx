import React, { useState } from 'react'
import './register.sass'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    avatar: ''
  })

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const randomizeAvatar = () => {
    setUser({ ...user, avatar: `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`})
  }

  const isValidUrl = (link) => {
    try {
      return Boolean(new URL(link))
    } catch {
      return false
    }
  }

  const handleRegistration = (e) => {
    e.preventDefault()

    navigate('/signin')
  }

  return (
    <form id='register' onSubmit={handleRegistration}> 
        <h1>Register account</h1>
        <div id='formContent'>
          <div>
            <div className="input-group mb-3">
              <span id='user' className="input-group-text">Username</span>
              <input 
                type="text" 
                name='username'
                placeholder="Username" 
                value={user.username}
                className="form-control" 
                aria-label="Username" 
                aria-describedby="user" 
                onChange={updateUser}
              />
            </div>
            <div className="input-group mb-3">
                <span id='pwd' className="input-group-text">Password</span>
                <input 
                  type="password" 
                  name='password'
                  placeholder="Password" 
                  value={user.password}
                  className="form-control" 
                  aria-label="Password" 
                  aria-describedby="pwd" 
                  onChange={updateUser}
                />
            </div>
            <div className="input-group mb-3">
                <span id='e-mail' className="input-group-text">E-mail</span>
                <input 
                  type="email" 
                  name='email'
                  placeholder="example@example.com"
                  value={user.email} 
                  className="form-control" 
                  aria-label="Email" 
                  aria-describedby="e-mail" 
                  onChange={updateUser}
                />
            </div>
            <div className="input-group mb-3">
                <span id='profileimg' className="input-group-text">Avatar</span>
                <input 
                  type="hidden"
                  name='avatar' 
                  value={user.avatar}
                  aria-label="Avatar" 
                  aria-describedby="profileimg"
                />
                <button
                  className='btn btn-outline-info'
                  type='button'
                  title='Randomize avatar'
                  onClick={randomizeAvatar}
                >
                  Randomize image
                </button>
            </div>
          </div>
          
          <div>
            {(isValidUrl(user.avatar) && (
              <img
                src={user.avatar}
                alt='Profile image preview'
                className='img-thumbnail rounded'
              />
            )) || (!isValidUrl(user.avatar) && (
              <p>Randomize image to see preview here</p>
            ))}
          </div>
        </div>
        
        <button type='submit' className='btn btn-outline-success'>Create account</button>
    </form>
  )
}

export default Register