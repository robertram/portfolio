import React from "react";
import Card from "./Card";
import styled from "styled-components";
import tw from "twin.macro";

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
  ${tw`grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-3`}
  .Articles {
  }
`;

export default Articles;
