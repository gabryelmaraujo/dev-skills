import React from "react"

import { useNavigate } from "react-router-dom";

const RegisterButton = ({registerStatus}) => {

    const navigate = useNavigate()

return(
    <>
        <button className="registerBttn" >Cadastrar</button>
    </>
)

}

export default RegisterButton