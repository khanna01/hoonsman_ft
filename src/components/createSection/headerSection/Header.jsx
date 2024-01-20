import React from 'react'
import Styles from './header.module.css'

const Header = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>hoon's letter</div>
            <div className={Styles.login}>hoon's man</div>
        </div>
    )
}

export default Header
