import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #0265D6;
  }
  *{
    box-sizing: border-box;
  }
  p{
    font-size: 16px;
  }
  a{
    text-decoration: none;
    color: #0265D6;
    &:hover{
      color: black;
    }
  }
`;

export default GlobalStyles;
