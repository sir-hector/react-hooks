import React, {useState} from 'react'
import HookMouse from './HookMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
    <button onClick={()=>setDisplay(!display)}> Toogle mouse Hook</button>
    {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer