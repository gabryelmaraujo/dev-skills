import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({children}) => {

    const [loggedUser, setLoggedUser] = useState({})
    const [loginStatus, setLoginStatus] = useState(false)
    const [page, setPage] = useState("login")


return(
    <UserContext.Provider value={{
        loggedUser,
        setLoggedUser,
        loginStatus,
        setLoginStatus,
        page,
        setPage
    }}>
        {children}
    </UserContext.Provider>
)

}
