import React, { useContext } from "react"
import { useNavigate, useNavigationType } from "react-router-dom"
import { TechContext } from "../../contexts/TechContext"
import { UserContext } from "../../contexts/UserContext"
import BackToLoginBttnStyles from "./styles"


const BackToLoginBttn = ({text}) => {

    const { setLoggedUser } = useContext(UserContext)
    const { setTechs } = useContext(TechContext)

    const navigate = useNavigate()

    function logout(){

        navigate("/")
        
        setLoggedUser({})
        setTechs([])

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