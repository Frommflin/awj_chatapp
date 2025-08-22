import { jwtDecode } from 'jwt-decode'
import React, { createContext, useEffect, useState } from 'react'

export const ChatContext = createContext()

const ChatContextProvider = ( {children} ) => {
    const [isAuthenticated,setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('jwt') || null
    })
    const [userData, setUserData] = useState(() =>{
        return JSON.parse(sessionStorage.getItem('user')) || null
    })

    useEffect(() => {
        if(isAuthenticated == null){
            sessionStorage.removeItem('jwt')
        } else {
            sessionStorage.setItem('jwt', isAuthenticated)
        }

        if(userData == null){
            sessionStorage.removeItem('user')
        } else {
            sessionStorage.setItem('user', JSON.stringify(userData))
        }
    },[isAuthenticated,userData])

    const logIn = (jwt) => {
        //decoding jwt to get user data
        const decoded = jwtDecode(jwt)

        let data = {
            id: decoded.id,
            username: decoded.user,
            email: decoded.email,
            avatar: decoded.avatar,
            chatId: 'f55b43d0-7ad7-4104-b93e-a3825212bdc8' //setting as fixed for simplicity
        }
        
        setIsAuthenticated(jwt)
        setUserData(data)
    }
    const logOut = () => {
        setIsAuthenticated(null)
        setUserData(null)
    }
    return (
        <ChatContext.Provider value={{
            isAuthenticated,
            userData,
            logIn,
            logOut
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider