import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { SocketContext } from '../context/SocketContext'

export const SendMessage = () => {

  const [mensaje, setMensaje] = useState('')
  const {socket} = useContext(SocketContext)
  const {auth} = useContext(AuthContext)
  const {chatState} = useContext(ChatContext)

  const onChange = ({target}) => {
    setMensaje( target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (mensaje.trim().length === 0) {
      setMensaje('')
      return
    }
    setMensaje('')
    // Emitir un evento de sockets para enviar mensaje
    socket?.emit('mensaje-privado', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex border-t-[1px] border-t-[#c4c4c4] mb-1">
        <div className="inline-flex w-11/12">
          <textarea
            className="w-full px-2 py-2 text-sm text-gray-800 bg-white border-none rounded transition ease-in-out mx-0 my-1 focus:text-gray-700 focus:bg-white focus:border-none focus:outline-none "
            rows={1}
            placeholder="Mensaje..."
            value={mensaje}
            onChange={onChange}
          />
        </div>
        <div className="inline-flex w-1/12">
          <button 
            type="submit"
            className="inline-block px-1.5 py-3.5 bg-transparent border-none hover:shadow-none focus:bg-none focus:shadow-none focus:outline-none focus:ring-0 active:bg-none active:shadow-none transition duration-150 ease-in-out mt-1" 
          >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane"
            className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill='#4fb2d5' d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"/>
          </svg>
          </button>
        </div>
      </div>
    </form>
  )
}
