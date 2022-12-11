import styled from "styled-components"


const ModalStyles = styled.section`

position: absolute;
top: 0;
left: 0;

height: 100vh;
width: 100%;


background-color: rgba(0, 0, 0, 0.35);

display: flex;
justify-content: center;
align-items: center;

.addTechModalContainer{
    width: 30%;
    height: 50%;

    display: flex;
    flex-direction: column;
}

.modalHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.25rem 0.25rem 0 0 ;
    border: 1px solid var(--grey-2);

    background-color: var(--grey-2);
    color: var(--grey-0);
    
    margin-top: 0;
    padding: 0 3%;
}

.modalClose{
    height: 1.25rem;

    border: 1px solid var(--grey-2);
    background-color: var(--grey-2);
    color: var(--grey-0);
}

.modalMain{
    padding: 3% 3%;
    background-color: var(--grey-3);
    height: 100%;
    border-radius: 0 0 0.25rem 0.25rem;
    border: 1px solid var(--grey-3);
}

@media (max-width: 1200px){
    .addTechModalContainer{
    width: 35%;
    height: 60%;
    }
}

@media (max-width: 700px){
    .addTechModalContainer{
    width: 50%;
    height: 55%;
    }
}
@media (max-width: 500px){
    .addTechModalContainer{
    width: 65%;
    height: 60%;
    }
}
@media (max-width: 400px){
    .addTechModalContainer{
    width: 75%;
    height: 60%;
    }
}

`

export default ModalStyles