import TechCardStyles from "./styles";

import trash from "../../assets/trash.svg"

const TechCard = ({techId, techName, techLevel}) => {
  return (
    <TechCardStyles className="techCard">
      <div className="techInfos" id={techId}>
        <p className="techName">{techName}</p>
        <p className="techLevel">{techLevel}</p>
      </div>

      <button className="techRemove">
        <img src={trash} alt="" />
      </button>
    </TechCardStyles>
  );
};

export default TechCard;
