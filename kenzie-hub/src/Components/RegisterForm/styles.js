import React from "react"
import styled from "styled-components"


const StyledForm = styled.form`

    width: 100%;

    label{
        display: block;

        margin-bottom: 0.5rem;

        color: var(--grey-0);
    }

    button{
        width: 100%;
        height: 3rem;
        margin-bottom: 1rem;
    }

    input{
        padding: 0 1rem;
        margin-bottom: 1rem;

        width: 88%;
        height: 3rem;

        background-color: var(--grey-2);
        color: var(--grey-1);

        border: 0.06rem solid var(--grey-2);
        border-radius: 0.25rem;

    }

    input::placeholder{
        color: var(--grey-1);
    }

    select{
        padding: 0 1rem;
        margin-bottom: 1rem;

        width: 100%;
        height: 3rem;

        background-color: var(--grey-2);
        color: var(--grey-1);

        border: 0.06rem solid var(--grey-2);
        border-radius: 0.25rem;
    }

    button{
        margin-top: 1rem;
        background-color: var(--brand-1);
        color: var(--grey-0);

        border: 0.06rem solid var(--brand-1);
        border-radius: 0.25rem;
    }

    button:hover{
        background-color: var(--brand-focus);
    }

    button:disabled{
        background-color: var(--brand-negative);
        border: 0.06rem solid var(--brand-negative);
    }
`

export default StyledForm