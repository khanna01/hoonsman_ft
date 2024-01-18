import React from 'react'
import Style from './login.module.css'

const Login = () => {
  return (
    <div className={Style.loginContainer}>
      <button className={Style.signin__button}>Sign In</button>

      <button className={Style.signup__button}>Sign Up</button>
    </div>
  )
}

export default Login
