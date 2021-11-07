import * as React from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/themeContext";
import tw from "twin.macro";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="About Me">
        <AboutContainer>
          <div className="About__wrapper">
            <h1>About Me</h1>
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
      ${tw`max-w-5xl pr-10 pl-10`}
      margin: auto;
    }
  }
`;

export default AboutPage;
