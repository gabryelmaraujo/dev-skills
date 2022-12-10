import TechCardStyles from "./styles";

import trash from "../../assets/trash.svg"
import instance from "../../services/api";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

const TechCard = ({techId, techName, techLevel}) => {

  const { removeTech } = useContext(TechContext)


  return (
    <TechCardStyles className="techCard"  id={techId}>
      <div className="techInfos">
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
