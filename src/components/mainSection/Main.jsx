import React, { useState } from 'react'
import Style from './main.module.css'
import Introduce from './introduce'
import SampleList from './samplelist'
import Modal from './modal'

const MainBody = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    // 모달을 닫는 함수
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className={Style.container}>
            <div className={Style.intro__container}>
                <Introduce />
            </div>
            <div className={Style.sample__container}>
                <SampleList openModal={openModal} />
                <Modal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
        </div>
    )
}

export default MainBody
