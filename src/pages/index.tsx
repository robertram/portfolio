import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page">
        <HomeContainer>
          <div className="Home__wrapper max-w-5xl pr-10 pl-10 m-auto">
            <h1 className="dark:text-text-dark text-text-light text-5xl">
              Home Page!
            </h1>
          </div>
        </HomeContainer>
      </Layout>
    </ThemeProvider>
  );
};
const HomeContainer = styled.div`
  .Home {
  }
`;

export default IndexPage;
