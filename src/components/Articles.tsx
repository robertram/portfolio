import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Articles = ({ articles }) => {
  return (
    <ArticlesContainer>
      {articles.map((article, i) => {
        return (
          <Card article={article} key={`article__left__${article.node.slug}`} />
        );
      })}
    </ArticlesContainer>
  );
};

const ArticlesContainer = styled.div`
  margin: auto;
  width: 100%;

  .Articles {
  }
`;

export default Articles;
