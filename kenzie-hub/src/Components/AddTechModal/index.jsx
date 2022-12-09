
import { react, useContext, useState, useEffect } from "react"
import { TechContext } from "../../contexts/TechContext"
import AddTechForm from "../AddTechForm"
import ModalStyles from "./styles"


const AddTechModal = () => {

    const { modalOpen, setModalOpen } = useContext(TechContext)

return (
    <ModalStyles>
        <div className="addTechModalContainer">
            <header className="modalHeader">
                <p className="modalTitle">Cadastrar Tecnologia</p>
                <button className="modalClose" onClick={()=>{
                    setModalOpen(false)
                }}>X</button>
            </header>
            <main className="modalMain">
                <AddTechForm />
            </main>
        </div>
    </ModalStyles>
)

}

export default AddTechModal