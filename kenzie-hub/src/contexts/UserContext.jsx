import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);
  const [page, setPage] = useState("login");

  const loggedUserToken = localStorage.getItem("@KenzieHub/userToken");

  const navigate = useNavigate()

  async function autoLoginFunction(){

    if(loggedUserToken){
        try{
            
            const response = await instance.get("profile", {
                headers: {
                    Authorization: `Bearer ${loggedUserToken}`
                }
            })

            if(response.status === 200){
                navigate("/dashboard")
                setLoggedUser(response.data)
                setLoginStatus(true)

            }

        }catch(error){

            localStorage.setItem("@KenzieHub/userToken", "");
            localStorage.setItem("@KenzieHub/userId", "");

        }

    }

  }

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        loginStatus,
        setLoginStatus,
        page,
        setPage,
        autoLoginFunction
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
