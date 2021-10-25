import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header from "./header";
import { GlobalStyle } from "../styles/globalStyle";

export interface Props {
  pageTitle?: string;
  children;
}

const Layout = (props) => {
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
      <LayoutContainer>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
      </LayoutContainer>
    </div>
  );
};

const LayoutContainer = styled.div``;

export default Layout;
