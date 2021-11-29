import React from "react";
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/Articles";
import Layout from "../../components/Layout";
import { ThemeProvider } from "../../context/themeContext";

const Category = ({ data }: any) => {
  const articles = data.articles.edges;
  const category = data.category.name;
  const seo = {
    metaTitle: category,
    metaDescription: `All ${category} articles`,
  };

  return (
    <ThemeProvider>
      <Layout seo={seo}>
        <div className="pr-10 pl-10 max-w-screen-2xl m-auto pt-16">
          <div className="container mx-auto px-0">
            <h1 className="text-5xl my-6">
              {category.charAt(0).toUpperCase() + category.slice(1)} Articles
            </h1>
            <ArticlesComponent articles={articles} />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

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
          }
          picture {
            img {
              formats {
                medium {
                  url
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
