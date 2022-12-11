import React from "react"

import { useNavigate } from "react-router-dom"

const GoToRegisterBttn = () => {

    const navigate = useNavigate()

return (

    <>
        <button className="goToRegisterBttn" onClick={()=>{
            navigate("/register")
        }} >Cadastre-se</button>
    </>

)

}

export default GoToRegisterBttn