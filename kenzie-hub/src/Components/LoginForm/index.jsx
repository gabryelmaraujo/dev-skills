import React from "react"

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup" 

import { useNavigate } from "react-router-dom";

import "./styles"
import LoginFormStyled from "./styles"

import instance from "../../data/api";

const LoginForm = ({loggedUser, setLoggedUser, loginStatus, setLoginStatus, loginNotify}) => {

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

                setLoginStatus(true)

                loginNotify("success")

                setLoggedUser(response.data.user)

                localStorage.setItem("@KenzieHub/userToken", userToken)
                localStorage.setItem("@KenzieHub/userId", userId)

            }

        }catch(error){
            loginNotify("error")
        }

    }

    function loginSubmiter(data){
        loginFunction(data)
    }

    const navigate = useNavigate()

    return (
        <LoginFormStyled className="LoginForm" onSubmit={handleSubmit(loginSubmiter)} noValidate autoComplete="off">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" name="email" id="inputEmail" placeholder="Digite seu email..." {...register("email")} />
                {errors.email?.message && <p aria-label="error" className="inputError">{errors.email?.message}</p>}

            <label htmlFor="inputPassword">Senha</label>
            <input type="password" name="password" id="inputPassword" placeholder="Digite sua senha..." {...register("password")}/>
                {errors.password?.message && <p aria-label="error" className="inputError">{errors.password?.message}</p>}

            <button type="submit" id="loginBttn" onClick={ ()=>{
                if(loginStatus){

                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 2000);
                }
            } } >Entrar</button>
            
        </LoginFormStyled>
    )

}

export default LoginForm