import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { ThemeProvider } from "../context/themeContext";
import Hero from "../components/Hero";
import { graphql } from "gatsby";
import Work from "../components/Work";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Footer from "../components/Footer";

const IndexPage = ({ data }: any) => {
  const title = data.strapiHomepage.hero.title;
  const description = data.strapiHomepage.hero.description;
  const image = data.strapiHomepage.hero.heroImage.img[0].url;

  const work = data.allStrapiExperience.nodes;
  const education = data.allStrapiEducation.nodes;
  const workExperience = data.allStrapiWorkExperience.nodes;

  
  return (
    <ThemeProvider>
      <Layout pageTitle="Home Page">
        <HomeContainer>
          <div className="Home__wrapper pr-10 pl-10 max-w-screen-2xl m-auto pt-16">
            <Hero title={title} description={description} image={image} />

            <WorkExperience workData={workExperience}/>
            <Work workData={work} />
            <Education educationData={education} />
            <Footer />
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
    allStrapiExperience {
      nodes {
        picture {
          img {
            url
          }
        }
        description
        date
        company
        link
        title
        realDate
        teches {
          name
        }
      }
    }
    allStrapiEducation {
      nodes {
        picture {
          img {
            url
          }
        }
        provider
        title
        furtherEducation
        date
        realDate
      }
    }
    allStrapiWorkExperience {
      nodes {
        company
        company_link
        title
        raw_date
        work_type
        description
        date
      }
    }
  }
`;

export default IndexPage;
