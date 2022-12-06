import styled from "styled-components";


const RegisterPageContainer = styled.div`

    width: 23.75rem;

    margin-top: 26rem;

    .registerPageHeader{
        display: flex;

        margin-bottom: 3rem;
    }

    .headerLogoDiv{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .registerPageMain{
        background-color: var(--grey-3);
        padding: 2.625rem 1.375rem;
        max-width: 80%;

        border: 0.063rem solid var(--grey-3);
        border-radius: 0.25rem;

        margin-bottom: 2rem;
    }

    .registerFormHeader{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .registerFormHeader p {
        color: var(--grey-0);
        margin-bottom: 1.5rem;
    }

    .registerFormHeader span{
        color: var(--grey-1);
        margin-bottom: 1.5rem;
    }

`

export default RegisterPageContainer