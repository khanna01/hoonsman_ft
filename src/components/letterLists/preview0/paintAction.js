export const paintLRInOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawInStart, drawInEnd] = rangeInfo.drawIn
    const [drawOutStart, drawOutEnd] = rangeInfo.drawOut
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    const paintingBorder = (drawInEnd + drawOutStart) / 2
    if (sRatio < paintingBorder) {
        let drawCX =
            (canvasWidth * (sRatio - drawInStart)) / (drawInEnd - drawInStart)

        let drawIX =
            ((drawRangeX2 - drawRangeX1) * (sRatio - drawInStart)) /
            (drawInEnd - drawInStart)
        if (drawCX < 0) drawCX = 0
        else if (drawCX > canvasWidth) drawCX = canvasWidth

        if (drawIX < 0) drawIX = 0
        else if (drawIX > drawRangeX2 - drawRangeX1)
            drawIX = drawRangeX2 - drawRangeX1
        ctx.drawImage(
            paintImg,
            drawRangeX1,
            drawRangeY1,
            drawIX,
            drawRangeY2 - drawRangeY1,
            0,
            0,
            drawCX,
            canvasHeight,
        )
    } else {
        let drawCX =
            (canvasWidth * (sRatio - drawOutStart)) /
            (drawOutEnd - drawOutStart)
        let drawIX =
            ((drawRangeX2 - drawRangeX1) * (sRatio - drawOutStart)) /
            (drawOutEnd - drawOutStart)
        if (drawCX < 0) drawCX = 0
        else if (drawCX > canvasWidth) drawCX = canvasWidth

        if (drawIX < 0) drawIX = 0
        else if (drawIX > drawRangeX2 - drawRangeX1)
            drawIX = drawRangeX2 - drawRangeX1
        ctx.drawImage(
            paintImg,
            drawRangeX1 + drawIX,
            drawRangeY1,
            drawRangeX2 - (drawRangeX1 + drawIX),
            drawRangeY2 - drawRangeY1,
            drawCX,
            0,
            canvasWidth - drawCX,
            canvasHeight,
        )
    }
}

export const paintMidIn = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawMidInStart, drawMidInEnd] = rangeInfo.drawMidIn
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    // 위, 아래로 1% - 총 2% 그리기
    const paintingBorderRange = 1

    let drawRatio = (sRatio - drawMidInStart) / (drawMidInEnd - drawMidInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const CDX = drawRatio * canvasWidth
    const drawCDY =
        canvasHeight / 2 - (canvasHeight / 100) * paintingBorderRange
    const CDY = (canvasHeight / 100) * (paintingBorderRange * 2)
    const PDX = drawRatio * (drawRangeX2 - drawRangeX1)
    const PSY =
        (drawRangeY1 + drawRangeY2) / 2 -
        ((drawRangeY1 + drawRangeY2) / 100) * paintingBorderRange
    const PDY = ((drawRangeY1 + drawRangeY2) / 100) * (paintingBorderRange * 2)
    ctx.drawImage(paintImg, drawRangeX1, PSY, PDX, PDY, 0, drawCDY, CDX, CDY)
}

export const paintMidToAll = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawInStart, drawInEnd] = rangeInfo.drawMidToAllIn
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    // 위, 아래로 1% - 총 2% 그리기
    const paintingBorderRange = 1

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1
    const drawPicDefaultHeight =
        ((drawRangeY2 - drawRangeY1) / 100) * paintingBorderRange
    const drawYPStart = (drawRangeY1 + drawRangeY2) / 2 - drawPicDefaultHeight
    const drawYPDefaultRange = drawPicDefaultHeight * 2

    const drawYPRange = (drawRangeY2 + drawRangeY1) / 2 - drawPicDefaultHeight

    const drawCanvDefaultHeight = (canvasHeight / 100) * paintingBorderRange
    const drawYCStart = canvasHeight / 2 - drawCanvDefaultHeight
    const drawYCDefaultRange = drawCanvDefaultHeight * 2

    const drawYCRange = canvasHeight / 2 - drawCanvDefaultHeight

    const drawYP = drawYPRange * drawRatio
    const drawYC = drawYCRange * drawRatio

    // 윗 부분 그리기
    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawYPStart - drawYP,
        drawRangeX2 - drawRangeX1,
        drawYP + drawYPDefaultRange,
        0,
        drawYCStart - drawYC,
        canvasWidth,
        drawYC + drawYCDefaultRange,
    )

    // 아랫 부분 그리기
    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawYPStart,
        drawRangeX2 - drawRangeX1,
        drawYP + drawYPDefaultRange,
        0,
        drawYCStart,
        canvasWidth,
        drawYCDefaultRange + drawYC,
    )
}

export const paintBottomUpOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
) => {
    const [drawInStart, drawInEnd] = rangeInfo.drawBottomUpOut
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)
    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const drawPRangeX = drawRangeX2 - drawRangeX1
    const drawPRangeY = drawRangeY2 - drawRangeY1

    const paintPSY = drawPRangeY - drawRatio * drawPRangeY
    const paintCSY = canvasHeight - drawRatio * canvasHeight

    ctx.drawImage(
        paintImg,
        drawRangeX1,
        drawRangeY1,
        drawPRangeX,
        paintPSY,
        0,
        0,
        canvasWidth,
        paintCSY,
    )
}

export const paintLRPartIn = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
    range,
) => {
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    const [drawInStart, drawInEnd] = drawRange

    const PXRange = drawRangeX2 - drawRangeX1
    const PDY = (drawRangeY2 - drawRangeY1) * range
    const PSX = drawRangeX1
    const PSY = drawRangeY1 + (drawRangeY2 - drawRangeY1) * from

    const CSY = canvasHeight * from
    const CDY = canvasHeight * range

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)
    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PDX = PXRange * drawRatio
    const CDX = canvasWidth * drawRatio

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, 0, CSY, CDX, CDY)
}

export const paintLRPartOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
    range,
) => {
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    const [drawInStart, drawInEnd] = drawRange

    const PXRange = drawRangeX2 - drawRangeX1
    const PDY = (drawRangeY2 - drawRangeY1) * range
    const PSY = drawRangeY1 + (drawRangeY2 - drawRangeY1) * from

    const CSY = canvasHeight * from
    const CDY = canvasHeight * range

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)
    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PSX = drawRangeX1 + drawRatio * PXRange
    const PDX = PXRange - PXRange * drawRatio
    const CSX = canvasWidth * drawRatio
    const CDX = canvasWidth - canvasWidth * drawRatio

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, CSX, CSY, CDX, CDY)
}

export const paintBottomPartIn = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
    range,
) => {
    const [drawInStart, drawInEnd] = drawRange
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PSX = drawRangeX1 + (drawRangeX2 - drawRangeX1) * from
    const PDX = (drawRangeX2 - drawRangeX1) * range
    const PSY = drawRangeY1

    const CSX = canvasWidth * from
    const CDX = canvasWidth * range
    const CSY = 0

    const PDY = (drawRangeY2 - drawRangeY1) * drawRatio
    const CDY = canvasHeight * drawRatio

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, CSX, CSY, CDX, CDY)
}

export const paintVerticalPartIn = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
    range,
) => {
    const [drawInStart, drawInEnd] = drawRange
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PSX =
        (1 - drawRatio) * (drawRangeX2 - drawRangeX1) * from + drawRangeX1
    const PSY = drawRangeY1
    const PDX = (drawRangeX2 - drawRangeX1) * range
    const PDY = drawRangeY2 - drawRangeY1
    const CSX = (1 - drawRatio) * from * canvasWidth
    const CSY = 0
    const CDX = range * canvasWidth
    const CDY = canvasHeight

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, CSX, CSY, CDX, CDY)
}

export const paintLRCustomIn = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
) => {
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    const [drawInStart, drawInEnd] = drawRange

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PSX = drawRangeX1
    const PSY = drawRangeY1
    const PDX =
        (drawRangeX2 - drawRangeX1) * from +
        drawRatio * (1 - from) * (drawRangeX2 - drawRangeX1)
    const PDY = drawRangeY2 - drawRangeY1

    const CSX = 0
    const CDX = canvasWidth * from + drawRatio * (1 - from) * canvasWidth
    const CSY = 0
    const CDY = canvasHeight

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, CSX, CSY, CDX, CDY)
}

export const paintLRCustomOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
) => {
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY
    const [drawInStart, drawInEnd] = drawRange

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PSX =
        drawRangeX1 + drawRatio * (drawRangeX2 - drawRangeX1) * (1 - from)
    const PSY = drawRangeY1
    const PDX =
        (drawRangeX2 - drawRangeX1) * (1 - from) -
        drawRatio * (drawRangeX2 - drawRangeX1) * (1 - from) +
        (drawRangeX2 - drawRangeX1) * from
    const PDY = drawRangeY2 - drawRangeY1

    const CSX = canvasWidth * (1 - from) * drawRatio
    const CSY = 0
    const CDX =
        canvasWidth * from +
        (1 - from) * (canvasWidth - canvasWidth * drawRatio)
    const CDY = canvasHeight

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, CSX, CSY, CDX, CDY)
}

export const paintBottomPartOut = (
    sRatio,
    ctx,
    rangeInfo,
    paintImg,
    canvasWidth,
    canvasHeight,
    drawRange,
    from,
    range,
) => {
    const [drawInStart, drawInEnd] = drawRange
    const [drawRangeX1, drawRangeX2] = rangeInfo.drawRangeX
    const [drawRangeY1, drawRangeY2] = rangeInfo.drawRangeY

    let drawRatio = (sRatio - drawInStart) / (drawInEnd - drawInStart)

    if (drawRatio < 0) drawRatio = 0
    else if (drawRatio > 1) drawRatio = 1

    const PSX = drawRangeX1 + (drawRangeX2 - drawRangeX1) * from
    const PSY = drawRangeY1
    const PDX = (drawRangeX2 - drawRangeX1) * range
    const PDY = (drawRangeY2 - drawRangeY1) * (1 - drawRatio)
    const CSX = canvasWidth * from
    const CSY = 0
    const CDX = canvasWidth * range
    const CDY = canvasHeight - canvasHeight * drawRatio

    ctx.drawImage(paintImg, PSX, PSY, PDX, PDY, CSX, CSY, CDX, CDY)
}
