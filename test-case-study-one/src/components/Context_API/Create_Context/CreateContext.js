import { createContext, useState } from "react"

export const AdditionContext = createContext()

function CreateContextProvider({ children }) {
    const [add, setAdd] = useState(0)

    const addition = () => {
        setAdd((prevAdd)=> prevAdd + 1)
    }
  return (
    <>
    <AdditionContext.Provider value={{add,addition}}>
        {children}
    </AdditionContext.Provider>
    </>
  )
}

export default CreateContextProvider