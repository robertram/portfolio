import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page">
        <HomeContainer>
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1>Home Page</h1>
            </div>
          </div>
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
