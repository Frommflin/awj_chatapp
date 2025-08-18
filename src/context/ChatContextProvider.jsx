import React, { createContext, useEffect, useState } from 'react'

export const ChatContext = createContext()

const ChatContextProvider = ( {children} ) => {
    const [isAuthenticated,setIsAuthenticated] = useState(() => {
        return sessionStorage.getItem('jwt') || null
    })

    useEffect(() => {
        if(isAuthenticated == null){
            sessionStorage.removeItem('jwt')
        } else {
            sessionStorage.setItem('jwt', isAuthenticated)
        }
    },[isAuthenticated])

    const logIn = (value) => {
        setIsAuthenticated(value)
    }
    const logOut = () => {
        setIsAuthenticated(null)
    }
    return (
        <ChatContext.Provider value={{
            isAuthenticated,
            logIn,
            logOut
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContextProvider