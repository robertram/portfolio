import React from "react";
import Card from "./Card";
import styled from "styled-components";

const Articles = ({ articles }: any) => {
  return (
    <ArticlesContainer className="grid grid-cols-1 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
      {articles.map((article: any, index: number) => {
        return (
          <div key={index}>
            <Card
              article={article}
              key={`article__left__${article.node.slug}`}
            />
          </div>
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
