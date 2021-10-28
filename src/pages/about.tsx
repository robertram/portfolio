import * as React from "react";
import Layout from "../components/layout";
import { ThemeProvider } from "../components/theme";

const AboutPage = () => {
  return (
    <ThemeProvider>
      <main>
        <Layout pageTitle="About Me">
          <p>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </p>
        </Layout>
      </main>
    </ThemeProvider>
  );
};

export default AboutPage;
