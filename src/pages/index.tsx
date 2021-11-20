import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";
import Hero from "../components/Hero";
import { graphql } from "gatsby";

const IndexPage = ({ data }: any) => {
  const title = data.strapiHomepage.hero.title;
  const description = data.strapiHomepage.hero.description;
  const image = data.strapiHomepage.hero.heroImage.img[0].url;
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page">
        {console.log(data)}
        <HomeContainer>
          <div className="Home__wrapper pr-10 pl-10 max-w-screen-2xl m-auto pt-16">
            <Hero title={title} description={description} image={image} />
            <Hero title={title} description={description} image={image} />
            <Hero title={title} description={description} image={image} />
            <Hero title={title} description={description} image={image} />
          </div>
        </HomeContainer>
      </Layout>
    </ThemeProvider>
  );
};
const HomeContainer = styled.div`
  .Home {
  }
`;

export const query = graphql`
  query {
    strapiHomepage {
      hero {
        title
        description
        heroImage {
          img {
            url
          }
        }
      }
      seo {
        metaTitle
        metaDescription
      }
    }
  }
`;

export default IndexPage;
