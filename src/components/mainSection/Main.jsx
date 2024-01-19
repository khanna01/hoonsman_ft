import React, { useState } from 'react'
import Styles from './main.module.css'
import Introduce from './introduce'
import SampleList from './samplelist'
import Modal from './modal'

const MainBody = () => {
    const [modalNumber, setModalNumber] = useState(null)
    const [isMadeDisplay, setIsMadeDisplay] = useState(false)
    const onCheckBoxClick = (e) => {
        setIsMadeDisplay(e?.target?.checked)
    }

    // 모달을 닫는 함수

    return (
        <div className={Styles.container}>
            <Introduce />
            <div className={Styles.toggle_bar}>
                <div className={Styles.model8}>
                    <div className={Styles.checkbox} onClick={onCheckBoxClick}>
                        <input type="checkbox" id="model8-checkbox" />
                        <label htmlFor="model8-checkbox"></label>
                    </div>
                </div>
                <div className={Styles.toggle_title}>
                    {isMadeDisplay ? '만든것' : 'Take a look at some samples.'}
                </div>
            </div>
            <SampleList setModalNumber={setModalNumber} />
            {modalNumber && (
                <Modal
                    modalNumber={modalNumber}
                    setModalNumber={setModalNumber}
                />
            )}
        </div>
    )
}

export default MainBody
