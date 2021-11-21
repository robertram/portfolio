import * as React from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/themeContext";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="About Me">
        <AboutContainer>
          <div className="About__wrapper max-w-5xl pr-10 pl-10 max-w-screen-2xl m-auto pt-16">
            <h1 className="text-5xl">About Me</h1>
            <p>
              Hi there! I'm the proud creator of this site, which I built with
              Gatsby.
            </p>
          </div>
        </AboutContainer>
      </Layout>
    </ThemeProvider>
  );
};

const AboutContainer = styled.div`
  .About {
    &__wrapper {
      margin: auto;
    }
  }
`;

export default AboutPage;
