import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import { ThemeProvider } from "../context/themeContext";
import { Helmet } from "react-helmet";

// markup
const NotFoundPage = () => {
  return (
    <ThemeProvider>
      <Layout pageTitle="About Me">
        <Helmet title="Page not found" />
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </ThemeProvider>
  );
};

export default NotFoundPage;
