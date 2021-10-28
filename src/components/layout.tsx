import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./header";
import { GlobalStyle } from "../styles/theme";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeContext } from "./theme";

export interface Props {
  darkMode?: any;
  pageTitle?: string;
  children;
}

const Layout = (props) => {
  const { theme, mode, setMode } = React.useContext(ThemeContext);
  const clearAndReload = () => {
    localStorage.removeItem("mode");
    document.location.reload();
  };
  const { pageTitle, children } = props;

  useEffect(() => {
    const mode = localStorage.getItem("mode") || "system";
    let theme;
    if (mode === "system") {
      const isSystemInDarkMode = matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      theme = isSystemInDarkMode ? "dark" : "light";
    } else {
      // for light and dark, the theme is the mode
      theme = mode;
    }
    document.body.classList.add(theme);
  }, []);

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
        <meta id="colorScheme" name="color-scheme" content="light dark" />
      </Helmet>
      <LayoutContainer darkMode={true}>
        <GlobalStyle theme={theme === "dark" ? darkTheme : lightTheme} />
        <Header />
        <main>
          {children}
          <div style={{ marginBottom: "1em" }}>
            The current mode is <pre style={{ display: "inline" }}>{mode}</pre>,
            which visually appears{" "}
            <pre style={{ display: "inline" }}>{theme}</pre>
          </div>
          <button onClick={() => setMode("light")}>Switch to light</button>
          <button onClick={() => setMode("dark")}>Switch to dark</button>
          <button onClick={() => setMode("system")}>Switch to system</button>
          <button onClick={clearAndReload}>Forget mode and reload page</button>
        </main>
      </LayoutContainer>
    </div>
  );
};

const LayoutContainer = styled.div<Props>``;

export default Layout;
