import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Card = ({ article }) => {
  return (
    <CardContainer>
      <Link to={`/article/${article.node.slug}`} className="Card__link">
        <div className="Card__imageContainer">
          <img
            src={article.node.picture.img[0].formats.medium.url}
            alt={`${article.node.title} image`}
            className="Card__image"
          />
        </div>
        <div>
          <p className="Card__category header4">
            {article.node.category.name.charAt(0).toUpperCase() +
              article.node.category.name.slice(1)}
          </p>
          <p className="Card__title header3">{article.node.title}</p>
          <div>
            <hr className="uk-divider-small" />
            <div>
              <div>
                <p className="Card__author header5">
                  {article.node.author?.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  width: fit-content;
  margin: auto;
  margin-bottom: 30px;

  .Card {
    &__link {
      &:hover {
        text-decoration: none;
      }
    }
    &__imageContainer {
      margin-bottom: 10px;
    }
    &__title,
    &__category,
    &__author {
    }
  }
`;

export default Card;
