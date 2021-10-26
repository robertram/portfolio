import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import ContextWrapper from "../components/ContextWrapper";

const IndexPage = () => {
  return (
    <ContextWrapper>
      <main>
        <Layout pageTitle="Home Page">
          <h1>My portfolio</h1>
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
          />
        </Layout>
      </main>
    </ContextWrapper>
  );
};

export default IndexPage;
