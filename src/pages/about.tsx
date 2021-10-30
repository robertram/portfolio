import * as React from "react";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/themeContext";

const AboutPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="About Me">
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>About Me</h1>

            <p>
              Hi there! I'm the proud creator of this site, which I built with
              Gatsby.
            </p>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export default AboutPage;
