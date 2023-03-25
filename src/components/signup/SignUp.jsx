import React from 'react'
import "./SignUp.css"
import { FiX } from "react-icons/fi"

const SignUp = ({isSignUpActive, setIsSignUpActive}) => {
  return (  
    <div className={isSignUpActive === true ? "signup signupactive" : "signup"}>
        <div className="signup__wrapper">
            <div className="signup__list">
                <h1>Signup</h1>
                <FiX className="signup__icon" onClick={() => {setIsSignUpActive(false)}}/>
            </div>
        </div>
    </div>
  )
}

export default SignUp