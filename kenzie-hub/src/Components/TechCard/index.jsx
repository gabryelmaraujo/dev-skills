import TechCardStyles from "./styles";

import trash from "../../assets/trash.svg"

const TechCard = () => {
  return (
    <TechCardStyles className="techCard">
      <div className="techInfos">
        <p className="techName">JavaScript</p>
        <p className="techLevel">Intermediário</p>
      </div>

      <button className="techRemove">
        <img src={trash} alt="" />
      </button>
    </TechCardStyles>
  );
};

export default TechCard;
