import React from "react"
import { useNavigate, useNavigationType } from "react-router-dom"
import BackToLoginBttnStyles from "./styles"


const BackToLoginBttn = ({text, loggedUser, setLoggedUser, loginStatus, setLoginStatus, page, setPage}) => {

    const navigate = useNavigate()

    function logout(){

        navigate("/")
        
        setLoggedUser({})

        localStorage.setItem("@KenzieHub/userToken", "")
        localStorage.setItem("@KenzieHub/userId", "")

    }

return(
        <BackToLoginBttnStyles>

            <button className="backToLoginBttn" onClick={()=>{
                logout()
            }}>{text}</button>

        </BackToLoginBttnStyles>
)

}

export default BackToLoginBttn