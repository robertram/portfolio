import * as React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import { ThemeProvider } from "../../context/themeContext";
import Articles from "../../components/Articles";
import Nav from "../../components/Nav";

const BlogPage = ({ data }: any) => {
  return (
    <ThemeProvider>
      <Layout pageTitle="My Blog Posts" seo={data.strapiHomepage.seo}>
        <BlogPageContainer>
          <Nav />
          <div className="BlogPage__wrapper max-w-5xl pr-10 pl-10 m-auto">
            <div className="BlogPage__articlesContainer container mx-auto px-0">
              <h1 className="header1">{data.strapiHomepage.hero.title}</h1>
              <Articles articles={data.allStrapiArticle.edges} />
            </div>
          </div>
        </BlogPageContainer>
      </Layout>
    </ThemeProvider>
  );
};

const BlogPageContainer = styled.div`
  .BlogPage {
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
