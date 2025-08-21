import React, { useContext, useEffect, useRef, useState } from 'react'
import './login.sass'
import { useNavigate } from 'react-router-dom'
import { ChatContext } from '../context/ChatContextProvider'
import { generateJWT, getCSRF } from '../services/authService'


const Login = () => {
  const navigate = useNavigate()
  const {logIn} = useContext(ChatContext)
  const username = useRef()
  const password = useRef()
  const [csrfToken, setCsrfToken] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCSRF().then(response => {
      setCsrfToken(response.csrfToken)
    })
  },[])

  const handleLogIn = async (e) => {
    e.preventDefault()
    const result = await generateJWT(username.current.value,password.current.value,csrfToken)
    const data = await result.json()

    if(result.ok){
      logIn(data.token)
      setError(null)
      navigate('/')
    } else { 
      setError(data.error)
    }
  }

  return (
    <form id='login' on onSubmit={handleLogIn}> 
        <h1>Sign in</h1>
        <div className="input-group mb-3">
            <span id='username' className="input-group-text">Username</span>
            <input 
              type="text" 
              ref={username}
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
              ref={password}
              placeholder="Password" 
              className="form-control" 
              aria-label="Password" 
              aria-describedby="password" 
            />
        </div>
        {error && <div>{error}</div>}
        <button type='submit' className='btn btn-outline-success'>Sign in</button>
    </form>
  )
}

export default Login