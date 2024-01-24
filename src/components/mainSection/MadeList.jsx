import React, { useEffect, useState } from 'react'
import Styles from './madelist.module.css'
import { useNavigate } from 'react-router-dom'

export default function MadeList({
    isLoading,
    letterList,
    size,
    isDisabled,
    onLeftClick,
    onRightClick,
}) {
    const navigate = useNavigate()
    const onLetterClick = (letterId) => {
        if (!letterId) return
        navigate(`/letter/${letterId}`)
    }
    console.log(letterList)
    const [spinAction, setSpinAction] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const onImgMouseOver = (e) => {
        if (isHover) return
        setIsHover(true)
    }

    const onImgMouseOut = () => {
        if (!isHover) return
        setIsHover(false)
    }

    useEffect(() => {
        setSpinAction(0)
        setTimeout(() => {
            setSpinAction(1)
        }, 50)
    }, [letterList])

    useEffect(() => {
        if (isDisabled) setSpinAction(2)
    }, [isDisabled])

    return (
        <div
            className={Styles.container}
            style={{ height: size + 50 + 'px', paddingTop: 20 + 'px' }}
        >
            <div
                className={Styles.spin_list}
                style={{
                    width: size + 'px',
                    height: size + 'px',
                    animationPlayState: (isDisabled || isHover) && 'paused',
                    animation: isDisabled && 's 10s linear infinite',
                }}
            >
                {!isLoading &&
                    letterList.map((letter, index) => {
                        return (
                            <div
                                key={'img' + index}
                                className={Styles.img_container}
                                style={{
                                    width: size / 5 + 'px',
                                    height: size / 2 + 'px',
                                    transform: `rotateZ(${
                                        (spinAction === 2 && 720) ||
                                        (spinAction === 0 && 0) ||
                                        (spinAction === 1 &&
                                            (360 / letterList.length) * index)
                                    }deg)`,
                                    zIndex: 10 - index,
                                }}
                            >
                                <img
                                    src={letter.thumbnail}
                                    alt="madeimage"
                                    style={{
                                        height: size / 3 + 'px',
                                    }}
                                />
                                <div
                                    onMouseOver={onImgMouseOver}
                                    onMouseOut={onImgMouseOut}
                                    onClick={() => {
                                        onLetterClick(letter.letterid)
                                    }}
                                    className={Styles.img_background}
                                    style={{
                                        height: size / 3 + 'px',
                                    }}
                                >
                                    {' '}
                                    보기{' '}
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div onClick={onLeftClick} className={Styles.left_btn}>
                prev
            </div>
            <div onClick={onRightClick} className={Styles.right_btn}>
                next
            </div>
        </div>
    )
}
