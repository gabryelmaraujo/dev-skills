import React, { useContext } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AddTechModal from "../../Components/AddTechModal"

import MainPageHeader from "../../Components/MainPageHeader"
import MainPageUserSection from "../../Components/MainPageUserSection"
import TechSection from "../../Components/TechSection"
import { TechContext} from "../../contexts/TechContext"
import { UserContext } from "../../contexts/UserContext"

import MainPageContainer from "./styles"

const MainPage = () => {

    const { loginStatus } = useContext(UserContext)
    const { modalOpen } = useContext(TechContext)
    console.log(modalOpen)

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
            { modalOpen ? (<AddTechModal />) : ("")}
            
                <MainPageUserSection />
                
                <TechSection />
            </main>

    </MainPageContainer>

)

}

export default MainPage