export const mapType0ToSettingData = (letter) => {
    const newSettingData = []
    Object.keys(letter).forEach((k) => {
        if (k === 'type') return
        const newScene = {
            images: [],
            message: [],
        }
        Object.keys(letter[k].imgs).forEach((imgk) => {
            newScene.images.push(letter[k].imgs[imgk])
        })
        letter[k].messages.forEach((m) => {
            newScene.message.push({ ...m })
        })
        newSettingData.push(newScene)
    })
    return newSettingData
}

export const mapSettingDataToType0 = (settingData, letter) => {
    const scenesData = [settingData[0], settingData[1], settingData[2]]
    const letterImgKeys = [
        Object.keys(letter.s1.imgs),
        Object.keys(letter.s2.imgs),
        Object.keys(letter.s3.imgs),
    ]

    const newLetter = {
        type: 0,
        s1: {
            imgs: {}, // intro 1 2 3 4
            messages: [], // 4
        },
        s2: {
            imgs: {}, // 5 6
            messages: [], //4
        },
        s3: {
            imgs: {}, // 7 8
            messages: [], // 2
        },
    }

    scenesData.forEach((sceneData, index) => {
        newLetter[`s${index + 1}`].messages = [...sceneData.message]
    })

    letterImgKeys.forEach((imgKeys, sIndex) => {
        imgKeys.forEach((imgKey, imgIndex) => {
            newLetter[`s${sIndex + 1}`].imgs[imgKey] =
                scenesData[sIndex].images[imgIndex]
        })
    })

    return newLetter
}

export const mapType1ToSettingData = (letter) => {
    return letter.scenes.map((scene) => ({
        images: scene.images ? Object.values(scene.images) : [],
        message: scene.messages
            ? scene.messages.map((msg) => ({
                  content: msg.text || '',
                  size: msg.size || 'medium',
                  color: msg.color || 'white',
              }))
            : [],
    }))
}

export const mapSettingDataToType1 = (settingData) => {
    console.log(settingData)
    return {
        type: 1,
        scenes: settingData.map((scene) => ({
            images: scene.images.reduce((acc, img, index) => {
                acc[`image${index + 1}`] = img
                return acc
            }, {}),
            messages: scene.message.map((msg) => ({
                text: msg.content,
                size: msg.size,
                color: msg.color,
            })),
        })),
    }
}

export const mapType2ToSettingData = (letter) => {
    const newSettingData = []
    Object.keys(letter).forEach((s) => {
        if (s === 'type') return
        const newScene = {
            images: [],
            message: [],
        }

        Object.keys(letter[s].image).forEach((imgKey) => {
            newScene.images.push(letter[s].image[imgKey].path)
        })

        Object.keys(letter[s].message).forEach((m) => {
            newScene.message.push(letter[s].message[m])
        })

        newSettingData.push(newScene)
    })

    return newSettingData
}

export const mapSettingDataToType2 = (settingData) => {
    const newDummy = {
        type: 2,
        scene1: {
            image: {},
            message: {},
        },
        scene2: {
            image: {},
            message: {},
        },
        scene3: {
            image: {},
            message: {},
        },
        scene4: {
            image: {},
            message: {},
        },
    }

    settingData.forEach((sceneData, ind) => {
        sceneData.images.forEach((img, index) => {
            newDummy[`scene${ind + 1}`].image[`${index + 1}`] = {
                path: img,
            }
        })
    })

    settingData.forEach((sceneData, ind) => {
        sceneData.message.forEach((m, index) => {
            newDummy[`scene${ind + 1}`].message[`${index + 1}`] = { ...m }
        })
    })

    console.log(newDummy)
    return newDummy
}

export const mapSettingDataToType3 = (settingDataSP) => {
    const jbdummyData = {
        type: 3,
    }
    let imgIndex = 0

    settingDataSP.forEach((section, index) => {
        const sectionKey = `s${index + 1}`
        if (index === 3) {
            jbdummyData[sectionKey] = {
                messages: [],
            }
        } else {
            jbdummyData[sectionKey] = {
                imgs: {},
                messages: [],
            }
        }

        section.images.forEach((img) => {
            let imgKey
            if (imgIndex === 0) {
                imgKey = 'intro'
                imgIndex++
            } else {
                imgKey = `img${imgIndex}`
                imgIndex++
            }
            jbdummyData[sectionKey].imgs[imgKey] = img
        })

        section.message.forEach((msg) => {
            jbdummyData[sectionKey].messages.push({
                context: msg.content,
                size: msg.size || 'medium',
                color: msg.color || 'white',
            })
        })
    })
    console.log(jbdummyData)
    return jbdummyData
}

export const mapType3ToSettingData = (jbdummyData) => {
    const settingDataSP = []

    Object.keys(jbdummyData).forEach((sectionKey) => {
        if (sectionKey === 'type') return
        const section = jbdummyData[sectionKey]
        const images = section.imgs ? Object.values(section.imgs) : []
        const messages = section.messages.map((msg) => ({
            content: msg.context,
            size: msg.size || 'medium',
            color: msg.color || 'white',
        }))

        settingDataSP.push({
            images,
            message: messages,
        })
    })

    console.log(settingDataSP)

    return settingDataSP
}
