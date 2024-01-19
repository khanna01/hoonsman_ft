import React from 'react'
import Styles from './modal.module.css'
import SeminarSample from '../letterLists/preview1/seminarsample'
import Promotion from '../letterLists/preview3/product_promotion'
import SamplePage from '../letterLists/preview2/SamplePage'

function Modal({ modalNumber, setModalNumber }) {
    const onCloseClick = () => {
        setModalNumber(null)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.modalContent}>
                <button className={Styles.closeButton} onClick={onCloseClick}>
                    X
                </button>
                {modalNumber === 1 && <SeminarSample />}
                {modalNumber === 2 && <Promotion />}
                {modalNumber === 3 && <SamplePage />}
                <button className={Styles.applyButton}>생성하기</button>
            </div>
        </div>
    )
}

export default Modal
