import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";
import Articles from "../components/Articles";

const IndexPage = () => {
  const data = useStaticQuery(query);
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page" seo={data.strapiHomepage.seo}>
        <HomeContainer>
          <h1 className="header1">{data.strapiHomepage.hero.title}</h1>
          <Articles articles={data.allStrapiArticle.edges} />
        </HomeContainer>
      </Layout>
    </ThemeProvider>
  );
};
const HomeContainer = styled.div`
  .Home {
    &__image {
      width: 200px;
    }
  }
`;

const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
      }
      seo {
        metaTitle
        metaDescription
        shareImage {
          localFile {
            publicURL
          }
        }
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
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 660)
              }
            }
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
  }
`;

export default IndexPage;
