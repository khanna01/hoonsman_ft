import React from 'react'
import Style from './Header.module.css'

const Header = () => {
    return (
        <div className={Style.container}>
            <div className={Style.logo}>hoon's letter</div>
            <div className={Style.login}>hoon's man</div>
        </div>
    )
}

export default Header
