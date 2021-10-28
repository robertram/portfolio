import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeProvider } from "../components/theme";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <HomeContainer>
        <main>
          <Layout pageTitle="Home Page">
            <h1>My portfolio</h1>
            <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
              className="Home__image"
            />
          </Layout>
        </main>
      </HomeContainer>
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
