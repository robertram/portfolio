import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Card = ({ article }: any) => {
  return (
    <CardContainer className="h-full mb-6">
      <Link
        to={`/article/${article.node.slug}`}
        className="Card__link no-underline group"
      >
        <div className="Card__imageContainer mb-3 md:mb-5">
          <img
            src={article.node.picture.img[0].formats.medium.url}
            alt={`${article.node.title} image`}
            className="Card__image md:w-96 md:h-52 object-cover"
          />
        </div>
        <div>
          <p className="Card__title text-3xl group-hover:text-orange">
            {article.node.title}
          </p>
          {/*<p className="Card__category ">
            {article.node.category.name.charAt(0).toUpperCase() +
              article.node.category.name.slice(1)}
            </p>*/}
          <div>
            <hr className="uk-divider-small" />
            <div>
              <div>
                <p className="Card__author text-xl group-hover:text-orange">
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
`;

export default Card;
