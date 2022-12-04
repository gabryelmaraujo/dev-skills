import styled from "styled-components";


const MainPageContainer = styled.div`

    width: 100%;
    height: 100%;

    .developingSection{
        width: 60%;
    }

    @media (max-width: 600px){
        .developingSection{
            display: none;
        }
    }

    .developingSection h1{
        color: var(--grey-0);
        font-weight: var(--font-w-1);
        font-size: var(--font-s-1);

        margin-bottom: 1.438rem;
    }
    .developingSection p{
        color: var(--grey-0);
        font-weight: var(--font-w-4);
        font-size: var(--font-s-2);
    }


`

export default MainPageContainer