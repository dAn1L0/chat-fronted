import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { fetchConToken } from '../helpers/fetchs'
import { scrollToBottom } from '../helpers/scrollToBottom'
import { types } from '../types/types'

export const SidebarItem = ({user}) => {

  const {chatState, dispatch} = useContext(ChatContext)

  const onClick = async() => {
    dispatch({
      type: types.usuarioEscogeChat,
      payload: user.uid
    })

    // cargar mensajes del chat
    const resp = await fetchConToken(`mensajes/${user.uid}`)
    dispatch({
      type: types.cargarMensajes,
      payload: resp.mensajes
    })
    scrollToBottom('historyMessage')
  }

  return (
    <div 
      className={`border-b-[1px]
      border-[#c4c4c4]
      cursor-pointer
      m-0
      pt-5
      pr-4
      pb-2
      ${(chatState.chatActivo===user.uid) && 'active_chat'}`}      
      onClick={onClick}
    >
      <div className="overflow-hidden clear-both ml-1">
        <div className="float-left w-1/6">
          <img
            src="https://ptetutorials.com/images/user-profile.png"
            alt="know"
          />
        </div>
        <div className="float-left pt-0 pr-0 pb-0 pl-4 w-5/6">
          <h5 className='text-sm text-[#464646] mx-0 mt-0 mb-2'>{user.nombre}</h5>
          {
            (user.online)
              ? <span className="text-[#5fa300] text-sm float-right">Online</span>
              : <span className="text-red-500 text-sm float-right">Offline</span>
          }
        </div>
      </div>
    </div>
  )
}
