import React from "react";

import * as yup from "yup"
import { appendErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup" 

import RegisterButton from "../RegisterBttn";
import StyledForm from "./styles";

const RegisterForm = () => {
  
  const formSchema = yup.object().shape({
    name: yup.string().required("É obrigatório um nome!"),
    email: yup.string().required("É necessário um email!"),
    password: yup.string().required("É obrigatório uma senha!"),
    confirmPass: yup.string().required("As senhas tem que coincidirem!"),
    bio: yup.string().required("Fale um pouco sobre você!"),
    contact: yup.number().required("Informe um número para contato!"),
    course_module: yup.string().required("Informe o seu módulo!")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(formSchema) })

  function formSubmiter(data){
    console.log(data)
  }



  return (
    <StyledForm className="RegisterForm" onSubmit={handleSubmit(formSubmiter)}>
      <div className="formInputs">
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" placeholder="Digite seu nome..." {...register("name")}/>
        {errors.name?.message}

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Digite seu email..." {...register("email")}/>
        {errors.email?.message}

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")}/>
        {errors.password?.message}

      <label htmlFor="confirmPassword">Confirme a sua senha</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Digite novamente sua senha..."
        {...register("confirmPass")}
      />
        {errors.confirmPass?.message}

      <label htmlFor="biography">Bio</label>
      <input type="text" id="biography" placeholder="Fale sobre você..." {...register("bio")}/>
        {errors.bio?.required}

      <label htmlFor="contact">Contato</label>
      <input type="tel" id="contact" placeholder="Telefone para contato..." {...register("contact")} />
        {errors.contact?.required}

      <label htmlFor="moduleSelect">Módulo</label>
      <select name="moduleSelect" id="moduleSelect" defaultValue={"default"} {...register("course_module")} >
        <option value="default" disabled>
          Selecione o seu módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">Módulo 1</option>
        <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
        <option value="Terceiro módulo (Introdução ao Backend)">Módulo 3</option>
        <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
      </select>
        {errors.course_module?.required}
      </div>
      <RegisterButton/>
    </StyledForm>
  );
};

export default RegisterForm;
