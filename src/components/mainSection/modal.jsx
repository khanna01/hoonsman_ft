import React from 'react'
import Styles from './modal.module.css'
import { useNavigate } from 'react-router-dom'
import Template1 from '../letterLists/preview1/Template1'
import Template3 from '../letterLists/preview3/Template3'
import Template2 from '../letterLists/preview2/Template2'
import Template0 from '../letterLists/preview0/Template0'
import SampleData from '../../constants/sampleData'

const defaultSize = {
    width: 224,
    height: 400,
}

function Modal({ modalInfo, setModalInfo }) {
    const { id, type, title, description } = modalInfo

    const onCloseClick = () => {
        setModalInfo(null)
    }

    const navigate = useNavigate()

    const onCreateClick = () => {
        navigate('/create', {
            state: {
                type,
            },
        })
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.wrapper}>
                <div className={Styles.closebtn} onClick={onCloseClick}>
                    {' '}
                    <div className={Styles.line1}> </div>
                    <div className={Styles.line2}> </div>
                </div>
                <div className={Styles.left}>
                    {id === 1 && (
                        <Template1
                            size={defaultSize}
                            sceneData={SampleData[1]}
                        />
                    )}
                    {/* {modalInfo.id === 2 && <Template3 />} */}
                    {id === 3 && (
                        <Template2
                            size={defaultSize}
                            sceneData={SampleData[2]}
                        />
                    )}
                    {id === 4 && (
                        <Template0
                            size={defaultSize}
                            sceneData={SampleData[0]}
                        />
                    )}
                </div>
                <div className={Styles.right}>
                    <div className={Styles.title}>{title}</div>
                    <div className={Styles.description}>{description}</div>
                    <div className={Styles.btn_part}>
                        <button
                            onClick={() => onCreateClick(id)}
                            className={Styles.applyButton}
                        >
                            생성하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
