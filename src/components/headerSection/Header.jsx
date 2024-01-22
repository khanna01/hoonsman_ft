import React, { useEffect, useState } from 'react'
import Styles from './header.module.css'
import logoImg from '../../imgs/logo2.png'
import teamImg from '../../imgs/hoonsman.png'

import profileImg from '../../imgs/hoonpic.png'

const Header = () => {
    const [size, setSize] = useState(0)
    const [active, setActive] = useState(0)
    const [viewSize, setViewSize] = useState({ width: 0, height: 0 })
    useEffect(() => {
        const viewWidth = document.body.offsetWidth
        const viewHeight = window.innerHeight
        if (viewWidth > viewHeight) setSize(viewHeight)
        else setSize(viewWidth)

        setViewSize({ width: viewWidth, height: viewHeight })
    }, [])

    const onProfileClick = () => {
        setActive((prev) => prev + 1)
        setTimeout(() => {
            setActive(0)
        }, 3000)

        setTimeout(() => {
            setActive((prev) => prev + 1)
        }, 500)

        setTimeout(() => {
            setActive((prev) => prev + 1)
        }, 1500)

        setTimeout(() => {
            setActive((prev) => prev + 1)
        }, 1700)

        setTimeout(() => {
            setActive((prev) => prev + 1)
        }, 2500)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.logo}>
                <img src={logoImg} alt="logoImg" />
            </div>
            <div className={Styles.profile} onClick={onProfileClick}>
                <img
                    src={profileImg}
                    alt="profileImg"
                    className={` ${Styles.profile_img} ${
                        active && Styles.img_active
                    }`}
                />
            </div>
            <img
                src={active >= 4 ? teamImg : profileImg}
                alt="specialMotion"
                className={` ${Styles.special_img} ${
                    active == 2 && Styles.special_active1
                }
                ${active == 4 && Styles.special_active1}`}
                style={{
                    width: size * 0.8 + 'px',
                    height: size * 0.8 + 'px',
                }}
            />
        </div>
    )
}

export default Header
