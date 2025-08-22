import React, { useContext, useEffect } from 'react'
import classes from './usercard.module.sass'
import { ChatContext } from '../context/ChatContextProvider'

const UserCard = () => {
    const {userData} = useContext(ChatContext)

    return (
        <div id={classes.userinfo}>
            {userData.avatar.includes('https://') &&
                <img src={userData.avatar}/>
            }
            <div>
                <div id={classes.user}>{userData.username}</div>
                <div id={classes.email}>{userData.email}</div>
            </div>
        </div>
    )
}

export default UserCard
