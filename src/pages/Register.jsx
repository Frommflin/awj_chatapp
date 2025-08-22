import React, { useEffect, useState } from 'react'
import './register.sass'
import { useNavigate } from 'react-router-dom'
import { getCSRF, registerUser } from '../services/authService'

const Register = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
    avatar: ''
  })
  const [csrfToken, setCsrfToken] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    getCSRF().then(response => {
      setCsrfToken(response.csrfToken)
    })
  },[])

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value})
  }

  const randomizeAvatar = () => {
    const imgId = Math.floor(Math.random() * 1000)
    setUser({ ...user, avatar: `https://picsum.photos/id/${imgId}/200`})
  }

  const isValidUrl = (link) => {
    try {
      return Boolean(new URL(link))
    } catch {
      return false
    }
  }

  const handleRegistration = async (e) => {
    e.preventDefault()

    const result = await registerUser(user.username,user.password,user.email,user.avatar,csrfToken)
    const data = await result.json()

    if(result.ok){
      alert(data.message)
      setMessage(null)
      navigate('/signin')
    } else {
      setMessage(data.error)
    }
  }

  return (
    <form id='register' onSubmit={handleRegistration}> 
        <h1>Register account</h1>
        <div id='formContent'>
          <div>
            <div className="input-group mb-3">
              <span id='user' className="input-group-text">Username</span>
              <input 
                required
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
                  required
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
                  required
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
        {message && <div>{message}</div>}
        <button type='submit' className='btn btn-outline-success'>Create account</button>
    </form>
  )
}

export default Register