import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const Card = ({ article }) => {
  return (
    <CardContainer>
      <Link to={`/article/${article.node.slug}`} className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img
              src={article.node.picture.img[0].formats.medium.url}
              alt={`${article.node.title} image`}
              className="Card__image"
            />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {article.node.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {article.node.title}
            </p>
            <div>
              <hr className="uk-divider-small" />
              <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div className="uk-width-expand">
                  <p className="uk-margin-remove-bottom">
                    {article.node.author?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  .Card {
  }
`;

export default Card;
