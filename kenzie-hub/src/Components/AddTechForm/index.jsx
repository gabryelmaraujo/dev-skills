import React from "react";

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup" 

import AddTechFormStyles from "./styles"
import { min } from "lodash";



const AddTechForm = () => {

    const addTechSchema = yup.object().shape({
        techName: yup.string().required("É necessário adicionar um nome.").min(4, "O nome precisa ter no mínimo 4 caracteres."),
        tech_status: yup.string().required("Informe o seu status.")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(addTechSchema) })

    function addTechSubmiter(data){
        console.log(data)
        console.log(dataTreat(data))

    }

    function dataTreat(techdata){
        const treatedData = {
            "title": techdata.techName,
            "status": techdata.tech_status
        }

        return treatedData
    }

return (
    <AddTechFormStyles onSubmit={handleSubmit(addTechSubmiter)} 
    noValidate
    autoComplete="off"
    >
    <label htmlFor="techName">Nome</label>
    <input type="text" id="techName" {...register("techName")} />
    {errors.techName?.message && <p aria-label="error" className="inputError">{errors.techName?.message}</p>}

    <label htmlFor="tech_status">Selecionar status</label>
    <select name="tech_status" id="tech_status" defaultValue={""} {...register("tech_status")} >
        <option value="" disabled>Selecione o seu status</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
    </select>
    {errors.tech_status?.message && <p aria-label="error" className="inputError">{errors.tech_status?.message}</p>}

    <button id="registerTech">Cadastrar Tecnologia</button>

    </AddTechFormStyles>
)

}

export default AddTechForm