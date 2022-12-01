import styled from "styled-components";


const UserSectionStyles = styled.section`

    width: 100%;
    height: 5.625rem;
    border-bottom: 0.06rem solid var(--grey-3);

    margin-bottom: 2.313rem;

    .userSectionContainer{
        width: 60%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .userSectionContainer p{
        margin: 0;
    }

    .hiUserParag{
        color: var(--grey-0);
        font-weight: var(--font-w-1);
        font-size: var(--font-s-1);
    }

    .userKenzieModule{
        color: var(--grey-1);
        font-weight: var(--font-w-2);
        font-size: var(--font-s-4);
    }
`

export default UserSectionStyles