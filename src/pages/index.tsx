import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";
import tw from "twin.macro";

const IndexPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page">
        <HomeContainer>
          <div className="Home__wrapper">
            <h1>Home Page</h1>
          </div>
        </HomeContainer>
      </Layout>
    </ThemeProvider>
  );
};
const HomeContainer = styled.div`
  .Home {
    &__wrapper {
      ${tw`max-w-5xl pr-10 pl-10`}
      margin: auto;
    }
    &__image {
      width: 200px;
    }
  }
`;

export default IndexPage;
