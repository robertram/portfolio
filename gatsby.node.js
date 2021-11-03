exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve("path-browserify"),
      },
      fallback: {
        fs: false,
      },
    },
  });
  if (stage === "build-javascript" || stage === "develop") {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: "process/browser" })],
    });
  }
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `

  type strapiArticle implements Node {
    title: String
    description: String
    author: Author
    photo
  }
  
  type Author implements Node {
    name: String
  }          


  `;
  createTypes(typeDefs);
};
