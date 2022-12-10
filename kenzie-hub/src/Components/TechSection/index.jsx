import { useContext } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { TechContext, TechProvider } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import AddTechBttn from "../AddTechBttn";
import TechList from "../TechList";
import TechSectionStyles from "./styles";

const TechSection = () => {

  const { techs } = useContext(TechContext)

  console.log(techs, techs.length)

  return (
    <TechSectionStyles>
      <header className="techSectionHeader">
        <p className="techHeaderTitle">Tecnologias</p>
        <AddTechBttn />
      </header>
      {
        techs.length === 0 ? (
          <div className="noTechDiv">
            <p className="noTechParag">Você ainda não adicionou tecnologias, clique no botão acima para adicionar.</p>
          </div>
          ) : (<TechList/>)
      }

    </TechSectionStyles>
  );
};

export default TechSection;
