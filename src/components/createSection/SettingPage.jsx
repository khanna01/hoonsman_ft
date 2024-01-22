import React, { useRef, useState } from 'react'
import Styles from './settingpage.module.css'
import MessageHandler from './MessageHandler'

import { CloudinaryService } from '../../services'
import { BASE_URL } from '../../constants/config'
const cloudinaryService = new CloudinaryService(BASE_URL)
const ImgLoading = () => {
    return (
        <div className={Styles.img_loading_container}>
            <div className={Styles.img_loading_spinner}> </div>
        </div>
    )
}

const MessageBtn = ({ index, focus }) => {
    const isfocus = index === focus
    return (
        <div
            data-index={index}
            className={`${Styles.input_btn} ${isfocus && Styles.btn_focus}`}
        >
            M{index + 1}
        </div>
    )
}

const ImgInput = ({ imageIndex, srcName, setImgUrl }) => {
    const imgInputRef = useRef()
    const [isLoading, setIsLoading] = useState(false)

    const onImgInputClick = () => {
        console.log('imgCLick')
        imgInputRef.current.click()
    }

    const onFileChange = async (e) => {
        setIsLoading(true)
        const files = e?.currentTarget?.files
        if (!files) return
        const formData = new FormData()
        for (let i = 0; i < files.length; i++) {
            formData.append('avatar', files[i])
        }
        const imgUrl = await cloudinaryService.uploadImage(formData)
        setImgUrl(imageIndex, imgUrl)
        setIsLoading(false)
    }
    return (
        <div onClick={onImgInputClick} className={Styles.input_btn}>
            {isLoading ? (
                <ImgLoading />
            ) : (
                <>
                    <form encType="multipart/form-data">
                        <input
                            type="file"
                            className="file"
                            style={{
                                display: 'none',
                            }}
                            accept="image/*"
                            ref={imgInputRef}
                            onChange={onFileChange}
                        />
                    </form>
                    +
                    <div className={Styles.img_preview}>
                        <img src={srcName} alt="imgpreview" />
                    </div>
                </>
            )}
        </div>
    )
}

export default function SettingPage({
    settingData,
    setSettingData,
    sceneIndex,
    messageFocus,
    setMessageFocus,
    setLetterData,
    setIsModal,
}) {
    const setImgUrl = (imageIndex, imgUrl) => {
        setSettingData((v) => {
            const newInfo = [...v]
            newInfo[sceneIndex].images[imageIndex] = imgUrl

            return newInfo
        })
    }
    console.log(settingData)

    const changeControlInfo = (data) => {
        setSettingData((v) => {
            const newInfo = [...v]
            newInfo[sceneIndex].message[messageFocus] = {
                ...newInfo[sceneIndex].message[messageFocus],
                ...data,
            }
            return newInfo
        })
    }
    const onMessageBarClick = (e) => {
        if (!e.target.dataset?.index) return
        setMessageFocus(Number(e.target.dataset?.index))
    }
    return (
        <div className={Styles.setting_page}>
            {/* Video Input */}
            <div className={Styles.video_input}>
                <div className={Styles.setting_title}>이미지</div>
                <div className={Styles.video_setting}>
                    {settingData.images.map((srcName, ind) => (
                        <ImgInput
                            key={ind}
                            imageIndex={ind}
                            srcName={srcName}
                            setImgUrl={setImgUrl}
                        />
                    ))}
                </div>
            </div>

            {/* Message Input */}
            <div className={Styles.message_input}>
                <div className={Styles.setting_title}>메시지</div>
                <div onClick={onMessageBarClick} className={Styles.message_bar}>
                    {settingData.message.map((v, ind) => (
                        <MessageBtn
                            index={ind}
                            key={ind}
                            focus={messageFocus}
                        />
                    ))}
                </div>
            </div>

            {/* Message Setting */}
            <div className={Styles.message_setting}>
                <div className={Styles.setting_title}>
                    메시지 {messageFocus + 1}
                </div>
                <MessageHandler
                    changeControlInfo={changeControlInfo}
                    setLetterData={setLetterData}
                    setIsModal={setIsModal}
                    {...settingData.message[messageFocus]}
                />
            </div>
        </div>
    )
}
