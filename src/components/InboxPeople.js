import { SearchBox } from './SearchBox'
import { Sidebar } from './Sidebar'

export const InboxPeople = () => {
  return (
    <div className="flex flex-col justify-between h-screen bg-[#f8f8f8] bg-none float-left overflow-hidden w-2/5 border-r-[1px] border-[#c4c4c4]">
      {/* Search-box inicio */}
      <SearchBox />
      {/* Search-box Fin */}
      {/* Sidebar inicio */}
      <Sidebar />
      {/* Sidebar Fin */}
    </div>
  )
}
