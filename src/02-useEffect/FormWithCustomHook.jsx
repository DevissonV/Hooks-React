import { useEffect } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });


  return (
    <>
      <h1>formulario con custom hooks</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username || ''}
        onChange={onInputChange}
      />

      <input
        type="email"
        value={email || ''}
        className="form-control mt-2"
        placeholder="dev@prueba.com"
        name="email"
        onChange={onInputChange}
      />

      <input
        type="password"
        value={password || ''}
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        onChange={onInputChange}
      />

      <button 
        className="btn btn-primary mt-2" 
        onClick={onResetForm}
      > Borrar </button>

    </>
  )
}
