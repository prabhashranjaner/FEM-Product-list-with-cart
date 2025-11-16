import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --col-red:  hsl(14, 86%, 42%);
        --col-green:hsl(159, 69%, 38%);
        --col-rose-1: hsl(20, 50%, 98%);
        --col-rose-2: hsl(13, 31%, 94%);
        --col-rose-3:hsl(14, 25%, 72%);
        --col-rose-4:hsl(7, 20%, 60%);
        --col-rose-5:hsl(12, 20%, 44%);
        --col-rose-6:hsl(14, 65%, 9%);


    }


    *,*::after, *::before{
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
         font-family: "Red Hat Text", sans-serif;
         min-height: 100dvh;
         background-color: var(--col-rose-2);
         transition: all 0.3s;
         position: relative;

    }


    button{
        outline: none;
        cursor: pointer;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }

    ul{
        list-style: none;
    }
`;

export default GlobalStyles;
