import React, { useRef, useEffect, useState } from 'react'
import Styles from './template0.module.css'
import LoadingSpinner from './LoadingSpinner.jsx'
import {
    paintLRInOut,
    paintMidIn,
    paintMidToAll,
    paintBottomUpOut,
    paintLRPartIn,
    paintLRPartOut,
    paintBottomPartIn,
    paintVerticalPartIn,
    paintLRCustomIn,
    paintLRCustomOut,
    paintBottomPartOut,
} from './paintAction.js'

const heightArr = []

const s1HeightSize = 8
const s2HeightSize = 10
const s3HeightSize = 8
const TotalImgCnt = 8

const sceneActive = {
    s1: {
        img1: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.2, 0.25],
            drawOut: [0.3, 0.4],
        },
        img2: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.35, 0.4],
            drawOut: [0.5, 0.6],
        },
        img3: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.55, 0.6],
            drawOut: [0.65, 0.75],
        },
        img4: {
            drawRangeX: [],
            drawRangeY: [],
            drawIn: [0.7, 0.75],
            drawOut: [0.9, 0.95],
        },
        messages: [
            {
                opIn: [0.25, 0.28],
                opOut: [0.35, 0.38],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.39, 0.42],
                opOut: [0.49, 0.52],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.53, 0.56],
                opOut: [0.63, 0.66],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.67, 0.7],
                opOut: [0.77, 0.8],
                trIn: [15, 0],
                trOut: [0, -15],
            },
        ],
    },
    s2: {
        img5: {
            drawRangeX: [],
            drawRangeY: [],
            drawMidIn: [0, 0.1],
            drawMidToAllIn: [0.12, 0.18],
            drawBottomUpOut: [0.33, 0.4],
        },
        img6: {
            drawRangeX: [],
            drawRangeY: [],
            drawLRPartIn1: [0.42, 0.48],
            drawLRPartIn2: [0.45, 0.51],
            drawLRPartIn3: [0.48, 0.54],
            drawLRPartIn4: [0.51, 0.57],
            drawLRPartIn5: [0.54, 0.6],
            drawLRPartOut1: [0.87, 0.93],
            drawLRPartOut2: [0.84, 0.9],
            drawLRPartOut3: [0.81, 0.87],
            drawLRPartOut4: [0.78, 0.84],
            drawLRPartOut5: [0.75, 0.81],
        },
        messages: [
            {
                opIn: [0.13, 0.15],
                opOut: [0.19, 0.21],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.22, 0.24],
                opOut: [0.28, 0.3],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.53, 0.57],
                opOut: [0.62, 0.64],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.65, 0.68],
                opOut: [0.73, 0.76],
                trIn: [15, 0],
                trOut: [0, -15],
            },
        ],
    },
    s3: {
        img7: {
            drawRangeX: [],
            drawRangeY: [],
            drawBottomPartIn: [0, 0.1],
            drawVerticalPartIn: [0.12, 0.2],
            drawLRCustomIn: [0.21, 0.3],
            drawLRCustomOut: [0.5, 0.55],
            drawBottomPartOut: [0.56, 0.6],
        },
        img8: {
            drawRangeX: [],
            drawRangeY: [],
            drawBottomPartIn: [0.56, 0.6],
            drawLRCustomIn: [0.61, 0.7],
        },
        messages: [
            {
                opIn: [0.29, 0.32],
                opOut: [0.45, 0.48],
                trIn: [15, 0],
                trOut: [0, -15],
            },
            {
                opIn: [0.65, 0.7],
                opOut: [0.95, 1],
                trIn: [15, 0],
                trOut: [0, -15],
            },
        ],
    },
}

const drawS1 = (sRatio, ctx, scene, imgs, vWidth, vHeight) => {
    const { img1, img2, img3, img4 } = scene

    paintLRInOut(sRatio, ctx, img1, imgs.img1.img, vWidth, vHeight)
    paintLRInOut(sRatio, ctx, img2, imgs.img2.img, vWidth, vHeight)
    paintLRInOut(sRatio, ctx, img3, imgs.img3.img, vWidth, vHeight)
    paintLRInOut(sRatio, ctx, img4, imgs.img4.img, vWidth, vHeight)
}

const drawS2 = (sRatio, ctx2, scene, imgs, vWidth, vHeight) => {
    const { img5, img6 } = scene

    // Img5

    const img5Action1Border = (img5.drawMidIn[1] + img5.drawMidToAllIn[0]) / 2
    const img5Action2Border =
        (img5.drawMidToAllIn[1] + img5.drawBottomUpOut[0]) / 2
    if (sRatio < img5Action1Border)
        paintMidIn(sRatio, ctx2, img5, imgs.img5.img, vWidth, vHeight)
    else if (sRatio < img5Action2Border)
        paintMidToAll(sRatio, ctx2, img5, imgs.img5.img, vWidth, vHeight)
    else paintBottomUpOut(sRatio, ctx2, img5, imgs.img5.img, vWidth, vHeight)

    // img6
    const img6ActionBorder =
        (img6.drawLRPartIn5[1] + img6.drawLRPartOut5[0]) / 2
    if (sRatio < img6ActionBorder) {
        paintLRPartIn(
            sRatio,
            ctx2,
            img6,
            imgs.img6.img,
            vWidth,
            vHeight,
            img6[`drawLRPartIn${1}`],
            0,
            0.2,
        )
        for (let i = 0; i < 4; i++) {
            const from = 0.1 + i * 0.2
            paintLRPartIn(
                sRatio,
                ctx2,
                img6,
                imgs.img6.img,
                vWidth,
                vHeight,
                img6[`drawLRPartIn${i + 2}`],
                from,
                0.3,
            )
        }
    } else {
        paintLRPartOut(
            sRatio,
            ctx2,
            img6,
            imgs.img6.img,
            vWidth,
            vHeight,
            img6[`drawLRPartOut${1}`],
            0,
            0.2,
        )
        for (let i = 0; i < 4; i++) {
            const from = 0.1 + i * 0.2
            paintLRPartOut(
                sRatio,
                ctx2,
                img6,
                imgs.img6.img,
                vWidth,
                vHeight,
                img6[`drawLRPartOut${i + 2}`],
                from,
                0.3,
            )
        }
    }
}

const drawS3 = (sRatio, ctx3, scene, imgs, vWidth, vHeight) => {
    const { img7, img8 } = scene
    const img7Action1Border =
        (img7.drawBottomPartIn[1] + img7.drawVerticalPartIn[0]) / 2
    const img7Action2Border =
        (img7.drawVerticalPartIn[1] + img7.drawLRCustomIn[0]) / 2
    const img7Action3Border =
        (img7.drawLRCustomIn[1] + img7.drawLRCustomOut[0]) / 2
    const img7Action4Border =
        (img7.drawLRCustomOut[1] + img7.drawBottomPartOut[0]) / 2

    // img7Action
    if (sRatio < img7Action1Border)
        paintBottomPartIn(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            vWidth,
            vHeight,
            img7.drawBottomPartIn,
            0.9,
            0.1,
        )
    else if (sRatio < img7Action2Border)
        paintVerticalPartIn(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            vWidth,
            vHeight,
            img7.drawVerticalPartIn,
            0.9,
            0.1,
        )
    else if (sRatio < img7Action3Border)
        paintLRCustomIn(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            vWidth,
            vHeight,
            img7.drawLRCustomIn,
            0.1,
        )
    else if (sRatio < img7Action4Border)
        paintLRCustomOut(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            vWidth,
            vHeight,
            img7.drawLRCustomOut,
            0.1,
        )
    else
        paintBottomPartOut(
            sRatio,
            ctx3,
            img7,
            imgs.img7.img,
            vWidth,
            vHeight,
            img7.drawBottomPartOut,
            0.9,
            0.1,
        )

    // img8Action
    const img8Action1Border =
        (img8.drawBottomPartIn[1] + img8.drawLRCustomIn[0]) / 2
    if (sRatio < img8Action1Border)
        paintBottomPartIn(
            sRatio,
            ctx3,
            img8,
            imgs.img8.img,
            vWidth,
            vHeight,
            img8.drawBottomPartIn,
            0,
            0.1,
        )
    else
        paintLRCustomIn(
            sRatio,
            ctx3,
            img8,
            imgs.img8.img,
            vWidth,
            vHeight,
            img8.drawLRCustomIn,
            0.1,
        )
}

const imgSizing = (vWidth, vHeight, imgs, sceneActive) => {
    const { img1, img2, img3, img4, img5, img6, img7, img8 } = imgs

    const s1Imgs = [img1, img2, img3, img4]
    const s2Imgs = [img5, img6]
    const s3Imgs = [img7, img8]

    const whRatio = vWidth / vHeight
    s1Imgs.forEach((i) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2

            sceneActive.s1[i.name].drawRangeX = [xDiff, i.width - xDiff]
            sceneActive.s1[i.name].drawRangeY = [0, i.height]
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2

            sceneActive.s1[i.name].drawRangeX = [0, i.width]
            sceneActive.s1[i.name].drawRangeY = [yDiff, i.height - yDiff]
        }
    })
    s2Imgs.forEach((i) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2

            sceneActive.s2[i.name].drawRangeX = [xDiff, i.width - xDiff]
            sceneActive.s2[i.name].drawRangeY = [0, i.height]
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2

            sceneActive.s2[i.name].drawRangeX = [0, i.width]
            sceneActive.s2[i.name].drawRangeY = [yDiff, i.height - yDiff]
        }
    })
    s3Imgs.forEach((i) => {
        const imgVHRatio = i.width / i.height
        if (whRatio < imgVHRatio) {
            const fixedScaleRatio = vHeight / i.height
            const fixedWidth = i.width * fixedScaleRatio
            const xDiff = (fixedWidth - vWidth) / fixedScaleRatio / 2

            sceneActive.s3[i.name].drawRangeX = [xDiff, i.width - xDiff]
            sceneActive.s3[i.name].drawRangeY = [0, i.height]
        } else {
            const fixedScaleRatio = vWidth / i.width
            const fixedHeight = i.height * fixedScaleRatio
            const yDiff = (fixedHeight - vHeight) / fixedScaleRatio / 2

            sceneActive.s3[i.name].drawRangeX = [0, i.width]
            sceneActive.s3[i.name].drawRangeY = [yDiff, i.height - yDiff]
        }
    })
}

const drawMessage = (
    sRatio,
    currentScene,
    setMessageStyles,
    vheight,
    sceneActive,
    messages,
) => {
    const messageActive = sceneActive[`s${currentScene + 1}`].messages
    const newMessageStyles = []
    messages.forEach((m, index) => {
        const border =
            (messageActive[index].opIn[1] + messageActive[index].opOut[0]) / 2
        let opacity
        let top
        if (sRatio < border) {
            opacity =
                (sRatio - messageActive[index].opIn[0]) /
                (messageActive[index].opIn[1] - messageActive[index].opIn[0])
            if (opacity < 0) opacity = 0
            else if (opacity > 1) opacity = 1
            top =
                messageActive[index].trIn[0] +
                (messageActive[index].trIn[1] - messageActive[index].trIn[0]) *
                    opacity
        } else {
            opacity =
                1 -
                (sRatio - messageActive[index].opOut[0]) /
                    (messageActive[index].opOut[1] -
                        messageActive[index].opOut[0])
            if (opacity < 0) opacity = 0
            else if (opacity > 1) opacity = 1
            top =
                messageActive[index].trOut[0] +
                (messageActive[index].trOut[1] -
                    messageActive[index].trOut[0]) *
                    (1 - opacity)
        }
        const fontSize =
            m.size === 'small' ? '14px' : m.size === 'medium' ? '20px' : '28px'

        newMessageStyles.push({
            fontSize,
            color: m.color,
            top: `${vheight / 2 + top}px`,
            opacity,
        })
    })

    setMessageStyles((prev) => {
        const newStyles = {
            ...prev,
            [`s${currentScene + 1}`]: [...newMessageStyles],
        }

        return newStyles
    })
}

const activeScene = (
    currentscene,
    sRatio,
    ctx,
    ctx2,
    ctx3,
    imgs,
    setMessageStyles,
    vWidth,
    vHeight,
    sceneActive,
    sceneData,
) => {
    ctx.clearRect(0, 0, vWidth, vHeight)
    ctx2.clearRect(0, 0, vWidth, vHeight)
    ctx3.clearRect(0, 0, vWidth, vHeight)
    const { s1, s2, s3 } = sceneData
    switch (currentscene) {
        case 0:
            drawS1(sRatio, ctx, sceneActive.s1, imgs, vWidth, vHeight)
            drawMessage(
                sRatio,
                currentscene,
                setMessageStyles,
                vHeight,
                sceneActive,
                s1.messages,
            )
            break
        case 1:
            drawS2(sRatio, ctx2, sceneActive.s2, imgs, vWidth, vHeight)
            drawMessage(
                sRatio,
                currentscene,
                setMessageStyles,
                vHeight,
                sceneActive,
                s2.messages,
            )
            break
        case 2:
            drawS3(sRatio, ctx3, sceneActive.s3, imgs, vWidth, vHeight)
            drawMessage(
                sRatio,
                currentscene,
                setMessageStyles,
                vHeight,
                sceneActive,
                s3.messages,
            )
            break
        default:
    }
}

export default function Template0({ size, sceneData }) {
    const vRef = useRef()
    const cRef = useRef()
    const s1Ref = useRef()
    const s2Ref = useRef()
    const s3Ref = useRef()
    const c2Ref = useRef()
    const c3Ref = useRef()
    const [isLoading, setIsLoading] = useState(true)
    const [imgs, setImgs] = useState({})
    const [messageStyles, setMessageStyles] = useState({
        s1: [],
        s2: [],
        s3: [],
    })

    useEffect(() => {
        if (
            !vRef ||
            !cRef ||
            !s1Ref ||
            !s2Ref ||
            !s3Ref ||
            !c2Ref ||
            !c3Ref ||
            isLoading
        )
            return
        vRef.current.scrollTo(0, 0)
        const { width, height } = size
        //height 고정, 그에 대한 width 보정
        const vContainer = vRef.current
        // canvas acitve
        const ctx = cRef.current.getContext('2d')
        const ctx2 = c2Ref.current.getContext('2d')
        const ctx3 = c3Ref.current.getContext('2d')
        // canvas sizing(for scene1)

        imgSizing(width, height, imgs, sceneActive)

        s1Ref.current.style.height = height * s1HeightSize + 'px'
        heightArr[0] = height * s1HeightSize
        s2Ref.current.style.height = height * s2HeightSize + 'px'
        heightArr[1] = height * s2HeightSize
        s3Ref.current.style.height = height * s3HeightSize + 'px'
        heightArr[2] = height * s3HeightSize

        const handleViewScroll = (e) => {
            // calculate scrollY
            const vTop = e.target.getBoundingClientRect().top
            const sTop = s1Ref.current.getBoundingClientRect().top
            const scrollY = vTop - sTop

            let currentScene = 0
            let tempHeightVal = scrollY
            let currentStartY = 0
            // check current scene
            for (let i = 0; i < heightArr.length; i++) {
                tempHeightVal -= heightArr[i]
                if (tempHeightVal < 0) break
                else {
                    currentScene++
                    currentStartY += heightArr[i]
                }
            }
            const sRatio = (scrollY - currentStartY) / heightArr[currentScene]
            activeScene(
                currentScene,
                sRatio,
                ctx,
                ctx2,
                ctx3,
                imgs,
                setMessageStyles,
                width,
                height,
                sceneActive,
                sceneData,
            )
        }

        vContainer.addEventListener('scroll', handleViewScroll)

        return () => {
            vContainer.removeEventListener('scroll', handleViewScroll)
        }
    }, [vRef, size, cRef, s1Ref, s2Ref, isLoading, imgs, c2Ref, s3Ref, c3Ref])

    // Src Loading
    useEffect(() => {
        const { s1, s2, s3 } = sceneData
        // s1 img loading
        let imgLoadCnt = 0
        Object.keys(s1.imgs).forEach((k, index) => {
            if (k === 'intro') return
            const img = new Image()
            img.src = s1.imgs[k]
            img.onload = () => {
                imgLoadCnt++
                if (imgLoadCnt >= TotalImgCnt) onWindowLoad()

                setImgs((prev) => {
                    return {
                        ...prev,
                        [k]: {
                            name: k,
                            img,
                            path: s1.imgs[k],
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            }
        })

        // s2 img loading
        Object.keys(s2.imgs).forEach((k, index) => {
            const img = new Image()
            img.src = s2.imgs[k]
            img.onload = () => {
                imgLoadCnt++
                if (imgLoadCnt >= TotalImgCnt) onWindowLoad()

                setImgs((prev) => {
                    return {
                        ...prev,
                        [k]: {
                            name: k,
                            img,
                            path: s2.imgs[k],
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            }
        })

        // s3 img loading
        Object.keys(s3.imgs).forEach((k, index) => {
            const img = new Image()
            img.src = s3.imgs[k]
            img.onload = () => {
                imgLoadCnt++
                if (imgLoadCnt >= TotalImgCnt) onWindowLoad()

                setImgs((prev) => {
                    return {
                        ...prev,
                        [k]: {
                            name: k,
                            img,
                            path: s3.imgs[k],
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            }
        })

        const onWindowLoad = () => {
            setIsLoading(false)
        }
        window.addEventListener('load', onWindowLoad)
        return () => {
            setIsLoading(true)
            window.removeEventListener('load', onWindowLoad)
        }
    }, [sceneData])

    return (
        <div
            style={{
                width: `${size.width}px`,
                height: `${size.height}px`,
            }}
            className={Styles.wrapper}
        >
            <div
                ref={vRef}
                style={{
                    // width: `${size.width}px`,
                    height: `${size.height}px`,
                }}
                className={Styles.container}
            >
                {isLoading ? (
                    <LoadingSpinner size={size} />
                ) : (
                    <>
                        <div
                            ref={s1Ref}
                            style={{
                                width: `${size.width}px`,
                                height: `${size.height}px`,
                            }}
                            className={Styles.scene}
                        >
                            <div className={Styles.intro_img}>
                                <img
                                    src={sceneData.s1.imgs.intro}
                                    alt="introimage"
                                />
                            </div>
                            <div className={Styles.sticky_box}>
                                <canvas
                                    ref={cRef}
                                    width={size.width}
                                    height={size.height}
                                    className={`${Styles.scenecanvas}`}
                                ></canvas>

                                {sceneData.s1.messages.map((message, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={Styles.scenemessage}
                                            style={{
                                                ...messageStyles.s1[index],
                                            }}
                                        >
                                            {message.content}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div
                            ref={s2Ref}
                            style={{
                                width: `${size.width}px`,
                                height: `${size.height}px`,
                            }}
                            width={size.width}
                            height={size.height}
                            className={Styles.scene}
                        >
                            <div className={Styles.sticky_box}>
                                <canvas
                                    width={size.width}
                                    height={size.height}
                                    ref={c2Ref}
                                    className={`${Styles.scenecanvas}`}
                                ></canvas>
                                {sceneData.s2.messages.map((message, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={Styles.scenemessage}
                                            style={{
                                                ...messageStyles.s2[index],
                                            }}
                                        >
                                            {message.content}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div
                            ref={s3Ref}
                            style={{
                                width: `${size.width}px`,
                                height: `${size.height}px`,
                            }}
                            width={size.width}
                            height={size.height}
                            className={Styles.scene}
                        >
                            <div className={Styles.sticky_box}>
                                <canvas
                                    width={size.width}
                                    height={size.height}
                                    ref={c3Ref}
                                    className={`${Styles.scenecanvas}`}
                                ></canvas>
                                {sceneData.s3.messages.map((message, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={Styles.scenemessage}
                                            style={{
                                                ...messageStyles.s3[index],
                                            }}
                                        >
                                            {message.content}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
