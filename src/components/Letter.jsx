import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Styles from './letter.module.css'
import Template0 from './letterLists/preview0/Template0'
import Template1 from './letterLists/preview1/Template1'
import Template2 from './letterLists/preview2/Template2'
import Template3 from './letterLists/preview3/Template3'
import { DBService } from '../services'
import { BASE_URL } from '../constants/config.js'

const dbService = new DBService(BASE_URL)

export default function Letter() {
    const [trigger, setTrigger] = useState(0)
    const [isLoading, setIsloading] = useState(true)
    const [size, setSize] = useState({ width: 300, height: 600 })
    const [letter, setLetter] = useState(false)
    const [type, setType] = useState(false)
    const { width, height } = size
    const params = useParams()
    const navigate = useNavigate()
    console.log(params)
    useEffect(() => {
        setSize({
            width: document.body.offsetWidth,
            height: window.innerWidth,
        })
        window.addEventListener('resize', () => {
            setTrigger((prev) => prev + 1)
        })
    }, [])

    useEffect(() => {
        if (!isLoading) return
        const { letterid } = params

        ;(async () => {
            console.log(letterid)
            // DB 요청
            const result = await dbService.readLetter(letterid)
            if (!result.status) navigate('/')

            setLetter({ ...result.data })
            setType(result.data.type)
            setIsloading(false)
        })()
    }, [isLoading])
    return (
        <div
            style={{
                width: width + 'px',
                height: height + 'px',
            }}
            className={Styles.container}
        >
            {type === 0 && <Template0 sceneData={letter} size={size} />}
            {type === 1 && <Template1 sceneData={letter} size={size} />}
            {type === 2 && <Template2 sceneData={letter} size={size} />}
            {type === 3 && <Template3 sceneData={letter} size={size} />}
        </div>
    )
}
