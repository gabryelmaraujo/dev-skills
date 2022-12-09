import { useState } from "react"
import Modal from "react-modal"
import AddTechBttn from "../AddTechBttn"
import TechList from "../TechList"
import TechSectionStyles from "./styles"


const TechSection = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function openModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

return(
    <TechSectionStyles>
        <header className="techSectionHeader">
            <p className="techHeaderTitle">Tecnologias</p>
            <AddTechBttn openModal={openModal} />
        </header>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <h1>Funcionou</h1>
            <button className="closeModal" onClick={closeModal}></button>
        </Modal>
        <TechList />
    </TechSectionStyles>
)

}

export default TechSection