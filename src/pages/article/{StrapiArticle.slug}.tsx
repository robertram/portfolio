import React from "react";
import { graphql } from "gatsby";
import Moment from "react-moment";
import Layout from "../../components/Layout";
import Markdown from "react-markdown";
import { ThemeProvider } from "../../context/themeContext";
import styled from "styled-components";

const Article = ({ data }: any) => {
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
        <ArticleContainer className="Article h-full">
          <div className="Article__wrapper max-w-5xl pr-10 pl-10 m-auto">
            {article.picture && (
              <img
                src={article.picture.img[0].formats.large.url}
                alt={`Picture for ${article.title} article`}
                className="Article__image w-full"
              />
            )}
            <div className="Article__content mt-5 pb-5">
              <h1 className="text-5xl">{article.title}</h1>
              <Markdown children={article.content} />

              <hr className="" />

              <div className="">
                <div>
                  {writter.picture && (
                    <img
                      src={writter.picture.img[0].formats.thumbnail.url}
                      alt={`Picture of ${article.author.name}`}
                    />
                  )}
                </div>
                <div className="">
                  <p className="">By {article.author.name}</p>
                  <p className="">
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

const ArticleContainer = styled.div``;

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
