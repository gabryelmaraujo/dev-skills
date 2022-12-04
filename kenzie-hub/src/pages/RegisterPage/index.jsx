import React from "react"

import logoImg from "../../assets/Logo.svg"

import { toast } from 'react-toastify';

import RegisterPageContainer from "./styles"

import RegisterForm from "../../Components/RegisterForm"
import BackToLoginBttn from "../../Components/BackToLoginBttn"

const RegisterPage = () => {

    const registerNotify = (result) => {

        if(result === "success"){
            toast.success("Conta criada com sucesso!", {
                position: toast.POSITION.RIGHT_CENTER
              });
        }else if(result === "emailExists"){
            toast.error("Esse email já foi cadastrado!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
        }

    }

return (
    <RegisterPageContainer>
        <header className="registerPageHeader">
            <img src={logoImg} alt="" />

            <BackToLoginBttn text={"Voltar"}/>
        </header>

        <div className="registerPageMain">
            <div className="registerFormContainer">
                <header className="registerFormHeader">
                    <p>Crie sua conta</p>
                    <span>Rápido e grátis, vamos nessa</span>
                </header>

                <RegisterForm registerNotify={registerNotify}/>
            </div>

        </div>
    </RegisterPageContainer>
)

}

export default RegisterPage