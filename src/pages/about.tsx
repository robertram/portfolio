import * as React from "react";
import Layout from "../components/layout";
import ContextWrapper from "../components/ContextWrapper";

const AboutPage = () => {
  return (
    <ContextWrapper>
      <main>
        <Layout pageTitle="About Me">
          <p>
            Hi there! I'm the proud creator of this site, which I built with
            Gatsby.
          </p>
        </Layout>
      </main>
    </ContextWrapper>
  );
};

export default AboutPage;
