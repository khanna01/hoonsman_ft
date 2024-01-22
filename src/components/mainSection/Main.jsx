import React, { useEffect, useState } from 'react'
import Styles from './main.module.css'
import Introduce from './introduce'
import SampleList from './samplelist'
import Modal from './modal'
import MadeList from './MadeList'

import { DBService } from '../../services'
import { BASE_URL } from '../../constants/config'

const dbService = new DBService(BASE_URL)

const Main = () => {
    const [modalInfo, setModalInfo] = useState(false)

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
            setAllLetter(result)
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

            {isMadeDisplay ? (
                <MadeList isLoading={isLoading} letterList={allLetter} />
            ) : (
                <SampleList setModalInfo={setModalInfo} />
            )}
            {modalInfo && (
                <Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />
            )}
        </div>
    )
}

export default Main
