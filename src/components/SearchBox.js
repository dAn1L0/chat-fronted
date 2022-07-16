import { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'

export const SearchBox = () => {

  const {auth,logout} = useContext(AuthContext)

  return (
    <div className="p-3 overflow-hidden border-b-[1px] border-[#c4c4c4] ">
      <div className="float-left w-2/5 px-0 py-0.5 border-0 m-0">
        <h4 className='text-[#7674FE] text-lg m-auto'>{auth.name}</h4>
      </div>
      <div className="float-right text-right w-3/5 p-px">
        <div>
          <button 
            type="button" 
            className="inline-block px-4 py-1.5 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            onClick={logout}
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}
