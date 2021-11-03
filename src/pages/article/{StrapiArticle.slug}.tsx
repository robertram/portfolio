import React from "react";
import { graphql } from "gatsby";
import Moment from "react-moment";
import Layout from "../../components/Layout";
import Markdown from "react-markdown";
import { ThemeProvider } from "../../context/themeContext";
import styled from "styled-components";

const Article = ({ data }) => {
  const article = data.strapiArticle;
  const writter = data.strapiWriter;
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <ThemeProvider>
      <Layout seo={seo}>
        <ArticleContainer className="Article">
          <div>
            {article.picture && (
              <img
                src={article.picture.img[0].formats.large.url}
                alt={`Picture for ${article.title} article`}
                className="Article__image"
              />
            )}
          </div>
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <h1>{article.title}</h1>
              <Markdown children={article.content} />

              <hr className="uk-divider-small" />

              <div className="uk-grid-small uk-flex-left">
                <div>
                  {writter.picture && (
                    <img
                      src={writter.picture.img[0].formats.thumbnail.url}
                      alt={`Picture of ${article.author.name}`}
                    />
                  )}
                </div>
                <div className="uk-width-expand">
                  <p className="uk-margin-remove-bottom">
                    By {article.author.name}
                  </p>
                  <p className="uk-text-meta uk-margin-remove-top">
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                    {article.published_at}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ArticleContainer>
      </Layout>
    </ThemeProvider>
  );
};

const ArticleContainer = styled.div`
  height: 100%;
  .Article {
    height: 100%;
    &__image {
      width: 100%;
    }
  }
`;

export const query = graphql`
  query ArticleQuery($slug: String!) {
    strapiArticle(slug: { eq: $slug }) {
      strapiId
      title
      description
      content
      published_at
      author {
        name
      }
      picture {
        img {
          formats {
            large {
              url
            }
          }
        }
      }
    }
    strapiWriter {
      picture {
        img {
          formats {
            thumbnail {
              url
            }
          }
        }
      }
    }
  }
`;

export default Article;
