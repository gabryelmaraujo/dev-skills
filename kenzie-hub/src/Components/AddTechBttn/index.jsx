import { useState } from "react"
import ReactModal from "react-modal"
import instance from "../../services/api"
import AddTechStyles from "./styles"


const AddTechBttn = ({openModal}) => {



return(
    <AddTechStyles onClick={openModal}>
        +
    </AddTechStyles>
)

}

export default AddTechBttn