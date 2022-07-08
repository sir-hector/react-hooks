import React, {useContext} from 'react'
import { ExampleContext } from '../App'

export const ComponentA = () => {
   const user = useContext(ExampleContext)
  return (
   
    <div>ComponentA {user}</div>
  )
}
