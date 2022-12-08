import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import UserSectionStyles from "./styles"



const MainPageUserSection = () => {

    const userContext = useContext(UserContext)

    const userName = userContext.loggedUser.name
    const userModule = userContext.loggedUser.course_module

return (

    <UserSectionStyles className="MainPageUserSection">
        <div className="userSectionContainer">
            <p className="hiUserParag">Olá, {userName}</p>

            <p className="userKenzieModule">{userModule}</p>
        </div>
    </UserSectionStyles>
)

}

export default MainPageUserSection