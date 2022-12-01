

import MainPageHeader from "../../Components/MainPageHeader"
import MainPageUserSection from "../../Components/MainPageUserSection"
import MainPageContainer from "./styles"

const MainPage = () => {

return(

    <MainPageContainer className="MainPageContainer">

        <MainPageHeader/>

        <main className="MainPageMain">
            <MainPageUserSection/>
            
            <section className="developingSection">
                <h1>Que pena! Estamos em desenvolvimento :(</h1>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
        </main>

    </MainPageContainer>

)

}

export default MainPage