import TechCardStyles from "./styles";

import trash from "../../assets/trash.svg"
import instance from "../../services/api";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

const TechCard = ({techId, techName, techLevel}) => {

  const { setEditTechOpen, removeTech, setToEditTech } = useContext(TechContext)


  return (
    <TechCardStyles className="techCard"  id={techId}>
      <div className="techInfos" onClick={(e)=>{
        setEditTechOpen(true)

        const targetData = {
          "techId": e.target.parentElement.id,
          "techName": e.target.children[0].innerText,
          "techStatus": e.target.children[1].innerText
        }

        setToEditTech(targetData)
    }}>
        <p className="techName">{techName}</p>
        <p className="techLevel">{techLevel}</p>
      </div>

      <button className="techRemove" onClick={(e)=>{

        const targetId = e.target.parentElement.parentElement.id
        removeTech(targetId)

        }}>
        <img src={trash} alt="" />
      </button>
    </TechCardStyles>
  );
};

export default TechCard;
