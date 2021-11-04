import React from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import reset from "./reset.css";
import fonts from "./fonts.css";

const colorPalette = {
  persimmon: "#FE5F55",
  bunker: "#0C1418",
  alabaster: "#F7F7F7",
  astek: "#111F25",
  white: "#FFFFFF",
  black: "#000000",
  lightShades: "242, 242, 241",
  lightAccent: "139, 142, 149",
  mainBrand: "140, 100, 88",
  secondaryBrand: "209, 230, 214",
  darkAccent: "133, 129, 137",
  darkShades: "32, 30, 32",

  success: "95, 153, 81",
  warning: "221, 136, 25",
  error: "244, 67, 54",
};

const baseTheme = {
  actions: {
    error: colorPalette.error,
    info: colorPalette.darkShades,
    primary: colorPalette.mainBrand,
    success: colorPalette.success,
    warning: colorPalette.warning,
  },
  palette: {
    darkAccent: colorPalette.darkAccent,
    darkShades: colorPalette.darkShades,
    lightAccent: colorPalette.lightAccent,
    lightShades: colorPalette.lightShades,
    mainBrand: colorPalette.mainBrand,
    secondaryBrand: colorPalette.secondaryBrand,
  },
};

export const lightTheme = {
  ...baseTheme,
  global: {
    bg: colorPalette.white,
    bg2: colorPalette.alabaster,
    color: colorPalette.black,
    link: colorPalette.black,
    linkHover: colorPalette.persimmon,
    border: colorPalette.persimmon,
  },
};

export const darkTheme = {
  ...baseTheme,
  global: {
    bg: colorPalette.astek,
    bg2: colorPalette.astek,
    color: colorPalette.white,
    link: colorPalette.white,
    linkHover: colorPalette.persimmon,
    border: colorPalette.persimmon,
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}
  *{
    font-family: 'Slabo 13px';
  }
  html,
  body {
    font-family: 'Slabo 13px';
    color: ${(props) => props.theme.global.color};
  }
  body {
    font-family: 'Slabo 13px';
    transition: background 0.2s ease-out;
    background-color: ${(props) => props.theme.global.bg};
    color: ${(props) => props.theme.global.color};
    min-height: 100vh;
  }
  a {
    color: ${(props) => props.theme.global.link};
  }
  a:hover {
    color: ${(props) => props.theme.global.linkHover};
  }
  h1, h2, h3, h4, h5, p{
    color: ${(props) => props.theme.global.color} !important;
  }
  
`;

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
