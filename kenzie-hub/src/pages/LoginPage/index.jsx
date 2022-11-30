import React from "react";

import "./styles"

import logoImg from "../../assets/Logo.svg"
import LoginForm from "../../Components/LoginForm";
import LoginPageContainer from "./styles";
import GoToRegisterBttn from "../../Components/GoToRegisterBttn";

const LoginPage = () => {

return (
    <LoginPageContainer>
        <div className="loginPageLogo">
            <img src={logoImg} alt="" />
        </div>

        <div className="loginPageMain">
            <div className="loginFormContainer">
                <header className="loginFormHeader">
                    <p>Login</p>
                </header>

                <LoginForm/>

                <footer className="loginFormFooter">
                    <div className="formFooterTitleDiv">
                        <p className="formFooterTitle">Ainda não possui uma conta?</p>
                    </div>

                    <GoToRegisterBttn/>
                </footer>
            </div>
        </div>
    </LoginPageContainer>
)

}

export default LoginPage