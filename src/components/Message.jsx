import React, { useContext } from 'react'
import purify from 'dompurify'
import { ChatContext } from '../context/ChatContextProvider'
import './message.sass'
import { deleteMessage } from '../services/chatService'

const Message = ({data,update}) => {
    const {isAuthenticated,userData} = useContext(ChatContext)

    const isMe = data.userId == userData.id ? true : false
    let styling = isMe ? 'messages me' : 'messages'
    let sanitizedMessage = purify.sanitize(data.text)
    const deleteIcon = '🗑️'

    const handleDelete = async () => {
        const result = await deleteMessage(isAuthenticated,data.id)
        const response = await result.json()
        if(result.ok){
            update(response)
        } else {
            console.error(response)
            alert('Something went wrong when trying to delete message')
            return
        }
    }

    return (
        <div className={styling}>
            <div dangerouslySetInnerHTML={{__html: sanitizedMessage}}></div>
            {isMe && 
                <button className='btn btn-dark' onClick={handleDelete}>{deleteIcon}</button>
            }
        </div>)
}

export default Message