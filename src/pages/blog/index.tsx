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
          <div className="BlogPage__wrapper pr-10 pl-10 max-w-screen-2xl m-auto pt-16">
            {/*<Nav />*/}
            <div className="BlogPage__articlesContainer container mx-auto px-0">
              <h1 className="text-5xl my-6">Blog</h1>
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
