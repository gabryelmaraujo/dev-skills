import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import MainPageHeader from "../../Components/MainPageHeader"
import MainPageUserSection from "../../Components/MainPageUserSection"

import MainPageContainer from "./styles"

const MainPage = ({loggedUser, setLoggedUser, loginStatus, setLoginStatus, page, setPage}) => {
    

    const navigate = useNavigate()
    
    useEffect(()=>{
        
        if(!loginStatus){
          
            navigate("/")

        }

    }, [loginStatus])

return(

    <MainPageContainer className="MainPageContainer">

        <MainPageHeader loggedUser={loggedUser} setLoggedUser={setLoggedUser} loginStatus={loginStatus} setLoginStatus={setLoginStatus} page={page} setPage={setPage}/>

        <main className="MainPageMain">
            <MainPageUserSection loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            
            <section className="developingSection">
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
        </main>

    </MainPageContainer>

)

}

export default MainPage