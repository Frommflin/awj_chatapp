import React, { useContext, useEffect, useState } from 'react'
import './chat.sass'
import { getMessages } from '../services/chatService'
import { ChatContext } from '../context/ChatContextProvider'

const Chat = () => {
  const {isAuthenticated,userData} = useContext(ChatContext)
  const [messages,setMessages] = useState([])

  useEffect(() => {
    getMessages(isAuthenticated).then((data) => {
      setMessages(data)
    })
  },[])

  return (
    <>
      <div id='chatbox'>
        <div id='messageBox'>
          {messages && messages.map(message => {
            let classes = message.userId == userData.id ? 'messages me' : 'messages'
            return (
            <div className={classes} key={message.id}>
              {message.text}
            </div>
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