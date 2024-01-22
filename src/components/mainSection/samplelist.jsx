import React, { useState, useEffect } from 'react'
import Styles from './samplelist.module.css'

import intro1img from '../../imgs/seminar/intro.png'
import intro2img from '../../imgs/Promo_Image/Comp1_Main.png'
import intro3img from '../../imgs/wedding_Image/img1.png'
import intro4img from '../../imgs/template0/img1.png'
import { sampleDefaultData } from '../../constants/sampleData'

const SampleList = ({ setModalInfo, size, isDisabled }) => {
    const [spinAction, setSpinAction] = useState(false)
    useEffect(() => {
        setSpinAction(0)
        setTimeout(() => {
            setSpinAction(1)
        }, 50)
    }, [])

    useEffect(() => {
        if (isDisabled) setSpinAction(2)
    }, [isDisabled])

    const samples = [
        { ...sampleDefaultData },
        {
            id: 1,
            type: 1,
            thumbnail: intro1img,
            title: '세미나 초대장',
            description:
                '이 샘플은 5개의 섹션 소개, 설명1, 설명2, 시간 및 위치, 맺음말로 구성되어있으며, 인터랙티브하지만 간단한 초대장을 만들 수 있습니다.',
        },
        {
            id: 2,
            type: 3,
            thumbnail: intro2img,
            title: '상품 프로모션',
            description:
                '상품 프로모션 얘 템플릿 컴포넌트로 만들어서 다시 재조립 해야됩니당',
        },
        {
            id: 3,
            type: 2,
            thumbnail: intro3img,
            title: '청첩장',
            description:
                '이 템플릿은 12개의 문구와 11개의 사진으로 구성되어 있습니다.',
        },
        {
            id: 4,
            type: 0,
            thumbnail: intro4img,
            title: '제목 4',
            description: '샘플에 대한 설명 4',
        },
    ]

    const handleSampleBoxClick = (index) => {
        setModalInfo(samples[index]) // 모달을 열 때 선택한 샘플의 ID를 설정
    }

    return (
        <div
            className={Styles.container}
            style={{ height: size + 50 + 'px', paddingTop: 20 + 'px' }}
        >
            <div
                className={Styles.spin_list}
                style={{
                    width: size + 'px',
                    height: size + 'px',
                }}
            >
                {samples.map((letter, index) => {
                    return (
                        <div
                            key={'img' + index}
                            className={Styles.img_container}
                            style={{
                                width: size / 5 + 'px',
                                height: size / 2 + 'px',
                                transform: `rotateZ(${
                                    (spinAction === 0 && 0) ||
                                    (spinAction === 1 &&
                                        (360 / samples.length) * index) ||
                                    (spinAction === 2 && 720)
                                }deg)`,
                                zIndex: 10 - index,
                            }}
                        >
                            <img
                                src={letter.thumbnail}
                                alt="madeimage"
                                style={{
                                    height: size / 3 + 'px',
                                }}
                            />
                            <div
                                onClick={() => {
                                    if (letter.id === 0) return
                                    handleSampleBoxClick(letter.id)
                                }}
                                className={Styles.img_background}
                                style={{
                                    height: size / 3 + 'px',
                                }}
                            >
                                {' '}
                                보기{' '}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SampleList
