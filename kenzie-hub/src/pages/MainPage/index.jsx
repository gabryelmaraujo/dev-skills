import React, { useContext } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AddTechModal from "../../Components/AddTechModal"
import EditTechModal from "../../Components/EditTechModal"

import MainPageHeader from "../../Components/MainPageHeader"
import MainPageUserSection from "../../Components/MainPageUserSection"
import TechSection from "../../Components/TechSection"
import { TechContext} from "../../contexts/TechContext"
import { UserContext } from "../../contexts/UserContext"

import MainPageContainer from "./styles"

const MainPage = () => {

    const { loginStatus } = useContext(UserContext)
    const { addTechOpen, editTechOpen } = useContext(TechContext)

    const navigate = useNavigate()
    
    useEffect(()=>{
        
        if(!loginStatus){
          
            navigate("/")

        }

    }, [loginStatus, navigate])

return(

    <MainPageContainer className="MainPageContainer">
            <MainPageHeader />


            <main className="MainPageMain">
            { addTechOpen ? (<AddTechModal />) : ("")}
            { editTechOpen ? (<EditTechModal />) : ("") }
            
                <MainPageUserSection />
                
                <TechSection />
            </main>

    </MainPageContainer>

)

}

export default MainPage