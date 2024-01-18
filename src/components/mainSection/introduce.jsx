// Introduce.jsx

import React from 'react'
import styles from './introduce.module.css'

const Introduce = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text__container}>
                <div className={styles.main__text__intro}>
                    {/* 텍스트 굵게 적용 */}
                    <strong>Create invitations through AI</strong>
                </div>
                <div className={styles.sub__text__intro}>
                    AI recommends phrases just by entering keywords. Use our
                    sample invitations to create your own.
                </div>
                <button className={`${styles.custombtn_btn3} ${styles.btn3}`}>
                    {/* 텍스트와 여백을 만들어서 분리 */}
                    <span className={styles.btn3_text}>Get Start</span>
                </button>
            </div>

            <div className={styles.img__container}>
                <div className={styles.img__intro}>
                    {/* <img src={`${process.env.PUBLIC_URL}/img/imgIntro.png`} alt="Intro" /> */}
                </div>
            </div>
        </div>
    )
}

export default Introduce
