import React from "react"

import logoImg from "../../assets/Logo.svg"

import RegisterPageContainer from "./styles"

import RegisterForm from "../../Components/RegisterForm"
import BackToLoginBttn from "../../Components/BackToLoginBttn"

const RegisterPage = ({newUser, setNewUser}) => {

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

                <RegisterForm newUser={newUser} setNewUser={setNewUser}/>
            </div>

        </div>
    </RegisterPageContainer>
)

}

export default RegisterPage