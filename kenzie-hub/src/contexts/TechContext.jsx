import { useState, createContext } from "react";


export const TechContext = createContext({})

export const TechProvider = ({children}) => {

    const [modalOpen, setModalOpen] = useState(false)

return(
    <TechContext.Provider value={{
        modalOpen,
        setModalOpen
    }}>
        {children}
    </TechContext.Provider>
)

}