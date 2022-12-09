import React, { useContext } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import MainPageHeader from "../../Components/MainPageHeader"
import MainPageUserSection from "../../Components/MainPageUserSection"
import TechSection from "../../Components/TechSection"
import { UserContext } from "../../contexts/UserContext"

import MainPageContainer from "./styles"

const MainPage = () => {

    const { loginStatus } = useContext(UserContext)

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
            <MainPageUserSection />
            
            <TechSection />
        </main>

    </MainPageContainer>

)

}

export default MainPage