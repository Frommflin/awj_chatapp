import React, { useContext, useEffect, useRef, useState } from 'react'
import './chat.sass'
import { getMessages, sendMessage } from '../services/chatService'
import { ChatContext } from '../context/ChatContextProvider'
import Message from '../components/Message'

const Chat = () => {
  const {isAuthenticated,userData} = useContext(ChatContext)
  const [messages,setMessages] = useState([])
  const [newMessage,setNewMessage] = useState(null)
  const text = useRef()

  useEffect(() => {
    getMessages(isAuthenticated,userData.chatId).then((data) => {
      setMessages(data)
    })
  },[newMessage])

  const handleSend = async (e) => {
    e.preventDefault()
    const result = await sendMessage(isAuthenticated,text.current.value,userData.chatId)
    if(result.ok){
      const response = await result.json()
      setNewMessage(response)
    }
    e.target.reset() //clearing form
  }

  return (
    <>
      <div id='chatbox'>
        <div id='messageBox'>
          {messages && messages.map(message => {
            if(message){
              return (<Message key={message.id} data={message} />)
            }
          })}
        </div>
        <form onSubmit={handleSend}>
          <div className="input-group">
            <textarea 
              name='messageText' 
              ref={text}
              className="form-control" 
              aria-label="Message Area"
            />
            <button className="btn btn-outline-success" type="submit" id="send">Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Chat