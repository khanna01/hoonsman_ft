import React from 'react'
import Styles from './messagehandler.module.css'

const SizeOptions = [
    { val: 'small', text: '작게' },
    { val: 'medium', text: '중간' },
    { val: 'large', text: '크게' },
]

const ColorOptions = [
    { val: 'white', text: 'white' },
    { val: 'black', text: 'black' },
]

const OptBtn = ({ attr, val, text, now, setVal }) => {
    const onBtnClick = () => {
        setVal(attr, val)
    }
    return (
        <div
            onClick={onBtnClick}
            className={`${now === val && Styles.opt_focus} ${Styles.opt}`}
        >
            {text}
        </div>
    )
}

export default function MessageHandler({
    content,
    setLetterData,
    setIsModal,
    size,
    color,
    changeControlInfo,
    isAILoading,
    aiKeywords,
    keywordIndex,
    moveAiMessageIndex,
}) {
    const onRecommendClick = () => {
        const recommendedMessage = aiKeywords[keywordIndex]
        changeControlInfo({
            content: recommendedMessage,
        })
    }

    const onLeftBtnClick = () => {
        moveAiMessageIndex('prev')
    }

    const onRightBtnClick = () => {
        moveAiMessageIndex('next')
    }

    const onTempSaveClick = () => {
        setLetterData()
    }

    const onSaveClick = () => {
        setIsModal(true)
    }

    const setVal = (attr, val) => {
        changeControlInfo({
            [attr]: val,
        })
    }

    const onContentChange = (e) => {
        changeControlInfo({
            content: e.currentTarget.value,
        })
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 크기</div>
                    <div className={Styles.option_bar}>
                        {SizeOptions.map((option, index) => (
                            <OptBtn
                                key={index}
                                now={size}
                                attr="size"
                                {...option}
                                setVal={setVal}
                            />
                        ))}
                    </div>
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>글자 색</div>
                    <div className={Styles.option_bar}>
                        {ColorOptions.map((option, index) => (
                            <OptBtn
                                key={index}
                                now={color}
                                attr="color"
                                {...option}
                                setVal={setVal}
                            />
                        ))}
                    </div>
                </div>
                <div className={Styles.message_option}>
                    <div className={Styles.title}>저장</div>
                    <div className={Styles.option_bar}>
                        <div onClick={onTempSaveClick} className={Styles.opt}>
                            적용
                        </div>
                        <div onClick={onSaveClick} className={Styles.opt}>
                            생성
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.input_container}>
                    <textarea
                        name="message"
                        id="message"
                        cols="20"
                        rows="6"
                        placeholder="입력해주세용"
                        value={content}
                        onChange={onContentChange}
                    ></textarea>
                    <div className={Styles.recommend_container}>
                        <div className={Styles.recommend_title}>
                            이런 문구는 어때영??
                        </div>
                        <div
                            onClick={onRecommendClick}
                            className={Styles.recommend_content}
                        >
                            {isAILoading
                                ? 'AI가 추천 문구를 생성 하고 있어요!'
                                : aiKeywords[keywordIndex]}
                        </div>
                        <div className={Styles.recommend_switching_bar}>
                            <div
                                onClick={onLeftBtnClick}
                                className={Styles.bar_btn}
                            >
                                {'<'}
                            </div>
                            <div className={Styles.recommend_count}>
                                {keywordIndex + 1} / {aiKeywords.length}
                            </div>
                            <div
                                onClick={onRightBtnClick}
                                className={Styles.bar_btn}
                            >
                                {'>'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
