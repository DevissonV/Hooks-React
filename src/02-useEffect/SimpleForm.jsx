import { useState,useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'dev',
    email: 'dev@prueba.com'
  });


  const { username, email }  = formState;

  const onInputChange = ({target}) => {
    const {name,value} = target;
    setFormState({
      ...formState,
      [ name ]: value
    })

  }

  useEffect(()=> {
    // console.log('useEffect called')
  }, []);
  
  useEffect(()=> {
    // console.log('useEffect cHANGED')
  }, [formState]);

  return (
    <>
        <h1>formulario simple</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            defaultValue={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            defaultValue={email}
            className="form-control mt-2"
            placeholder="dev@prueba.com"
            name="email"
        />

        {
          (username === 'dev1') && <Message />
        }

        
    </>
  )
}
