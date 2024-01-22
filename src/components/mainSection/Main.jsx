import React, { useEffect, useState } from 'react'
import Styles from './main.module.css'
import Introduce from './introduce'
import SampleList from './samplelist'
import Modal from './modal'

import { DBService } from '../../services'
import { BASE_URL } from '../../constants/config'

const dbService = new DBService(BASE_URL)

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
    const [allLetter, setAllLetter] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const onCheckBoxClick = (e) => {
        setIsMadeDisplay(e?.target?.checked)
    }

    const onRefreshClick = () => {
        setRefresh((prev) => !prev)
    }

    useEffect(() => {
        setIsLoading(true)
        ;(async () => {
            const result = await dbService.readAllLetter()
            console.log(result)
        })()
        setIsLoading(false)
    }, [refresh])

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
