import styled from "styled-components";

const LoginFormStyled = styled.form`

label{
    color: var(--grey-0);

    font-size: var(--font-s-4);

    margin-bottom: 0.5rem;
}

input{
    height: 3rem;
    width: 92.5%;

    border-radius: 0.25rem;
    border: 0.063rem solid var(--grey-0);

    background-color: var(--grey-2);
    color: var(--grey-0);

    padding: 0 0.75rem;
    margin-bottom: 1.563rem;
}

button {
    width: 100%;
    height: 3rem;

    border-radius: 0.25rem;
    border: 0.063rem solid var(--brand-1);

    background-color: var(--brand-1);
    color: var(--grey-0);

    font-size: var(--font-s-2);

}
button:hover{
    background-color: var(--brand-focus);
}

`

export default LoginFormStyled