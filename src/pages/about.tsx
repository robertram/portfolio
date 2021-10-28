import * as React from "react";
import Layout from "../components/layout";
import { ThemeProvider } from "../context/themeContext";

const AboutPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="About Me">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </Layout>
    </ThemeProvider>
  );
};

export default AboutPage;
