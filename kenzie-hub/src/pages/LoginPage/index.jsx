import React from "react";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import "./styles"

import logoImg from "../../assets/Logo.png"
import LoginForm from "../../Components/LoginForm";
import LoginPageContainer from "./styles";
import GoToRegisterBttn from "../../Components/GoToRegisterBttn";

const LoginPage = ({loggedUser, setLoggedUser, loginStatus, setLoginStatus}) => {

    const loginNotify = (result) =>{
        if(result === "success"){
            toast.success("Logou com sucesso!", {
                position: toast.POSITION.RIGHT_CENTER
              });
        }else{
            toast.error("Email ou senha incorreto!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
        }
    }

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

                <LoginForm loggedUser={loggedUser} setLoggedUser={setLoggedUser} loginStatus={loginStatus} setLoginStatus={setLoginStatus} loginNotify={loginNotify}/>

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