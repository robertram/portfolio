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
        <ArticleContainer className="Article h-full pt-16">
          <div className="Article__wrapper max-w-5xl pr-10 pl-10 m-auto dark:text-text-dark text-text-light">
            {article.picture && (
              <img
                src={article.picture.img[0].formats.large.url}
                alt={`Picture for ${article.title} article`}
                className="Article__image w-full"
              />
            )}
            <div className="Article__content mt-5 pb-5">
              <h1 className="text-5xl mb-6">{article.title}</h1>
              <article className="prose lg:prose-xl mb-6 prose-indigo dark:text-text-dark text-text-light">
                {/*dark:text-text-dark text-text-light */}
                <Markdown
                  children={article.content}
                  className="Markdown dark:text-text-dark text-text-light "
                />
              </article>

              <hr className="" />

              <div className="flex mt-6">
                {/* <div className="mr-2">
                  writter.picture && (
                    <img
                      src={writter.picture.img[0].formats.thumbnail.url}
                      alt={`Picture of ${article.author.name}`}
                    />
                  )
                </div>*/}
                <div className="">
                  <p className="text-2xl font-semibold">
                    By {article.author.name}
                  </p>
                  <div className="flex">
                    <p className="font-semibold">Published:&nbsp;</p>
                    <p className="">
                      <Moment format="MMM Do YYYY">
                        {article.published_at}
                      </Moment>
                    </p>
                  </div>
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
  h1,
  h2,
  h3,
  h4 {
  }

  strong {
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
