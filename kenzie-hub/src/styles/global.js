import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

*{
    padding: 0;
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
}
button, a{
    cursor: pointer;
}
body{
    background-color: var(--grey-4);
}
label{
    display: block;
}
.appMain{
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

:root{

    --toastify-color-light: #343B41;
    --toastify-text-color-light: #f8f9fa;

    --brand-1: #FF577F;
    --brand-focus: #FF427F;
    --brand-negative: #59323F;

    --grey-0: #F8F9FA; //branco
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214; //mais escuro

    --success: #3FE864;
    --negative: #E83F5B;

    --font-s-1: 1.125rem; //18px;
    --font-s-2: 1rem; //16px;
    --font-s-3: 0.875rem; //14px;
    --font-s-4: 0.75rem; //12px;

    --font-w-1: 700;
    --font-w-2: 600;
    --font-w-3: 500;
    --font-w-4: 400;


}

`

export default GlobalStyles

