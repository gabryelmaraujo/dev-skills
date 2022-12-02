import React from "react";

// import { toast, ToastContainer } from "react-toastify/dist/components";
// import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup" 

import RegisterButton from "../RegisterBttn";
import StyledForm from "./styles";

import instance from "../../data/api";

const RegisterForm = () => {
  
  const formSchema = yup.object().shape({
    name: yup.string().required("É obrigatório um nome!").min(4,"O nome precisa ter no mínimo 4 caracteres.").max(200, "o nome pode ter no máximo 200 caracteres."),
    email: yup.string().required("É necessário um email!").email("O email não é valido!"),
    password: yup.string().required("É obrigatório uma senha!").matches(/(?=.*?[A-Z])/, "É necessário, pelo menos uma letra maíuscula").matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.").matches(/(?=.*?[0-9])/, "É necessário, pelo menos um número.").matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere special").min(8, "A senha precisa ter no mínimo 8 caracteres."),
    confirmPass: yup.string().oneOf([yup.ref('password'), null], 'As senhas têm que coincidirem.'),
    bio: yup.string().required("Fale um pouco sobre você!"),
    contact: yup.string().required("Informe um contato!"),
    course_module: yup.string().required("Informe o seu módulo!")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(formSchema) })

  async function registerFunction(formData){

    // function registerToast(result){
    //   if(result === "success"){
    //     toast.success("Você foi cadastrado!", {
    //       position: toast.POSITION.TOP_RIGHT
    //     })
    //   }else if(result === "emailError"){
    //     toast.error("Esse email já esta sendo usado!", {
    //       position: toast.POSITION.TOP_RIGHT
    //     })
    //   }
    // }

    try{

      const response = await instance.post("users", formData)

      if(response.status === 201){
        // registerToast("success")
        console.log("registrou")

        setTimeout(() => {
          console.log("aqui redireciona")
        }, 2000);
      }

    }catch(error){
      if(error.response.data.message === "Email already exists"){
        console.log("Email já existe")
      }
    }finally{
      console.log("loading")
    }
  }

  function formSubmiter(data){

    const treatedData = postTreat(data)

    registerFunction(treatedData)

  }

  function postTreat(userdata){
    const treatedUser = {
      "email": userdata.email,
      "password": userdata.password,
      "name": userdata.name,
      "bio": userdata.bio,
      "contact": userdata.contact,
      "course_module": userdata.course_module
    }

    return treatedUser
  }




  return (
    <StyledForm className="RegisterForm" onSubmit={handleSubmit(formSubmiter)}>
      <div className="formInputs">
      <label htmlFor="name">Nome</label>
      <input type="text" id="name" placeholder="Digite seu nome..." {...register("name")}/>
        {errors.name?.message && <p aria-label="error" className="inputError">{errors.name?.message}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Digite seu email..." {...register("email")}/>
        {errors.email?.message && <p aria-label="error" className="inputError">{errors.name?.message}</p>}

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" placeholder="Digite sua senha..." {...register("password")}/>
        {errors.password?.message && <p aria-label="error" className="inputError">{errors.password?.message}</p>}

      <label htmlFor="confirmPassword">Confirme a sua senha</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Digite novamente sua senha..."
        {...register("confirmPass")}
      />
        {errors.confirmPass?.message && <p aria-label="error" className="inputError">{errors.confirmPass?.message}</p>}

      <label htmlFor="biography">Bio</label>
      <input type="text" id="biography" placeholder="Fale sobre você..." {...register("bio")}/>
        {errors.bio?.message && <p aria-label="error" className="inputError">{errors.bio?.message}</p>}

      <label htmlFor="contact">Contato</label>
      <input type="tel" id="contact" placeholder="Telefone para contato..." {...register("contact")} />
        {errors.contact?.message && <p aria-label="error" className="inputError">{errors.contact?.message}</p>}

      <label htmlFor="moduleSelect">Módulo</label>
      <select name="moduleSelect" id="moduleSelect" defaultValue={""} {...register("course_module")} >
        <option value="" disabled>
          Selecione o seu módulo
        </option>
        <option value="Primeiro módulo (Introdução ao Frontend)">Módulo 1</option>
        <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
        <option value="Terceiro módulo (Introdução ao Backend)">Módulo 3</option>
        <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
      </select>
        {errors.course_module?.message && <p aria-label="error" className="inputError">{errors.course_module?.message}</p>}
      </div>
      <RegisterButton/>
    </StyledForm>
  );
};

export default RegisterForm;
