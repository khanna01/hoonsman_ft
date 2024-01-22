import React from 'react'
import Styles from './madelist.module.css'

export default function MadeList({ isLoading, letterList }) {
    console.log(letterList)
    return (
        <div className={Styles.container}>
            <div className={Styles.list_bar}>
                {!isLoading &&
                    letterList.map((letter, index) => {
                        return (
                            <div
                                key={'img' + index}
                                className={Styles.img_container}
                            >
                                <img src={letter.thumbnail} alt="madeimage" />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
