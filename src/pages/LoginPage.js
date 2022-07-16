import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import Swal from 'sweetalert2'

export const LoginPage = () => {

  const {login} = useContext(AuthContext)

  
  const [form, setForm] = useState({
    email: '',
    password: '',
    recordarme: false
  })

  useEffect(() => {
    const email = localStorage.getItem('email')
    if (email) {
      setForm((form)=>{
        const newForm = {...form}
        newForm.email= email
        newForm.recordarme= true
        return newForm
      })
    }
  }, [])

  const onChange = ({target}) => {
    const {name,value} = target
    setForm({
      ...form,
      [name]: value
    })
  }

  const toggleCheck = () => {
    setForm({
      ...form,
      recordarme: !form.recordarme
    })
  }

  const onSubmit = async(e) => {
    e.preventDefault();

    (form.recordarme)
      ? localStorage.setItem('email', form.email)
      : localStorage.removeItem('email')

    const {email,password} = form
    //llamar el backend
    const ok = await login(email,password)
    if (!ok) {
      Swal.fire('Error', 'Verificar correo y contraseña', 'error')
    }
  }

  const todoOk =() => {
    return (form.email.length > 0 && form.password.length > 0) ? true : false
  }

  return (
    <form onSubmit={onSubmit}>
      <span className="login100-form-title mb-6">
        Chat - Ingreso
			</span>
      <div className="form-group validate-input mb-3">
        <input
          type="email"
          className="input100"
          id="exampleInputEmail1"
          autoComplete='off'
          name="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
      </div>
      <div className="form-group validate-input mb-3">
        <input
          type="password"
          className="input100"
          name='password'
          id="exampleInputPassword1"
          placeholder="Password"
          autoComplete='current-password'
          value={form.password}
          onChange={onChange}
        />
      </div>
      <div className="flex justify-between items-center mb-3">
        <div 
          className="form-group" 
          onClick={toggleCheck}
        >
          <input
            type="checkbox"
            className="form-check-input appearance-none h-5 w-5 border border-[#9b48ff] rounded-sm  checked:bg-[#9b48ff] checked:border-[#9b48ff] focus:outline-[#bd00ff]  transition duration-200 mt-0 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
            name='recordarme'
            checked={form.recordarme}
            readOnly
          />
          <label
            className="form-check-label inline-block text-[#999999] leading-tight cursor-pointer"
          >
            Recordarme
          </label>
        </div>
        <Link
          to="/auth/register"
          className="txt1"
        >
          Crear cuenta
        </Link>
      </div>
      <button
        type="submit"
        className="login100-form-btn disabled:cursor-not-allowed"
        disabled={!todoOk()}
      >
        Ingresar
      </button>
    </form>
  )
}
