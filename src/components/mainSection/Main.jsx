import React, { useEffect, useState } from 'react'
import Styles from './main.module.css'
import Introduce from './introduce'
import SampleList from './samplelist'
import Modal from './modal'
import MadeList from './MadeList'
import { madeDefaultData } from '../../constants/sampleData'
import { DBService } from '../../services'
import { BASE_URL } from '../../constants/config'

const MAX_LETTER_COUNT = 10
const HEADER_SIZE = 80

const dbService = new DBService(BASE_URL)

const Main = () => {
    const [modalInfo, setModalInfo] = useState(false)
    const [isMadeDisplay, setIsMadeDisplay] = useState(false)
    const [allLetter, setAllLetter] = useState([])
    const [letters, setLetters] = useState([])
    const [pageIndex, setPageIndex] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [size, setSize] = useState(0)
    const [trigger, setTrigger] = useState(true)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        const height = document.body.offsetHeight
        const width = document.body.offsetWidth
        if (height < width) setSize(height - HEADER_SIZE)
        else setSize(width - HEADER_SIZE)
    }, [trigger])

    useEffect(() => {
        const onResize = () => {
            setTrigger((prev) => !prev)
        }
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const onCheckBoxClick = (e) => {
        if (isDisabled) return e.preventDefault()
        setIsDisabled(true)
        setTimeout(() => {
            setIsMadeDisplay(e?.target?.checked)
            setIsDisabled(false)
            setPageIndex(0)
        }, 1000)
    }

    const onRefreshClick = () => {
        setRefresh((prev) => !prev)
    }

    const onLeftClick = () => {
        if (isDisabled || pageIndex === 0) return
        setIsDisabled(true)
        setPageIndex((prev) => prev - 1)
        setTimeout(() => {
            const newLetters = allLetter.splice(
                (pageIndex - 1) * MAX_LETTER_COUNT,
                MAX_LETTER_COUNT,
            )
            setLetters([madeDefaultData, ...newLetters])
            setIsDisabled(false)
        }, 1000)
    }

    const onRightClick = () => {
        if (isDisabled || pageIndex >= allLetter.length / MAX_LETTER_COUNT)
            return
        setIsDisabled(true)
        setPageIndex((prev) => prev + 1)
        setTimeout(() => {
            const sliceCount =
                allLetter.length - (pageIndex + 1) * MAX_LETTER_COUNT
            let newLetters
            if (sliceCount >= MAX_LETTER_COUNT)
                newLetters = allLetter.splice(
                    (pageIndex + 1) * MAX_LETTER_COUNT,
                    MAX_LETTER_COUNT,
                )
            else
                newLetters = allLetter.splice(
                    (pageIndex + 1) * MAX_LETTER_COUNT,
                    sliceCount,
                )
            setLetters([madeDefaultData, ...newLetters])
            setIsDisabled(false)
        }, 1000)
    }

    useEffect(() => {
        setIsLoading(true)
        ;(async () => {
            const result = await dbService.readAllLetter()
            setAllLetter([
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
            ])
            const temp = [
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
                ...result,
            ]
            const sliceCount = temp.length - pageIndex * MAX_LETTER_COUNT
            let newLetters
            if (sliceCount >= MAX_LETTER_COUNT)
                newLetters = temp.splice(
                    pageIndex * MAX_LETTER_COUNT,
                    MAX_LETTER_COUNT,
                )
            else
                newLetters = temp.splice(
                    pageIndex * MAX_LETTER_COUNT,
                    sliceCount,
                )

            setLetters([madeDefaultData, ...newLetters])
        })()
        setIsLoading(false)
    }, [refresh])

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
                <MadeList
                    isLoading={isLoading}
                    letterList={letters}
                    onLeftClick={onLeftClick}
                    onRightClick={onRightClick}
                    size={size}
                    isDisabled={isDisabled}
                />
            ) : (
                <SampleList
                    isDisabled={isDisabled}
                    setModalInfo={setModalInfo}
                    size={size}
                />
            )}
            {modalInfo && (
                <Modal modalInfo={modalInfo} setModalInfo={setModalInfo} />
            )}
        </div>
    )
}

export default Main
