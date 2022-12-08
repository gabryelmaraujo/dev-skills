import AddTechBttn from "../AddTechBttn"
import TechList from "../TechList"
import TechSectionStyles from "./styles"


const TechSection = () => {

return(
    <TechSectionStyles>
        <header className="techSectionHeader">
            <p className="techHeaderTitle">Tecnologias</p>
            <AddTechBttn />
        </header>

        <TechList />
    </TechSectionStyles>
)

}

export default TechSection