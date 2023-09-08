import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    width:90%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  p{
    margin: 0;
    padding: 0;
  }
`;

export const theme = {
  colors: {
    primaryColor: "#1E88E5",
    secondaryColor: "#E3F2FD",
    grayColor: "#54585C",
    lightGrayColor: "#E4E6E8",
    blackColor: "#000000",
  },
};
