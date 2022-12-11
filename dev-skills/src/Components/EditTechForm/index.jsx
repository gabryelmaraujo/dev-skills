import React from "react";

import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup" 

import AddTechFormStyles from "./styles"
import { min } from "lodash";
import { useEffect } from "react";
import instance from "../../services/api";
import { toast } from "react-toastify";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";



const EditTechForm = ({techName, techId}) => {

    const { editTechFunction, toEditTech } = useContext(TechContext)

    const editTechSchema = yup.object().shape({
        status: yup.string().required("Informe o seu status.")
    })

    const {register, handleSubmit, formState: {errors}} = useForm({ resolver: yupResolver(editTechSchema) })

    async function editTechSubmiter(data){
        const techId = toEditTech.techId
        editTechFunction(techId, data)
        
    }

return (
    <AddTechFormStyles onSubmit={handleSubmit(editTechSubmiter)} 
    noValidate
    autoComplete="off"
    >
    <label htmlFor="techName">Nome</label>
    <input type="text" id="techName" placeholder={toEditTech.techName} disabled/>

    <label htmlFor="tech_status">Selecionar status</label>
    <select name="tech_status" id="tech_status" defaultValue={""} {...register("status")} >
        <option value="" disabled>Selecione o seu status</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
    </select>
    {errors.status?.message && <p aria-label="error" className="inputError">{errors.status?.message}</p>}

    <button id="registerTech">Editar Tecnologia</button>

    </AddTechFormStyles>
)

}

export default EditTechForm