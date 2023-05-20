import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: ${(props) => props.theme.colors.primary};
    --secondary-color: ${(props) => props.theme.colors.secondary};
    --tertiary-color: ${(props) => props.theme.colors.tertiary};
    --background-color: ${(props) => props.theme.colors.background};
    --text-color: ${(props) => props.theme.colors.text};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.colors.background};  
    color: ${(props) => props.theme.colors.text};
  }

`;

export default GlobalStyle;
