import React from 'react'
import Styles from './confirmmodal.module.css'
import Preview from './previews/preview0/Preview'

export default function ConfirmModal({
    sceneData,
    size,
    setIsModal,
    onCreateClick,
    isCreateLetter,
}) {
    const onConfirmClick = () => {
        onCreateClick()
    }

    const onUpdateClick = () => {
        setIsModal(false)
    }
    return (
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.title}>생성 하시겠습니까?</div>
                <div className={Styles.view_container}>
                    <Preview sceneData={sceneData} size={size} />
                </div>
                <div className={Styles.select_bar}>
                    <div onClick={onConfirmClick} className={Styles.btn}>
                        생성하기
                    </div>
                    <div onClick={onUpdateClick} className={Styles.btn}>
                        수정하기
                    </div>
                </div>
            </div>
            {isCreateLetter && (
                <div className={Styles.loading_container}>
                    <div className={Styles.loading_spinner}> </div>
                </div>
            )}
        </div>
    )
}
