import React, { useContext } from 'react'
import { AdditionContext } from '../Create_Context/CreateContext'

function ContextAccessingPages() {
    const { add ,addition } = useContext(AdditionContext)
  return (
    <div>
        <button onClick={()=>addition()}>Add</button>
        <>{add}</>
    </div>
  )
}

export default ContextAccessingPages