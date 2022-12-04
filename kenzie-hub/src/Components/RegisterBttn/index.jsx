import React from "react"

import { useNavigate } from "react-router-dom";

const RegisterButton = ({registerStatus}) => {

    const navigate = useNavigate()

return(
    <>
        <button className="registerBttn" onClick={ ()=>{
            if(registerStatus){
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            }
        } } >Cadastrar</button>
    </>
)

}

export default RegisterButton