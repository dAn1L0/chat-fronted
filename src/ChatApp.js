import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/AuthContext'
import { ChatProvider } from './context/chat/ChatContext'
import { SocketProvider } from './context/SocketContext'
import { ChatRouter } from './routers/ChatRouter'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')


export const ChatApp = () => {
  return (
    <BrowserRouter>
      <ChatProvider>
        <AuthProvider>
          <SocketProvider>
            <ChatRouter />
          </SocketProvider>
        </AuthProvider>
      </ChatProvider>
    </BrowserRouter>
  )
}
