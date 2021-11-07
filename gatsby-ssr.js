// gatsby-ssr.js
const React = require("react");
//require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/theme").default;
const Layout = require("./src/components/Layout").default;

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </>
  );
};
