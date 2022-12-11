import styled from "styled-components";


const AddTechFormStyles = styled.form`

label{
    display: block;
    color: var(--grey-0);
    font-size: var(--font-s-4);
    margin-bottom: 0.5rem;
}
input{
    width: 91%;
    height: 3rem;
    padding: 0 1rem;
    margin-bottom: 1.375rem;

    background-color: var(--grey-2);
    color: var(--grey-1);

    border: 0.06rem solid var(--grey-1);
    border-radius: 0.25rem;
}
select{
    width: 100%;
    height: 3rem;
    padding: 0 1rem;
    margin-bottom: 1.375rem;

    background-color: var(--grey-2);
    color: var(--grey-1);

    border: 0.06rem solid var(--grey-1);
    border-radius: 0.25rem;
}
button{
    width: 100%;
    height: 3rem;

    background-color: var(--brand-1);
    color: var(--grey-0);

    border: 0.06rem solid var(--brand-1);
    border-radius: 0.25rem;
}

@media (max-width: 1024px){
    input{
        width: 90%;
    }
}
@media (max-width: 980px){
    input{
        width: 88%;
    }
}
@media (max-width: 820px){
    input{
        width: 86%;
    }
}
@media (max-width: 374px){
    input{
        width: 84%;
    }
}

`

export default AddTechFormStyles