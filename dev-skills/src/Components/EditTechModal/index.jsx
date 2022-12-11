
import { react, useContext, useState, useEffect } from "react"
import { TechContext } from "../../contexts/TechContext"
import EditTechForm from "../EditTechForm"
import ModalStyles from "./styles"


const EditTechModal = () => {

    const { setEditTechOpen } = useContext(TechContext)

return (
    <ModalStyles>
        <div className="addTechModalContainer">
            <header className="modalHeader">
                <p className="modalTitle">Editar Tecnologia</p>
                <button className="modalClose" onClick={()=>{
                    setEditTechOpen(false)
                }}>X</button>
            </header>
            <main className="modalMain">
                <EditTechForm />
            </main>
        </div>
    </ModalStyles>
)

}

export default EditTechModal