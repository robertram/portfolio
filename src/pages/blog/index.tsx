import * as React from "react";
import Layout from "../../components/layout";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import { ThemeProvider } from "../../components/theme";

const BlogPage = ({ data }) => {
  return (
    <ThemeProvider>
      <BlogPageContainer>
        <Layout pageTitle="My Blog Posts">
          <p>My cool posts will go in here</p>
          <ul className="BlogPage__titleContainer">
            {data.allMdx.nodes.map((node) => (
              <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
            ))}
          </ul>
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
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
