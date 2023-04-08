import { auth } from '../../firebase/config'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Signin.css"

const Signin = () => {
  const history = useHistory()
  const [possibleError, setPossibleError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const createUser = (evt) => {
    evt.preventDefault()

    auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
          if (response) {
              history.push("/login")
          }
        })
        .catch(err => {
          setPossibleError(err.message)
        })
  }

  return (
    <div className='signin'>
      {
          possibleError && <p style={{color: "red", marginBottom: "20px"}}>{possibleError}</p>
      }
        <h1 className='signin__heading'>Sign Up</h1>
        <form className='signin__form' onSubmit={createUser}>
            <input className='signin__email active__class' required type="email" placeholder='Enter email' onChange={evt => {setEmail(evt.target.value)}}/>
            <input className='signin__passwrod active__class' required type="password" placeholder='Enter password' onChange={evt => {setPassword(evt.target.value)}}/>
            <button className='signin__btn active__class'>Sign Up</button>
        </form>
    </div>
  )
}

export default Signin