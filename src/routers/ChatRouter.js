import { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { LoadingScreen } from '../components/LoadingScreen'
import { ChatPage } from '../pages/ChatPage'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const ChatRouter = () => {

  const { auth,verificarToken } = useContext(AuthContext)

  useEffect(() => {
    verificarToken()
  }, [verificarToken])

  if (auth.checking) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <div className='h-screen m-0'>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <PrivateRoute isAuthenticated={auth.logged} >
              <ChatPage/>
            </PrivateRoute>
          }
        />
        <Route
          path='/auth/*'
          element={
            <PublicRoute isAuthenticated={auth.logged}>
              <AuthRouter/>
            </PublicRoute>
          }
        />
        <Route
          path='*'
          element={<Navigate to='/auth'/>}
        />
      </Routes>
    </div>
  )
}
