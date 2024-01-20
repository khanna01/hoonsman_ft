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
                    AI recommends phrases just by entering keywords.
                    <br />
                    Use our sample invitations to create your own.
                </div>
            </div>

            <div className={styles.img__container}>
                <img src={`/imgs/imgIntro.png`} alt="Intro" />
            </div>
        </div>
    )
}

export default Introduce
