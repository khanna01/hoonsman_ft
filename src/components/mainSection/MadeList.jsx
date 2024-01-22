import React from 'react'
import Styles from './madelist.module.css'
import { useNavigate } from 'react-router-dom'
export default function MadeList({ isLoading, letterList }) {
    const navigate = useNavigate()
    const onLetterClick = (letterId) => {
        navigate(`/letter/${letterId}`)
    }
    console.log(letterList)
    return (
        <div className={Styles.container}>
            <div className={Styles.spin_list}>
                {!isLoading &&
                    letterList.map((letter, index) => {
                        return (
                            <div
                                key={'img' + index}
                                className={Styles.img_container}
                                onClick={() => {
                                    onLetterClick(letter.letterid)
                                }}
                            >
                                <img src={letter.thumbnail} alt="madeimage" />
                                <div className={Styles.img_background}>
                                    {' '}
                                    보기{' '}
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
