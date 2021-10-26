import React, { useContext, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled, { ThemeContext } from "styled-components";
import Header from "./header";
import { GlobalStyle } from "../styles/theme";
import { darkTheme, lightTheme } from "../styles/theme";
import { DarkModeContext } from "../hooks/DarkModeContext";

export interface Props {
  darkMode?: any;
  pageTitle?: string;
  children;
}

const Layout = (props) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { pageTitle, children } = props;
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: { title: {}, siteUrl: {} }) {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <LayoutContainer darkMode={darkMode}>
        <GlobalStyle theme={darkMode ? darkTheme : lightTheme} />
        <Header />
        <main>
          {children}

          <button
            onClick={() => {
              toggleDarkMode();
            }}
          >
            {true ? "Light Mode" : "Dark Mode"}
          </button>
        </main>
      </LayoutContainer>
    </div>
  );
};

const LayoutContainer = styled.div<Props>`
  background-color: ${(props) => (props.darkMode ? "black" : "white")};
`;

export default Layout;
