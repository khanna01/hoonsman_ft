import React, { useState, useEffect, useRef } from 'react'
import styles from './template3.module.css'
import Comp1 from './Comp1/Comp1'
import Comp2 from './Comp2/Comp2'
import Comp3 from './Comp3/Comp3'
import Comp4 from './Comp4/Comp4'
import Blank from './Blank/Blank'
import SettingDataSP from './SettingDataSP.json'
import JBDummy from './JBDummy.json'

const Template3 = () => {
    //데이터
    const mapType0ToSettingData = (letter) => {
        const newSettingData = []
        Object.keys(letter).forEach((k) => {
            if (k === 'type') return
            const newScene = {
                images: [],
                message: [],
            }
            Object.keys(letter[k].imgs).forEach((imgk) => {
                newScene.images.push(letter[k].imgs[imgk])
            })
            letter[k].messages.forEach((m) => {
                newScene.message.push({ ...m })
            })
            newSettingData.push(newScene)
        })
        return newSettingData
    }

    const mapSettingDataToType0 = (settingData, letter) => {
        const scenesData = [settingData[0], settingData[1], settingData[2]]
        const letterImgKeys = [
            Object.keys(letter.s1.imgs),
            Object.keys(letter.s2.imgs),
            Object.keys(letter.s3.imgs),
        ]

        const newLetter = {
            type: 0,
            s1: {
                imgs: {},
                messages: [],
            },
            s2: {
                imgs: {},
                messages: [],
            },
            s3: {
                imgs: {},
                messages: [],
            },
        }

        scenesData.forEach((sceneData, index) => {
            newLetter[`s${index + 1}`].messages = [...sceneData.message]
        })

        letterImgKeys.forEach((imgKeys, sIndex) => {
            imgKeys.forEach((imgKey, imgIndex) => {
                newLetter[`s${sIndex + 1}`].imgs[imgKey] =
                    scenesData[sIndex].images[imgIndex]
            })
        })

        return newLetter
    }
    const settingData = SettingDataSP
    const newSettingData = mapType0ToSettingData(settingData)
    const newLetter = mapSettingDataToType0(newSettingData, JBDummy)

    //이벤트
    const [activeComp, setActiveComp] = useState('Comp1')
    const [showMessage1, setShowMessage1] = useState(false)
    const [showMessage2_1, setShowMessage2_1] = useState(false)
    const [showMessage2_2, setShowMessage2_2] = useState(false)
    const [showMessage3_1, setShowMessage3_1] = useState(false)
    const [showMessage3_2, setShowMessage3_2] = useState(false)
    const [showMessage4, setShowMessage4] = useState(false)

    const [showDetailImage, setShowDetailImage] = useState(false)
    const [showImage1, setShowImage1] = useState(false)
    const [showImage2, setShowImage2] = useState(false)
    const [showImage3, setShowImage3] = useState(false)

    const containerRef = useRef(null)

    const handleScroll = () => {
        const scrollY = containerRef.current.scrollTop
        const height = containerRef.current.clientHeight

        setShowMessage1(scrollY >= height * 1.5 && scrollY < height * 3)
        setShowDetailImage(scrollY >= height * 2 && scrollY < height * 3)
        setShowMessage2_1(scrollY >= height * 3.5 && scrollY < height * 5)
        setShowMessage2_2(scrollY >= height * 4 && scrollY < height * 5)
        setShowMessage3_1(scrollY >= height * 5.5 && scrollY < height * 9)
        setShowMessage3_2(scrollY >= height * 6 && scrollY < height * 9)
        setShowMessage4(scrollY >= height * 9.5 && scrollY < height * 13)

        setShowImage1(scrollY >= height * 7)
        setShowImage2(scrollY >= height * 7.5)
        setShowImage3(scrollY >= height * 8)

        if (scrollY < height) {
            setActiveComp('Blank')
        } else if (scrollY < height * 3) {
            setActiveComp('Comp1')
        } else if (scrollY < height * 5) {
            setActiveComp('Comp2')
        } else if (scrollY < height * 9) {
            setActiveComp('Comp3')
        } else if (scrollY < height * 13) {
            setActiveComp('Comp4')
        } else {
            setActiveComp('Blank')
        }
    }

    useEffect(() => {
        const handleScrollOptimized = () => {
            window.requestAnimationFrame(handleScroll)
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('scroll', handleScrollOptimized)

            return () => {
                container.removeEventListener('scroll', handleScrollOptimized)
            }
        }
    }, [containerRef.current]) // 의존성 배열에 containerRef.current 추가

    const getAnimationClass = (compName) => {
        return activeComp === compName ? styles.fadeIn : styles.fadeOut
    }

    return (
        <div className={styles.container} ref={containerRef}>
            <div
                className={`${styles.mainContainer} ${getAnimationClass(
                    'Comp1',
                )}`}
            >
                <Comp1
                    active={activeComp === 'Comp1'}
                    showMessage={showMessage1}
                    showDetailImage={showDetailImage}
                />
            </div>
            <div
                className={`${styles.mainContainer} ${getAnimationClass(
                    'Comp2',
                )}`}
            >
                <Comp2
                    active={activeComp === 'Comp2'}
                    showMessage1={showMessage2_1}
                    showMessage2={showMessage2_2}
                />
            </div>
            <div
                className={`${styles.mainContainer} ${getAnimationClass(
                    'Comp3',
                )}`}
            >
                <Comp3
                    active={activeComp === 'Comp3'}
                    showMessage1={showMessage3_1}
                    showMessage2={showMessage3_2}
                    showImage1={showImage1}
                    showImage2={showImage2}
                    showImage3={showImage3}
                />
            </div>
            <div
                className={`${styles.mainContainer} ${getAnimationClass(
                    'Comp4',
                )}`}
            >
                <Comp4 // Comp4 컴포넌트 추가
                    active={activeComp === 'Comp4'}
                    showMessage4={showMessage4}
                />
            </div>
            <div
                className={`${styles.mainContainer} ${getAnimationClass(
                    'Blank',
                )}`}
            >
                <Blank />
            </div>
            <div
                className={`${styles.mainContainer} ${getAnimationClass(
                    'Blank',
                )}`}
            >
                <Blank />
            </div>
        </div>
    )
}

export default Template3
