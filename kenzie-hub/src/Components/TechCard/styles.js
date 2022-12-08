import styled from "styled-components";


const TechCardStyles = styled.li`

width: 90%;
height: 3rem;

display: flex;
background-color: var(--grey-4);
gap: 1rem;
border: 0.06rem solid var(--grey-4);
border-radius: 0.25rem;
padding: 0 5%;

}
.techInfos{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
@media(max-width: 430px){
    .techInfos{
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    }
} 

.techName{
    margin: 0;
    color: var(--grey-0);
    font-size: var(--font-s-3);
    font-weight: var(--font-w-1);
}
.techLevel{
    margin: 0;
    color: var(--grey-1);
    font-size: var(--font-s-4);
    font-weight: var(--font-w-4);
}
.techRemove{
    background-color: var(--grey-4);
    border: 1px solid var(--grey-4);
}
`

export default TechCardStyles