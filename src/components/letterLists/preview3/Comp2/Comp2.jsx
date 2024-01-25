import React, { useState, useEffect } from 'react'
import Style from './Comp2.module.css'

const Comp2 = ({ active, showMessage1, showMessage2, sceneData }) => {
    const [Img3Url, setImg3Url] = useState('')
    const [message1, setMessage1] = useState('')
    const [message1Style, setMessage1Style] = useState({})
    const [message2, setMessage2] = useState('')
    const [message2Style, setMessage2Style] = useState({})

    useEffect(() => {
        if (sceneData && sceneData.s2) {
            setImg3Url(sceneData.s2.imgs.img3)
            const messageData1 = sceneData.s2.messages[0]
            const messageData2 = sceneData.s2.messages[1]
            setMessage1(messageData1.context)
            setMessage2(messageData2.context)
            setMessage1Style({
                fontSize: messageData1.size === 'medium' ? '12px' : '24px',
                color: messageData1.color,
            })
            setMessage2Style({
                fontSize: messageData2.size === 'medium' ? '12px' : '24px',
                color: messageData2.color,
            })
        }
    }, [sceneData])

    return (
        <div
            className={`${Style.container} ${
                active ? Style.active : Style.inactive
            }`}
        >
            <div
                className={`${Style.message1} ${
                    showMessage1 ? Style.fadeIn : ''
                }`}
                style={message1Style}
            >
                {message1}
            </div>
            <div
                className={`${Style.message2} ${
                    showMessage2 ? Style.fadeIn : ''
                }`}
                style={message2Style}
            >
                {message2}
            </div>
            <div className={Style.imageContainer}>
                <img src={Img3Url} alt="Image" />
            </div>
        </div>
    )
}

export default Comp2
