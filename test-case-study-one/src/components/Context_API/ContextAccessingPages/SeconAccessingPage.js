import React, { useContext } from 'react'
import { AdditionContext } from '../Create_Context/CreateContext'

function SeconAccessingPage() {
    const {add} = useContext(AdditionContext)
  return (
    <div>
        <>SeconAccessingPage</>
        <>{add}</>
    </div>
  )
}

export default SeconAccessingPage