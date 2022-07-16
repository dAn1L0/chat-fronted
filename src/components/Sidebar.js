import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { SidebarItem } from './SidebarItem'

export const Sidebar = () => {

  const {chatState} = useContext(ChatContext)
  const {auth} = useContext(AuthContext)

  return (
    <div className="flex-1 overflow-y-scroll">
      {/* conversación activa inicio */}
      {
        chatState.usuarios
          .filter( user => user.uid !== auth.uid )
          .map( (usuario) => (
          <SidebarItem 
            key={usuario.uid}
            user={usuario}
          />
        ))
      }
      
      {/* conversación activa Fin */}

      {/* Espacio extra para scroll */}
      <div className="h-5" />
    </div>
  )
}
