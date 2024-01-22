import React, { useState } from 'react'
import Styles from './samplelist.module.css'

import intro1img from '../../imgs/seminar/intro.png'
import intro2img from '../../imgs/Promo_Image/Comp1_Main.png'
import intro3img from '../../imgs/wedding_Image/img1.png'
import intro4img from '../../imgs/template0/img1.png'

const SampleList = ({ setModalInfo }) => {
    const samples = [
        {
            id: 1,
            type: 1,
            imageUrl: intro1img,
            title: '세미나 초대장',
            description:
                '이 샘플은 5개의 섹션 소개, 설명1, 설명2, 시간 및 위치, 맺음말로 구성되어있으며, 인터랙티브하지만 간단한 초대장을 만들 수 있습니다.',
        },
        {
            id: 2,
            type: 3,
            imageUrl: intro2img,
            title: '상품 프로모션',
            description:
                '상품 프로모션 얘 템플릿 컴포넌트로 만들어서 다시 재조립 해야됩니당',
        },
        {
            id: 3,
            type: 2,
            imageUrl: intro3img,
            title: '청첩장',
            description:
                '이 템플릿은 12개의 문구와 11개의 사진으로 구성되어 있습니다.',
        },
        {
            id: 4,
            type: 0,
            imageUrl: intro4img,
            title: '제목 4',
            description: '샘플에 대한 설명 4',
        },
    ]

    const handleSampleBoxClick = (index) => {
        setModalInfo(samples[index]) // 모달을 열 때 선택한 샘플의 ID를 설정
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.box_wrapper}>
                <div className={Styles.box__container}>
                    <div className={Styles.sample__line}>
                        {samples.map((sample, index) => (
                            <div key={sample.id} className={Styles.box_item}>
                                <div
                                    className={Styles.letter_box}
                                    onClick={() => handleSampleBoxClick(index)}
                                >
                                    <div className={Styles.img_box}>
                                        <img
                                            src={sample.imageUrl}
                                            alt={`Sample ${sample.id}`}
                                        />
                                    </div>
                                    <div className={Styles.text_box}>
                                        <h2>{sample.title}</h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SampleList
