import React from "react";
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/Articles";
import Layout from "../../components/Layout";
import { ThemeProvider } from "../../context/themeContext";

const Category = ({ data }) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <ThemeProvider>
      <Layout seo={seo}>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <ArticlesComponent articles={articles} />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

/*image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 660)
              }
            }
          } */

export const query = graphql`
  query Category($slug: String!) {
    articles: allStrapiArticle(filter: { category: { slug: { eq: $slug } } }) {
      edges {
        node {
          slug
          title
          category {
            name
          }
          author {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 30)
                }
              }
            }
          }
        }
      }
    }
    category: strapiCategory(slug: { eq: $slug }) {
      name
    }
  }
`;

export default Category;
