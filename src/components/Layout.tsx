import React, { useEffect, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./Header";
import { GlobalStyle } from "../styles/theme";
import Theme, { darkTheme, lightTheme } from "../styles/theme";
import { ThemeContext, saveThemeModePrefences } from "../context/themeContext";
import Seo from "./Seo";
import "../styles/styles.css";

export interface Props {
  pageTitle?: string;
  children: any;
  seo?: any;
}

const Layout = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const { pageTitle, children, seo } = props;
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
      <Seo seo={seo ? seo : data.strapiHomepage.seo} />
      <LayoutContainer>
        <GlobalStyle theme={theme === "dark" ? darkTheme : lightTheme} />
        <Header />
        {theme === "dark" ? "darkTheme" : "lightTheme"}
        {console.log(theme === "dark" ? darkTheme : lightTheme)}
        <main>{children}</main>
      </LayoutContainer>
    </Theme>
  );
};

const LayoutContainer = styled.div``;

export default Layout;
