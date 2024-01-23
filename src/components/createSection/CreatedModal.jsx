import React, { useState, useEffect } from 'react'
import Styles from './createdmodal.module.css'
import logo1 from '../../imgs/logo1.png'
import { useNavigate } from 'react-router-dom'

export default function CreatedModal({ letterId, setIsCreated }) {
    const navigate = useNavigate()
    const [inputVal, setInputVal] = useState('')
    const [isCopied, setIsCopied] = useState(false)

    console.log(location.origin)

    const onCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(inputVal)
            setIsCopied(true)
            setTimeout(() => {
                setIsCopied(false)
            }, 700)
        } catch (e) {
            console.log(e)
        }
    }

    const onHomeClick = () => {
        setIsCreated(false)
        navigate('/')
    }

    const onInputChange = (e) => {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        setInputVal(location.origin + '/letter' + '/' + letterId)
    }, [])

    return (
        <div className={Styles.container}>
            <div className={Styles.display_box}>
                <div className={Styles.logo}>
                    <img src={logo1} alt="logoimage" />
                </div>
                <div className={Styles.title}>생성이 완료되었습니다</div>
                <div className={Styles.description}>링크를 공유 하세요!!</div>
                <input
                    type="text"
                    className={Styles.link_input}
                    value={inputVal}
                    onChange={onInputChange}
                />
                <div className={Styles.button_bar}>
                    <div onClick={onCopyClick} className={Styles.btn}>
                        복사하기
                    </div>
                    <div onClick={onHomeClick} className={Styles.btn}>
                        홈가기
                    </div>
                </div>
            </div>
            {isCopied && <div className={Styles.copied_box}>복사완료!</div>}
        </div>
    )
}
