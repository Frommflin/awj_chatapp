import React from 'react'
import './chat.sass'

const Chat = () => {
  return (
    <>
      <div id='chatbox'>
        <div id='messageBox'>
          <div className='messages me'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, expedita voluptates aliquam molestiae esse quia repudiandae ullam animi velit. Consequatur maiores, eaque amet animi illo labore, est sunt veritatis adipisci sequi enim ducimus harum quibusdam?
          </div>
          <div className='messages'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, porro!
          </div>
          <div className='messages me'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad autem, beatae labore natus deserunt, dolorem vero consequuntur atque perferendis minus error eos consequatur cumque obcaecati.
          </div>
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