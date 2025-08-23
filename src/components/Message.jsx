import React, { useContext } from 'react'
import purify from 'dompurify'
import { ChatContext } from '../context/ChatContextProvider'

const Message = ({data}) => {
    const {userData} = useContext(ChatContext)

    let classes = data.userId == userData.id ? 'messages me' : 'messages'
    let sanitizedMessage = purify.sanitize(data.text)

    return (
        <div className={classes} dangerouslySetInnerHTML={{__html: sanitizedMessage}}></div>
    )
}

export default Message