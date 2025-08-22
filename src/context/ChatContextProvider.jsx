import { jwtDecode } from 'jwt-decode'
import React, { createContext, useEffect, useState } from 'react'

export const ChatContext = createContext()

const ChatContextProvider = ( {children} ) => {
    const [isAuthenticated,setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('jwt') || null
    })
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        if(isAuthenticated == null){
            sessionStorage.removeItem('jwt')
        } else {
            sessionStorage.setItem('jwt', isAuthenticated)
        }
    },[isAuthenticated])

    const logIn = (value) => {
        setIsAuthenticated(value)
        handleToken(value)
    }
    const logOut = () => {
        setIsAuthenticated(null)
        setUserData(null)
    }
    const handleToken = (jwt) =>{
        //decoding jwt to get user data
        const decoded = jwtDecode(jwt);
        console.log(decoded)

        let data = {
            username: decoded.user,
            email: decoded.email,
            avatar: decoded.avatar
        }
        console.log(data)
        setUserData(data)
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