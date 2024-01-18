import React, { useEffect, useRef, useState } from 'react'
import './seminarsample.css'

const IntervalTime = 2000

function SeminarSample({ size, sceneData }) {
    const seminarData = sceneData
    const sectionRefs = useRef([])
    const sliderRefs = useRef([])
    const [textAnimationStatus, setTextAnimationStatus] = useState({})

    useEffect(() => {
        const imgWidth = parseInt(size.width, 10) // `size.width` 문자열에서 숫자로 변환
        let imgX = imgWidth
        const intervalId1 = setInterval(() => {
            imgX -= imgWidth
            if (
                imgX <
                -imgWidth * (Object.keys(seminarData[1].images).length - 1) +
                    imgWidth
            ) {
                imgX = imgWidth
            }

            sliderRefs.current.forEach((sliderRef, index) => {
                if (index !== 0 && index !== 3 && index !== 4) {
                    sliderRef.style.left = `${imgX}px`
                }
            })
        }, IntervalTime)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionIndex = sectionRefs.current.indexOf(
                        entry.target,
                    )
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in')
                        entry.target.classList.remove('fade-out')
                        // 이미지 fade-in이 완료된 후에 텍스트 애니메이션 시작
                        setTimeout(() => {
                            setTextAnimationStatus((prev) => ({
                                ...prev,
                                [sectionIndex]: 'text-fade-in',
                            }))
                        }, IntervalTime) // 이미지 fade-in 애니메이션 시간과 일치
                    } else {
                        entry.target.classList.add('fade-out')
                        entry.target.classList.remove('fade-in')
                        // 텍스트 애니메이션 상태 초기화
                        setTextAnimationStatus((prev) => ({
                            ...prev,
                            [sectionIndex]: '',
                        }))
                    }
                })
            },
            {
                threshold: [0.2, 0.9],
            },
        )

        sectionRefs.current.forEach((section) => observer.observe(section))

        return () => {
            if (sectionRefs.current) {
                sectionRefs.current.forEach((section) => {
                    if (section && observer) observer.unobserve(section)
                })
            }
            clearInterval(intervalId1)
        }
    }, [size.width, size.height]) // size가 변경될 때마다 useEffect가 다시 실행되도록 설정

    return (
        <div className="wrapper" style={{ maxWidth: size.width || 380 }}>
            <div className="container">
                <section
                    ref={(el) => (sectionRefs.current[0] = el)}
                    className={`section ${textAnimationStatus[0] || ''}`}
                >
                    <div
                        className="slider"
                        ref={(el) => (sliderRefs.current[0] = el)}
                    >
                        <img
                            src={seminarData.scenes[0].images[0]}
                            alt="Intro"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                    </div>
                    <p
                        className={`text ${textAnimationStatus[0] || ''} ${
                            seminarData.scenes[0].messages[0].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[0].messages[0].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[0].messages[0].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[0].messages[0].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[0].messages[0].color,
                        }}
                    >
                        {seminarData.scenes[0].messages[0].text}
                    </p>
                </section>
                <div className="half-height-block"></div>
                <div className="half-height-block"></div>
                <section
                    ref={(el) => (sectionRefs.current[1] = el)}
                    className={`section ${textAnimationStatus[1] || ''}`}
                >
                    <div
                        className="slider"
                        ref={(el) => (sliderRefs.current[1] = el)}
                    >
                        <img
                            src={seminarData.scenes[1].images.image1}
                            alt="Description 1"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                        <img
                            src={seminarData.scenes[1].images.image2}
                            alt="Description 1"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                        <img
                            src={seminarData.scenes[1].images.image3}
                            alt="Description 1"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                    </div>
                    <p
                        className={`keyword ${textAnimationStatus[1] || ''} ${
                            seminarData.scenes[1].messages[0].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[1].messages[0].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[1].messages[0].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[1].messages[0].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[1].messages[0].color,
                        }}
                    >
                        {seminarData.scenes[1].messages[0].text}
                    </p>
                    <p
                        className={`description-text ${
                            textAnimationStatus[1] || ''
                        } ${
                            seminarData.scenes[1].messages[1].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[1].messages[1].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[1].messages[1].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[1].messages[1].size ===
                                      'large'
                                    ? '24px'
                                    : 'inherit',
                            color: seminarData.scenes[1].messages[1].color,
                        }}
                    >
                        {seminarData.scenes[1].messages[1].text}
                    </p>
                </section>
                <div className="half-height-block"></div>
                <section
                    ref={(el) => (sectionRefs.current[2] = el)}
                    className={`section ${textAnimationStatus[2] || ''}`}
                >
                    <div
                        className="slider"
                        ref={(el) => (sliderRefs.current[2] = el)}
                    >
                        <img
                            src={seminarData.scenes[2].images.image1}
                            alt="Description 2"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                        <img
                            src={seminarData.scenes[2].images.image2}
                            alt="Description 2"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                        <img
                            src={seminarData.scenes[2].images.image3}
                            alt="Description 2"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                    </div>
                    <p
                        className={`keyword ${textAnimationStatus[2] || ''} ${
                            seminarData.scenes[2].messages[0].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[2].messages[0].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[2].messages[0].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[2].messages[0].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[2].messages[0].color,
                        }}
                    >
                        {seminarData.scenes[2].messages[0].text}
                    </p>
                    <p
                        className={`description-text ${
                            textAnimationStatus[2] || ''
                        } ${
                            seminarData.scenes[2].messages[1].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[2].messages[1].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[2].messages[1].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[2].messages[1].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[2].messages[1].color,
                        }}
                    >
                        {seminarData.scenes[2].messages[1].text}
                    </p>
                </section>
                <div className="half-height-block"></div>
                <section
                    ref={(el) => (sectionRefs.current[3] = el)}
                    className={`section ${textAnimationStatus[3] || ''}`}
                >
                    <div className="slider"></div>
                    <img
                        src={seminarData.scenes[3].images[0]}
                        alt="Location"
                        className="background-image"
                        style={{ width: size.width, height: size.height }}
                    />
                    <p
                        className={`keyword ${textAnimationStatus[3] || ''} ${
                            seminarData.scenes[3].messages[0].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[3].messages[0].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[3].messages[0].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[3].messages[0].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[3].messages[0].color,
                        }}
                    >
                        {seminarData.scenes[3].messages[0].text}
                    </p>
                    <p
                        className={`description-text ${
                            textAnimationStatus[3] || ''
                        } ${
                            seminarData.scenes[3].messages[1].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[3].messages[1].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[3].messages[1].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[3].messages[1].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[3].messages[1].color,
                        }}
                    >
                        {seminarData.scenes[3].messages[1].text}
                    </p>
                </section>
                <section
                    ref={(el) => (sectionRefs.current[4] = el)}
                    className={`section ${textAnimationStatus[4] || ''}`}
                >
                    <div className="slider">
                        <img
                            src={seminarData.scenes[4].images[0]}
                            alt="Intro"
                            className="background-image"
                            style={{ width: size.width, height: size.height }}
                        />
                    </div>

                    <p
                        className={`text ${textAnimationStatus[4] || ''} ${
                            seminarData.scenes[4].messages[0].color === 'white'
                                ? 'white-text-with-black-stroke'
                                : 'black-text-no-stroke'
                        }`}
                        style={{
                            fontSize:
                                seminarData.scenes[4].messages[0].size ===
                                'small'
                                    ? '12px'
                                    : seminarData.scenes[4].messages[0].size ===
                                      'medium'
                                    ? '18px'
                                    : seminarData.scenes[4].messages[0].size ===
                                      'large'
                                    ? '24px'
                                    : '12px',
                            color: seminarData.scenes[4].messages[0].color,
                        }}
                    >
                        {seminarData.scenes[4].messages[0].text}
                    </p>
                </section>
            </div>
        </div>
    )
}

export default SeminarSample
