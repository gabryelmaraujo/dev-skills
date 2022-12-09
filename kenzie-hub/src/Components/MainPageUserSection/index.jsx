import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import UserSectionStyles from "./styles"



const MainPageUserSection = () => {

    const { loggedUser } = useContext(UserContext)

    const userName = loggedUser.name
    const userModule = loggedUser.course_module

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