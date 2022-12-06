import BackToLoginBttn from "../BackToLoginBttn"
import logoImg from "../../assets/Logo.png"
import StyledMainPageHeader from "./styles"

const MainPageHeader = ({loggedUser, setLoggedUser, loginStatus, setLoginStatus, page, setPage}) => {

return (

    <StyledMainPageHeader className="MainPageHeader">
        <div className="mpHeaderContainer">
            <div className="mpHeaderLogoDiv">
                <img src={logoImg} alt="" className="headerLogo"/>
            </div>

            <BackToLoginBttn text={"Sair"} loggedUser={loggedUser} setLoggedUser={setLoggedUser} loginStatus={loginStatus} setLoginStatus={setLoginStatus} page={page} setPage={setPage}/>
        </div>
    </StyledMainPageHeader>
)

}

export default MainPageHeader