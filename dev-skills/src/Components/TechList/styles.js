import styled from "styled-components";


const TechListStyles = styled.ul`

background-color: var(--grey-3);
width: 90%;
padding: 3%;
border: 0.06rem solid var(--grey-3);
border-radius: 0.25rem;

max-height: 300px;
overflow-x: hidden;
overflow-y: scroll;

.techCard:hover{
    background-color: var(--grey-2);
    color: var(--grey-0);
    cursor: pointer;
}

`

export default TechListStyles