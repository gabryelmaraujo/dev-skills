import React, { useContext } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import MainPageHeader from "../../Components/MainPageHeader"
import MainPageUserSection from "../../Components/MainPageUserSection"
import { UserContext } from "../../contexts/UserContext"

import MainPageContainer from "./styles"

const MainPage = () => {
    
    const userContext = useContext(UserContext)


    const navigate = useNavigate()
    
    useEffect(()=>{
        
        if(!userContext.loginStatus){
          
            navigate("/")

        }

    }, [userContext.loginStatus])

return(

    <MainPageContainer className="MainPageContainer">

        <MainPageHeader />

        <main className="MainPageMain">
            <MainPageUserSection />
            
            <section className="developingSection">
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
        </main>

    </MainPageContainer>

)

}

export default MainPage