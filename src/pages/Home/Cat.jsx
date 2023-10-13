import React from "react"
import {useEffect, useState, useRef} from "react"

import cat from "../../images/cat.png"

function Cat() {
    const [eyePos, setEyePos] = useState({
        left: "42px",
        right: "78px",
        top: "38px"
    })

    const mapNum = (num, inMin, inMax, outMin, outMax) => (
        (num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
        const catRef = useRef()

    useEffect(() => {
        const catX = catRef.current.offsetLeft
        const catY = catRef.current.offsetTop
        const catWidth = catRef.current.offsetWidth
        const catHeight = catRef.current.offsetHeight

        const handleMouseMove = (ev) => {
            let mouseX = ev.x
            let mouseY = ev.y
            let offsetX = mouseX - catX + 60
            let offsetY = mouseY - catY + 48

            if (offsetX < 0) offsetX = 0
            if (offsetX > catWidth) offsetX = catWidth
            if (offsetY < 0) offsetY = 0
            if (offsetY > catHeight) offsetY = catHeight
                
            let left = mapNum(offsetX, 0, catWidth, 34, 50)
            let right = mapNum(offsetX, 0, catWidth, 70, 86)
            let top = mapNum(offsetY, 0, catHeight, 34, 44)

            setEyePos({left: `${left}px`, right: `${right}px`, top: `${top}px`})
        }
    
        window.addEventListener("mousemove", handleMouseMove)
    
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    
    const styleLeft={
        left: eyePos.left,
        top: eyePos.top
    }
    const styleRight={
        left: eyePos.right,
        top: eyePos.top
    }
    
    return (
        <div className="cat" ref={catRef}>
            <img src={cat} alt="cat" />
            <div className="eye eye--left" style={styleLeft}></div>
            <div className="eye eye--right" style={styleRight}></div>
        </div>
    )
}

export default Cat