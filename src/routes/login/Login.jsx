import "./Login.css"
import React, { useState } from 'react'
import { auth } from '../../firebase/config'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [loginPossibleError, setLoginPossibleError] = useState("")

  const createLoginUser = (evt) => {
      evt.preventDefault()

      auth.signInWithEmailAndPassword(loginEmail, loginPassword)
          .then(response => {
              if (response) {
                history.push("/")
              }
          })
          .catch(err => {
              setLoginPossibleError(err.message)
          })
  }
  return (
    <div className="login">
      {
          loginPossibleError && <p style={{color: "red", marginBottom: "30px"}}>{loginPossibleError}</p>
      }
        <h1 className="login__heading">Log In</h1>
        <form className='login__form' onSubmit={createLoginUser}>
            <input className='login__email active__login' onChange={evt=> {setLoginEmail(evt.target.value)}} type="email" placeholder='Enter email'/>
            <input className='login__password active__login' onChange={evt => {setLoginPassword(evt.target.value)}} type="password" placeholder='Enter password'/>
            <button className='login__btn active__login'>Log In</button>
        </form>
    </div>
  )
}

export default Login