import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { toast } from "react-toastify";
import instance from "../services/api";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [techs, setTechs] = useState([]);

  const loggedUserToken = localStorage.getItem("@KenzieHub/userToken");

  function dataTreat(techdata) {
    const treatedData = {
      title: techdata.techName,
      status: techdata.tech_status,
    };

    return treatedData;
  }

  
  async function getTechs() {
    try {
      const response = await instance.get("profile", {
        headers:{
          Authorization: `Bearer ${loggedUserToken}`
        }
      });
      
      setTechs(response.data.techs)
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getTechs()
  },[])
  
  async function addTechFunction(data) {

    const tech = dataTreat(data);

    try {
      const response = await instance.post("users/techs", tech, {
        headers: {
          Authorization: `Bearer ${loggedUserToken}`,
        },
      });

      if (response.status === 201) {
        getTechs()
        toast.success("A tecnologia foi adicionada!", {
          position: toast.POSITION.RIGHT_CENTER,
        });
        setTimeout(() => {
          setModalOpen(false);
        }, 500);
      }
    } catch (error) {
      toast.warning("Você já tem uma tecnologia com esse nome!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }


  async function removeTech(id){
    const loggedUserToken = localStorage.getItem("@KenzieHub/userToken");
    try{

      const response = await instance.delete(`users/techs/${id}`,{
        headers: {
          Authorization: `Bearer ${loggedUserToken}`,
        },
      })

      
      if(response.status === 204){
        getTechs()
        toast.success("A tecnologia foi removida!",{
          position: toast.POSITION.TOP_RIGHT,
        })
      }

    }catch(error){
      console.log(error)
    }

  }


  return (
    <TechContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        addTechFunction,
        techs,
        setTechs,
        removeTech
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
