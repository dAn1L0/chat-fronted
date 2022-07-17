import { createContext, useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { scrollToBottomAnimated } from '../helpers/scrollToBottom';
import { useSocket } from '../hooks/useSocket';
import { types } from '../types/types';
import { ChatContext } from './chat/ChatContext';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

  //const {socket, online, conectarSocket, desconectarSocket} = useSocket('http://localhost:8080')
  const {socket, online, conectarSocket, desconectarSocket} = useSocket('https://puchat.herokuapp.com')
  
  const {auth} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  useEffect(() => {
    if (auth.logged) {
      conectarSocket()
    }
  }, [auth,conectarSocket])

  useEffect(() => {
    if (!auth.logged) {
      desconectarSocket()
    }
  }, [auth,desconectarSocket])

  // escuchar los cambios de los usuarios registrados
  useEffect(() => {
    socket?.on('usuarios-registrados', (usuarios) => {
      dispatch({
        type: types.usuariosRegistrados,
        payload: usuarios
      })
    })
  }, [socket, dispatch])

  // escuchar los mensajes
  useEffect(() => {
    socket?.on('mensaje-privado', (mensaje) => {
      //
      dispatch({
        type: types.nuevoMensaje,
        payload: mensaje
      })
      scrollToBottomAnimated('historyMessage')
    })
  }, [socket,dispatch])



  return (
    <SocketContext.Provider
      value={{socket,online}}
    >
      {children}
    </SocketContext.Provider>
  )
}