import React, { useState, useEffect } from 'react'
import Style from './Comp4.module.css'
import dummyData from '../JBDummy.json'

const Comp4 = ({ showMessage4 }) => {
  const [message, setMessage] = useState('')
  const [messageStyle, setMessageStyle] = useState({})

  useEffect(() => {
    if (dummyData && dummyData.s4) {
      const messageData = dummyData.s4.messages[0]
      setMessage(messageData.context)
      setMessageStyle({
        fontSize: messageData.size === 'medium' ? '25px' : '50px',
        color: messageData.color,
      })
    }
  }, [])

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
