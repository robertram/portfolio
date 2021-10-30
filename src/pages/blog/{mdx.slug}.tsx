import * as React from "react";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";
import { ThemeProvider } from "../../context/themeContext";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <ThemeProvider>
      <Layout pageTitle="Super Cool Blog Posts">
        <BlogPostContainer>
          <h1>{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.date}</p>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
          <p>
            Photo Credit:{" "}
            <a href={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </a>
          </p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </BlogPostContainer>
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const BlogPostContainer = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default BlogPost;
