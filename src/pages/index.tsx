import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page">
        <HomeContainer>
          <h1>My portfolio</h1>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
            className="Home__image"
          />
        </HomeContainer>
      </Layout>
    </ThemeProvider>
  );
};
const HomeContainer = styled.div`
  .Home {
    &__image {
      width: 200px;
    }
  }
`;

export default IndexPage;
