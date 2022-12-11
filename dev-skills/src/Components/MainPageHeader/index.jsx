import BackToLoginBttn from "../BackToLoginBttn"
import logoImg from "../../assets/Logo.png"
import StyledMainPageHeader from "./styles"

const MainPageHeader = () => {


return (

    <StyledMainPageHeader className="MainPageHeader">
        <div className="mpHeaderContainer">
            <div className="mpHeaderLogoDiv">
                <img src={logoImg} alt="" className="headerLogo"/>
            </div>

            <BackToLoginBttn text={"Sair"} />
        </div>
    </StyledMainPageHeader>
)

}

export default MainPageHeader