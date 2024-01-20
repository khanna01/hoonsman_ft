import React, { useState } from 'react'
import Styles from './main.module.css'
import Introduce from './introduce'
import SampleList from './samplelist'
import Modal from './modal'

const Main = () => {
    const [modalInfo, setModalInfo] = useState({
        id: 1,
        type: 1,
        imageUrl: '/imgs/intro.png',
        title: '세미나 초대장',
        description:
            '이 샘플은 5개의 섹션 소개, 설명1, 설명2, 시간 및 위치, 맺음말로 구성되어있으며, 인터랙티브하지만 간단한 초대장을 만들 수 있습니다.이 샘플은 5개의 섹션 소개, 설명1, 설명2, 시간 및 위치, 맺음말로 구성되어있으며, 인터랙티브하지만 간단한 초대장을 만들 수 있습니다.이 샘플은 5개의 섹션 소개, 설명1, 설명2, 시간 및 위치, 맺음말로 구성되어있으며, 인터랙티브하지만 간단한 초대장을 만들 수 있습니다.',
    })

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
            <SampleList setModalInfo={setModalInfo} />
            {modalInfo && (
                <Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />
            )}
        </div>
    )
}

export default Main
