
import { useContext } from "react"
import { useEffect } from "react"
import { TechContext } from "../../contexts/TechContext"
import instance from "../../services/api"
import TechCard from "../TechCard"
import TechListStyles from "./styles"

const TechList = () => {

    const { techs } = useContext(TechContext)

return(
    <TechListStyles className="techList">
        {
            techs.map((tech)=>{

                const techName = tech.title
                const techId = tech.id
                const techLevel = tech.status
                
                return(
                    <TechCard key={techId} techName={techName} techId={techId} techLevel={techLevel}/>
                )
            })
        }
    </TechListStyles>
)

}

export default TechList