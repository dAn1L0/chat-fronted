import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { AuthContext } from '../auth/AuthContext'



export const RegisterPage = () => {

  const {register} = useContext(AuthContext)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onChange = ({target}) => {
    const {name,value} = target
    setForm({
      ...form,
      [name]: value
    })
  }


  const onSubmit = async(e) => {
    e.preventDefault()

    const resp = await register(form.name,form.email,form.password)
    const pase = resp?.ok
    if (!pase !== undefined && resp?.msg !== undefined) {
      Swal.fire('Error', resp?.msg, 'error')
    }
  }

  const todoOk =() => {
    return (form.name.length > 0 && form.email.length > 0 && form.password.length > 0 ) ? true : false
  }

  return (
    <form onSubmit={onSubmit}>
      <span className="login100-form-title mb-6">
        Chat - Registro
			</span>
      <div className="form-group validate-input mb-3">
        <input
          type="text"
          className="input100"
          id="exampleInputText2"
          autoComplete='off'
          name="name"
          aria-describedby="nameHelp"
          placeholder="Nombre"
          value={form.name}
          onChange={onChange}
        />
      </div>
      <div className="form-group validate-input mb-3">
        <input
          type="email"
          className="input100"
          id="exampleInputEmail2"
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
          id="exampleInputPassword2"
          autoComplete='current-password'
          placeholder="Password"
          value={form.password}
          onChange={onChange}
        />
      </div>
      <div className="text-right mb-3">
        <Link
          to="/auth/login"
          className="txt1"
        >
          ¿Tienes cuenta?
        </Link>
      </div>
      <button
        type="submit"
        className="login100-form-btn disabled:cursor-not-allowed"
        disabled={!todoOk()}
      >
        Crear cuenta
      </button>
    </form>
  )
}
