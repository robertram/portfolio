import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "../styles/theme";
import Theme, { darkTheme, lightTheme } from "../styles/theme";
import { ThemeContext, saveThemeModePrefences } from "../context/themeContext";
import Seo from "./Seo";

export interface Props {
  pageTitle?: string;
  children;
  seo?: any;
}

const Layout = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const { pageTitle, children } = props;
  useEffect(() => {
    saveThemeModePrefences();
  }, []);

  /*shareImage {
            localFile {
              publicURL
            }
          } */

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
        }
      }
    }
  `);
  return (
    <Theme theme={theme === "dark" ? darkTheme : lightTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {`${pageTitle && pageTitle}`} | {data.site.siteMetadata.title}
        </title>
        <meta id="colorScheme" name="color-scheme" content={theme || "light"} />
      </Helmet>
      <Seo seo={data.strapiHomepage.seo} />
      <LayoutContainer>
        <GlobalStyle theme={theme === "dark" ? darkTheme : lightTheme} />
        <Header />
        <main>{children}</main>
      </LayoutContainer>
    </Theme>
  );
};

const LayoutContainer = styled.div`
  transition: background 0.2s ease-out;
  background-color: ${(props) => props.theme.global.bg};
`;

export default Layout;
