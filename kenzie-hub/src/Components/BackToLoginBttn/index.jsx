import React from "react"
import BackToLoginBttnStyles from "./styles"


const BackToLoginBttn = ({text}) => {

return(
        <BackToLoginBttnStyles>

            <button className="backToLoginBttn">{text}</button>

        </BackToLoginBttnStyles>
)

}

export default BackToLoginBttn