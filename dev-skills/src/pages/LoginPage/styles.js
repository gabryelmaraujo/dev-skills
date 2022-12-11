import styled from "styled-components";

const LoginPageContainer = styled.div`

width: 23.75rem;

margin: 0 auto;

    .loginPageLogo{
        margin-bottom: 2.188rem;
        display: flex;
        justify-content: center;
    }

    .loginPageMain{
        padding: 2.625rem 1.375rem;

        background-color: var(--grey-3);

        border: 0.063rem solid var(--grey-3);
        border-radius: 0.25rem;

        max-width: 80%;
    }

    .loginFormHeader{
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 1.75rem;

        color: var(--grey-0);
    }

    .loginFormFooter{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1.375rem;

        margin-top: 2.125rem;

        color: var(--grey-1);
    }

    .goToRegisterBttn{
        width: 100%;
        height: 3rem;

        background-color: var(--grey-1);

        border: 0.063rem solid var(--grey-1);
        border-radius: 0.25rem;

        color: var(--grey-0);
    }

`

export default LoginPageContainer