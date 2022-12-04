import BackToLoginBttn from "../BackToLoginBttn"
import logoImg from "../../assets/Logo.svg"
import StyledMainPageHeader from "./styles"

const MainPageHeader = ({loggedUser, setLoggedUser, loginStatus, setLoginStatus, page, setPage}) => {

return (

    <StyledMainPageHeader className="MainPageHeader">
        <div className="mpHeaderContainer">
            <img src={logoImg} alt="" />

            <BackToLoginBttn text={"Sair"} loggedUser={loggedUser} setLoggedUser={setLoggedUser} loginStatus={loginStatus} setLoginStatus={setLoginStatus} page={page} setPage={setPage}/>
        </div>
    </StyledMainPageHeader>
)

}

export default MainPageHeader