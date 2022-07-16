import { useContext } from 'react'
import { ChatHistory } from '../components/ChatHistory'
import { EmptyChat } from '../components/EmptyChat'
import { InboxPeople } from '../components/InboxPeople'
import { ChatContext } from '../context/chat/ChatContext'



export const ChatPage = () => {

  const {chatState} = useContext(ChatContext)

  return (
    <>
      <div className="border border-solid border-[#c4c4c4] clear-both overflow-hidden h-screen">
        {/* Inbox people inicio */}
        <InboxPeople />
        {/* Inbox people Fin */}
        
        {/* Chat inicio */}
        {
          (chatState.chatActivo)
            ? <ChatHistory />
            : <EmptyChat />
        }
        {/* Chat Fin */}
      </div>
    </>
  )
}
