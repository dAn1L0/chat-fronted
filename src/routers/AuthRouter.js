import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'



export const AuthRouter = () => {
  return (
    <div className="w-full mt-0 mx-auto">
      <div className="bg-center bg-no-repeat bg-cover flex flex-wrap items-center justify-center min-h-screen p-4 w-full">
        <div className="w-[390px] bg-white rounded-lg relative pt-12 pb-24">
          <Routes>
            <Route
              exact
              path='login'
              element={<LoginPage/>}
            />
            <Route
              exact
              path='register'
              element={<RegisterPage/>}
            />
            <Route
              path='*'
              element={<Navigate to='login'/>}
            />
          </Routes>
        </div>
      </div>
    </div>

  )
}
