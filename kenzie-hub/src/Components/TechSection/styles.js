import styled from "styled-components";


const TechSectionStyles = styled.section`

    width: 60%;
    margin: 0 auto;
    margin-bottom: 1rem;

    ul, li{
        list-style: none;
        text-decoration: none;
    }

    .techSectionHeader{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.375rem;
    }
    .techHeaderTitle{
        color: var(--grey-0);
        margin: 0;
        padding: 0;
    }

    .techList::-webkit-scrollbar {
        width: 0.25rem;
    }

    .techList::-webkit-scrollbar-thumb {
        background-color: var(--brand-1);
        border-radius: 0.25rem;
        border: 0.06rem solid rgba(0,0,0,0);
    }

`

export default TechSectionStyles