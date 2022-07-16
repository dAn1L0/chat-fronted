import { createContext, useCallback, useContext, useState } from 'react';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchConToken, fetchSinToken } from '../helpers/fetchs';
import { types } from '../types/types';


export const AuthContext = createContext()

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
}

export const AuthProvider = ({children}) => {

  const [auth, setAuth] = useState(initialState)
  const {dispatch} = useContext(ChatContext)

  const login = async(email,password) => {
    const resp = await fetchSinToken('login',{email,password},'POST')
    
    if (resp.ok){
      localStorage.setItem('token', resp.token)
      const {uid,nombre,email} = resp.usuario
      setAuth({
        uid,
        email,
        name: nombre,
        checking: false,
        logged: true,
      })
    }
    return resp.ok
  }

  const register = async(nombre, email, password) => {
    const resp = await fetchSinToken('login/new',{nombre,email,password},'POST')
    
    if (resp.ok){
      localStorage.setItem('token', resp.token)
      const {uid,nombre,email} = resp.usuario
      setAuth({
        uid,
        email,
        name: nombre,
        checking: false,
        logged: true,
      })
    } else {
      return resp
    }
  }

  const verificarToken = useCallback(async() => {

    const token = localStorage.getItem('token')
    
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null
      })
      return false
    } else {   
      const resp = await fetchConToken('login/renew')
      if (resp.ok) {
        localStorage.setItem('token', resp.token)
        const {uid,nombre,email} = resp.usuario
        setAuth({
          uid,
          email,
          name: nombre,
          checking: false,
          logged: true,
        })
        return true
      } else {
        setAuth({
          uid: null,
          email: null,
          name: null,
          checking: false,
          logged: false,
        })
        return false
      }
    }
  },[])

  const logout = () => {
    localStorage.removeItem('token')
    setAuth({
      checking: false,
      logged: false
    })
    dispatch({
      type: types.limpiarMensajes,
    })
  }

  return(
    <AuthContext.Provider value={{
      auth,
      login,
      register,
      verificarToken,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )

}