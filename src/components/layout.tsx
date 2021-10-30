import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "../styles/theme";
import Theme, { darkTheme, lightTheme } from "../styles/theme";
import {
  ThemeContext,
  saveThemeModePrefences,
  clearAndReload,
} from "../context/themeContext";
import Seo from "./Seo";
import Nav from "./Nav";

export interface Props {
  pageTitle?: string;
  children;
  seo?: any;
}

const Layout = (props: Props) => {
  const { theme, setMode } = useContext(ThemeContext);
  const { pageTitle, children } = props;
  useEffect(() => {
    saveThemeModePrefences();
  }, []);

  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: { title: {}, siteUrl: {} }) {
        siteMetadata {
          title
          siteUrl
        }
      }
      strapiHomepage {
        seo {
          metaTitle
          metaDescription
          shareImage {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);
  return (
    <Theme theme={theme === "dark" ? darkTheme : lightTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <meta id="colorScheme" name="color-scheme" content={theme || "light"} />
      </Helmet>
      <Seo seo={data.strapiHomepage.seo} />
      <LayoutContainer>
        <GlobalStyle theme={theme === "dark" ? darkTheme : lightTheme} />
        <Header />
        <Nav />
        <main>
          {children}
          <button onClick={() => setMode("light")}>Switch to light</button>
          <button onClick={() => setMode("dark")}>Switch to dark</button>
          <button onClick={() => setMode("system")}>Switch to system</button>
          <button onClick={clearAndReload}>Forget mode and reload page</button>
        </main>
      </LayoutContainer>
    </Theme>
  );
};

const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.global.bg};
  transition: background 0.2s ease-out;
`;

export default Layout;
