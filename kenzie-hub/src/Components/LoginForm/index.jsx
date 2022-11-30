import React from "react"

import "./styles"
import LoginFormStyled from "./styles"

const LoginForm = () => {

    return (
        <LoginFormStyled className="LoginForm" onSubmit={(e)=>{e.preventDefault()}}>
            <label htmlFor="inputEmail">Email</label>
            <input type="email" name="email" id="inputEmail" placeholder="Digite seu email..."/>

            <label htmlFor="inputPassword">Senha</label>
            <input type="password" name="password" id="inputPassword" placeholder="Digite sua senha..."/>

            <button type="submit" id="loginBttn">Entrar</button>
        </LoginFormStyled>
    )

}

export default LoginForm