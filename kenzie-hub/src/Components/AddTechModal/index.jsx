import { react, useState } from "react"
import AddTechForm from "../AddTechForm"
import ModalStyles from "./styles"


const AddTechModal = () => {


return (
    <ModalStyles>
        <div className="addTechModalContainer">
            <header className="modalHeader">
                <p className="modalTitle">Cadastrar Tecnologia</p>
                <button className="modalClose">X</button>
            </header>
            <main className="modalMain">
                <AddTechForm />
            </main>
        </div>
    </ModalStyles>
)

}

export default AddTechModal