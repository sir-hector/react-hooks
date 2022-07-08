import React, { useReducer } from 'react'


const initalState = 0;
const reducer = (state, action) => {    
    switch(action){
        case 'increase':
            return state +1
        case 'decrease':
            return state -1
        case 'reset':
            return initalState
        default:
            return state
    }
}

export const CounterReducer = () => {
    const [value,dispatch] = useReducer (reducer, initalState)
  return (
    <div>
        <button onClick={()=>dispatch('increase')}>increase</button>
        <button onClick={()=>dispatch('decrease')}>decrease</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
        {value}
    </div>
  )
}
