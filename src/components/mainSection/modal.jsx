import React from 'react'
import styles from './modal.module.css'
import SeminarSample from '../createSection/previews/preview1/seminarsample'
import Promotion from '../createSection/previews/preview3/product_promotion'
import SamplePage from '../createSection/previews/preview2/SamplePage'

function Modal({ isOpen, closeModal, selectedSampleId }) {
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }

    return (
        <div
            className={isOpen ? styles.modalOpen : styles.modalClosed}
            onClick={handleBackdropClick}
        >
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={closeModal}>
                    X
                </button>
                {selectedSampleId === 1 && <SeminarSample />}
                {selectedSampleId === 2 && <Promotion />}
                {selectedSampleId === 3 && <SamplePage />}
                <button className={styles.applyButton}>생성하기</button>
            </div>
        </div>
    )
}

export default Modal
