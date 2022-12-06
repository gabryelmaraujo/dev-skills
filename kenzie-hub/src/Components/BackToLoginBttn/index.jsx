import React from "react"
import { useNavigate, useNavigationType } from "react-router-dom"
import BackToLoginBttnStyles from "./styles"


const BackToLoginBttn = ({text, loggedUser, setLoggedUser, loginStatus, setLoginStatus, page, setPage}) => {

    const navigate = useNavigate()

    function logout(){

        navigate("/")
        
        setLoggedUser({})

        localStorage.clear()

    }

return(
        <BackToLoginBttnStyles>

            <button className="backToLoginBttn" onClick={()=>{
                if(text === "Voltar"){
                    navigate("/")
                }else{
                    logout()
                }

            }}>{text}</button>

        </BackToLoginBttnStyles>
)

}

export default BackToLoginBttn