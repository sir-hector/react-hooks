import React, { useEffect, useState } from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {
        console.log('Render')
        window.addEventListener('mousemove', logMousePosition)
    }, [])

    return (
        <div>HookMouse
            <div>
                x - {x}, y - {y}
            </div>
        </div>
        
    )
}

export default HookMouse