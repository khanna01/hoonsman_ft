import React, { useState } from 'react'
import Styles from './samplelist.module.css'
import Modal from './modal'

const SampleBox = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedSampleId, setSelectedSampleId] = useState(0)

    const samples = [
        {
            id: 1,
            imageUrl: '../../imgs/img1.png',
            title: '세미나 초대장',
            description:
                '이 샘플은 5개의 섹션 소개, 설명1, 설명2, 시간 및 위치, 맺음말로 구성되어있으며, 인터랙티브하지만 간단한 초대장을 만들 수 있습니다.',
        },
        {
            id: 2,
            imageUrl: '../../imgs/img1.png',
            title: '상품 프로모션',
            description:
                '상품 프로모션 얘 템플릿 컴포넌트로 만들어서 다시 재조립 해야됩니당',
        },
        {
            id: 3,
            imageUrl: '../../imgs/img1.png',
            title: '청첩장',
            description:
                '이 템플릿은 12개의 문구와 11개의 사진으로 구성되어 있습니다.',
        },
        {
            id: 4,
            imageUrl: '../../imgs/img1.png',
            title: '제목 4',
            description: '샘플에 대한 설명 4',
        },
    ]

    const handleSampleBoxClick = (sampleId) => {
        setSelectedSampleId(sampleId) // 모달을 열 때 선택한 샘플의 ID를 설정
        setIsModalOpen(true) // 모달을 열기
    }
    const closeModal = () => {
        // setSelectedSampleId(0) // 선택한 샘플 ID 초기화
        setIsModalOpen(false) // 모달을 닫기
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.intro}>Take a look at some samples.</div>
            <div className={Styles.switch_toggle}>
                <div className={Styles.model8}>
                    <div className={Styles.checkbox}>
                        <input type="checkbox" id="model8-checkbox" />
                        <label htmlFor="model8-checkbox"></label>
                    </div>
                </div>
            </div>
            <div className={Styles.box__container}>
                <div className={Styles.sample__line}>
                    {samples.map((sample) => (
                        <div
                            key={sample.id}
                            className={Styles['box' + sample.id]}
                            onClick={() => handleSampleBoxClick(sample.id)}
                        >
                            <img
                                src={sample.imageUrl}
                                alt={`Sample ${sample.id}`}
                            />
                            <div className={Styles.textContainer}>
                                <h2>{sample.title}</h2>
                                <p>{sample.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                closeModal={closeModal}
                selectedSampleId={selectedSampleId}
            />
        </div>
    )
}

export default SampleBox
