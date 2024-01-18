import React from 'react'
import Style from './Header.module.css'
import Logo from './logo/logo'
import Login from './login/login'

const Header = () => {
  return (
    <div className={Style.container}>
      <div className={Style.logo}>
        <Logo />
      </div>
      <div className={Style.login}>
        <Login />
      </div>
    </div>
  )
}

export default Header
