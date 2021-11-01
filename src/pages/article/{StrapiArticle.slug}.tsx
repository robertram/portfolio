import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from "react-moment";
import Layout from "../../components/Layout";
import Markdown from "react-markdown";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { ThemeProvider } from "../../context/themeContext";

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <ThemeProvider>
      <Layout seo={seo}>
        <div>
          <div>
            {/*
           TODO: childrenImageSharp research
          
              console.log(
                "childImageSharp",
                article.image.localFile.childrenImageSharp[0].gatsbyImageData
              )
            */}
            {/*
              <GatsbyImage
                style={{
                  gridArea: "1/1",
                }}
                alt={`Picture for ${article.title} article`}
                image={
                  article.image.localFile.childrenImageSharp[0].gatsbyImageData
                }
                layout="fullWidth"
              />*/}
          </div>
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <h1>{article.title}</h1>
              <Markdown children={article.content} escapeHtml={false} />

              <hr className="uk-divider-small" />

              <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                  {/*article.author.picture && (
                  <GatsbyImage
                    image={
                      article.author.picture.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`Picture of ${article.author.name}`}
                    style={{ borderRadius: "50%" }}
                  />
                  )*/}
                </div>
                <div className="uk-width-expand">
                  <p className="uk-margin-remove-bottom">
                    By {article.author.name}
                  </p>
                  <p className="uk-text-meta uk-margin-remove-top">
                    {/*<Moment format="MMM Do YYYY">{article.published_at}</Moment>*/}
                    {article.published_at}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
};

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      description
      content
      published_at
      image {
        localFile {
          publicURL
          childrenImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
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
`;

export default Article;
