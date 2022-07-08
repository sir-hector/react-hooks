import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
    const [counter, setCounter] = useState(0)
    const tick = () => {
        setCounter(prev => prev +1)
    }

    useEffect(()=> {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

  return (
    <div>{counter}</div>
  )
}

export default IntervalHookCounter