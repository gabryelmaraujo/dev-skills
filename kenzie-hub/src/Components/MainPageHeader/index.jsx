import BackToLoginBttn from "../BackToLoginBttn"
import logoImg from "../../assets/Logo.svg"
import StyledMainPageHeader from "./styles"

const MainPageHeader = () => {

return (

    <StyledMainPageHeader className="MainPageHeader">
        <div className="mpHeaderContainer">
            <img src={logoImg} alt="" />

            <BackToLoginBttn text={"Sair"}/>
        </div>
    </StyledMainPageHeader>
)

}

export default MainPageHeader