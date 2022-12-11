import { useContext } from "react"
import { useState } from "react"
import ReactModal from "react-modal"
import { TechContext } from "../../contexts/TechContext"
import instance from "../../services/api"
import AddTechStyles from "./styles"


const AddTechBttn = () => {

    const { setAddTechOpen } = useContext(TechContext)

return(
    <AddTechStyles onClick={()=>{
        setAddTechOpen(true)
    }}>
        +
    </AddTechStyles>
)

}

export default AddTechBttn