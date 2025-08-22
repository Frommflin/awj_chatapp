import React, { useContext, useEffect, useState } from 'react'
import purify from 'dompurify'
import './chat.sass'
import { getMessages } from '../services/chatService'
import { ChatContext } from '../context/ChatContextProvider'

const Chat = () => {
  const {isAuthenticated,userData} = useContext(ChatContext)
  const [messages,setMessages] = useState([])

  useEffect(() => {
    getMessages(isAuthenticated,userData.chatId).then((data) => {
      setMessages(data)
    })
  },[])

  return (
    <>
      <div id='chatbox'>
        <div id='messageBox'>
          {messages && messages.map(message => {
            let classes = message.userId == userData.id ? 'messages me' : 'messages'
            let sanitizedMessage = purify.sanitize(message.text)
            return (
              <div className={classes} key={message.id} dangerouslySetInnerHTML={{__html: sanitizedMessage}}></div>
            )
          })}
        </div>
        <form>
          <div className="input-group">
            <textarea className="form-control" aria-label="Message Area"></textarea>
            <button className="btn btn-outline-success" type="submit" id="send">Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Chat