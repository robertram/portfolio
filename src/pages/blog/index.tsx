import * as React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { ThemeProvider } from "../../context/themeContext";
import Articles from "../../components/Articles";
import Nav from "../../components/Nav";

const BlogPage = ({ data }) => {
  return (
    <ThemeProvider>
      <BlogPageContainer>
        <Layout pageTitle="My Blog Posts" seo={data.strapiHomepage.seo}>
          <Nav />
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1 className="header1">{data.strapiHomepage.hero.title}</h1>
              <Articles articles={data.allStrapiArticle.edges} />
            </div>
          </div>
        </Layout>
      </BlogPageContainer>
    </ThemeProvider>
  );
};

const BlogPageContainer = styled.div`
  .BlogPage {
    &__titleContainer {
      padding: 0;
    }
  }
`;

export const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
      }
    }
    allStrapiArticle {
      edges {
        node {
          strapiId
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
  }
`;

export default BlogPage;
