import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { InMessage } from './InMessage'
import { OutMessage } from './OutMessage'
import { SendMessage } from './SendMessage'

export const ChatHistory = () => {

  const {chatState} = useContext(ChatContext)
  const {auth} = useContext(AuthContext)

  return (
    <div className=" flex flex-col justify-between float-right pt-4 px-3 pb-0 w-3/5 h-screen">
      
      <div id='historyMessage' className="flex-1 overflow-y-auto">
        {
          chatState.mensajes.map((msg) => (
            (msg.de === auth.uid)
              ? <OutMessage key={msg._id} msg={msg} />
              : <InMessage key={msg._id} msg={msg}/>
          ))
        }
      </div>

      {/* Enviar mensaje Inicio */}
      <SendMessage />
      {/* Enviar mensaje Fin */}
    </div>
  )
}
