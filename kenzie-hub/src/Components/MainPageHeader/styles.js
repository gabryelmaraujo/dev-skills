import styled from "styled-components";

const StyledMainPageHeader = styled.header`

    width: 100%;
    height: 3.75rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top: 0.06rem solid var(--grey-3);
    border-bottom: 0.06rem solid var(--grey-3);

    .mpHeaderContainer{
        width: 60%;

        display: flex;
        justify-content: space-between;

        margin: 0 auto;
    }

    .mpHeaderContainer img, div, button{
        margin: 0;
    }

`

export default StyledMainPageHeader