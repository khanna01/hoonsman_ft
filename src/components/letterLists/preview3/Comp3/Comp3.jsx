import React, { useState, useEffect } from 'react'
import Style from './Comp3.module.css'
import dummyData from '../JBDummy.json'

const Comp3 = ({
  active,
  showMessage1,
  showMessage2,
  showImage1,
  showImage2,
  showImage3,
}) => {
  const [images, setImages] = useState({})
  const [message1, setMessage1] = useState('')
  const [message1Style, setMessage1Style] = useState({})
  const [message2, setMessage2] = useState('')
  const [message2Style, setMessage2Style] = useState({})

  useEffect(() => {
    if (dummyData && dummyData.s3) {
      setImages({
        img4: dummyData.s3.imgs.img4,
        img5: dummyData.s3.imgs.img5,
        img6: dummyData.s3.imgs.img6,
      })
      const messageData1 = dummyData.s3.messages[0]
      const messageData2 = dummyData.s3.messages[1]
      setMessage1(messageData1.context)
      setMessage2(messageData2.context)
      setMessage1Style({
        fontSize: messageData1.size === 'medium' ? '25px' : '50px',
        color: messageData1.color,
      })
      setMessage2Style({
        fontSize: messageData2.size === 'medium' ? '25px' : '50px',
        color: messageData2.color,
      })
    }
  }, [])

  return (
    <div
      className={`${Style.container} ${active ? Style.active : Style.inactive}`}
    >
      <div
        className={`${Style.message1} ${showMessage1 ? Style.fadeIn : ''}`}
        style={message1Style}
      >
        {message1}
      </div>
      <div
        className={`${Style.message2} ${showMessage2 ? Style.fadeIn : ''}`}
        style={message2Style}
      >
        {message2}
      </div>
      <div className={Style.imageContainer}>
        <div className={`${Style.image1} ${showImage1 ? Style.fadeIn : ''}`}>
          {/* <img src={process.env.PUBLIC_URL + images.img4} alt="Image 1" /> */}
        </div>
        <div className={`${Style.image2} ${showImage2 ? Style.fadeIn : ''}`}>
          {/* <img src={process.env.PUBLIC_URL + images.img5} alt="Image 2" /> */}
        </div>
        <div className={`${Style.image3} ${showImage3 ? Style.fadeIn : ''}`}>
          {/* <img src={process.env.PUBLIC_URL + images.img6} alt="Image 3" /> */}
        </div>
      </div>
    </div>
  )
}

export default Comp3
