import React, { useState, useEffect } from 'react'
import Style from './Comp4.module.css'

const Comp4 = ({ showMessage4, sceneData }) => {
  const [message, setMessage] = useState('')
  const [messageStyle, setMessageStyle] = useState({})

  useEffect(() => {
    if (sceneData && sceneData.s4) {
      const messageData = sceneData.s4.messages[0]
      setMessage(messageData.context)
      setMessageStyle({
        fontSize: messageData.size === 'medium' ? '12px' : '24px',
        color: messageData.color,
      })
    }
  }, [sceneData])

  const message4Class = showMessage4 ? Style.fadeIn : ''

  return (
    <div className={Style.container}>
      <div className={`${Style.message} ${message4Class}`} style={messageStyle}>
        {message}
      </div>
    </div>
  )
}

export default Comp4
