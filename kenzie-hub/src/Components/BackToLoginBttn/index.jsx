import React, { useContext } from "react"
import { useNavigate, useNavigationType } from "react-router-dom"
import { UserContext } from "../../contexts/UserContext"
import BackToLoginBttnStyles from "./styles"


const BackToLoginBttn = ({text}) => {

    const userContext = useContext(UserContext)

    const navigate = useNavigate()

    function logout(){

        navigate("/")
        
        userContext.setLoggedUser({})

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