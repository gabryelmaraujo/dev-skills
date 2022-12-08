import React, { useContext } from "react"

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup" 

import { useNavigate } from "react-router-dom";

import "./styles"
import LoginFormStyled from "./styles"

import instance from "../../services/api";
import { useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = ({loginNotify}) => {
        
    const userContext = useContext(UserContext)
    
    const navigate = useNavigate()

    const loginFormSchema = yup.object().shape({
        email: yup.string().required("É necessário um email!").email("O email não é valido!"),
        password: yup.string().required("É obrigatório uma senha!")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginFormSchema)
    })

    async function loginFunction(formData){

        
        try{
            
            const response = await instance.post("sessions", formData)

            if(response.status === 200){
                const userToken = response.data.token
                const userId = response.data.user.id

                userContext.setLoginStatus(true)

                loginNotify("success")

                userContext.setLoggedUser(response.data.user)

                localStorage.setItem("@KenzieHub/userToken", userToken)
                localStorage.setItem("@KenzieHub/userId", userId)

                setTimeout(() => {
                    navigate("/dashboard")
                }, 2000);

            }

        }catch(error){
            loginNotify("error")

            userContext.setLoginStatus(false)
        }

    }

    function loginSubmiter(data){
        loginFunction(data)
    }


    return (
        <LoginFormStyled className="LoginForm" onSubmit={handleSubmit(loginSubmiter)} noValidate autoComplete="off">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" name="email" id="inputEmail" placeholder="Digite seu email..." {...register("email")} />
                {errors.email?.message && <p aria-label="error" className="inputError">{errors.email?.message}</p>}

            <label htmlFor="inputPassword">Senha</label>
            <input type="password" name="password" id="inputPassword" placeholder="Digite sua senha..." {...register("password")}/>
                {errors.password?.message && <p aria-label="error" className="inputError">{errors.password?.message}</p>}

            <button type="submit" id="loginBttn" >Entrar</button>
            
        </LoginFormStyled>
    )

}

export default LoginForm