import React from 'react'
import Styles from './confirmmodal.module.css'
import Template0 from '../letterLists/preview0/Template0'
import Template1 from '../letterLists/preview1/Template1'
import Template2 from '../letterLists/preview2/Template2'
import Template3 from '../letterLists/preview3/Template3'

export default function ConfirmModal({
    sceneData,
    size,
    setIsModal,
    onCreateClick,
    isCreateLetter,
}) {
    const { type } = sceneData
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
                    {type === 0 && (
                        <Template0 sceneData={sceneData} size={size} />
                    )}
                    {type === 1 && (
                        <Template1 sceneData={sceneData} size={size} />
                    )}
                    {type === 2 && (
                        <Template2 sceneData={sceneData} size={size} />
                    )}
                    {type === 3 && (
                        <Template3 sceneData={sceneData} size={size} />
                    )}
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
