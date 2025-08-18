import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { ChatContext } from '../context/ChatContextProvider'

const ProtectedRoute = () => {
    const {isAuthenticated} = useContext(ChatContext)
    return (
        isAuthenticated ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default ProtectedRoute