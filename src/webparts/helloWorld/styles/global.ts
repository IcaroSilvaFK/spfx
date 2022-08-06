import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  @font-face {
    font-family:'Poppins', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none ;
    color: inherit
  }

  button{
    cursor: pointer;
  }

  input,button {
    outline: 0;
    border:0;
  }

`;
