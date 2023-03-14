import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Markdown from "react-markdown";
import RightArrow from "../images/RightArrow";

interface ICard {
  cardData: CardProps;
}

interface CardProps {
  title: string;
  description?: string;
  picture?: any;
  date?: string;
  link?: string;
  company?: string;
  company_link?: string;
  teches?: any;
  provider?: string;
}

export const WorkExperienceCard = (props: ICard) => {
  const {
    title,
    description,
    picture,
    date,
    link,
    company,
    company_link,
    teches,
    provider,
  } = props.cardData;
  return (
    <WorkExperienceCardContainer className="max-w-xl h-full mb-4 rounded-xl shadow-md bg-background2-light dark:bg-background2-dark hover:shadow-2xl transition-all duration-500">
      <div className="flex flex-col">
        {picture && (
          <div className="WorkExperienceCard__imageContainer sm:mr-6 mb-4 rounded-xl rounded-tl-xl rounded-tr-xl">
            <img
              src={picture.img[0].url}
              alt={title}
              className="WorkExperienceCard__image w-full object-cover object-center rounded-tl-xl rounded-tr-xl "
            />
          </div>
        )}
        <div className="w-full flex flex-col justify-center sm:m-0 border-2 p-6">
          <h3 className="dark:text-text-dark text-text-light text-2xl sm:text-2xl mb-2">
            {title} @{" "}
            <a
              href={company_link}
              className="cursor-pointer hover:underline hover:text-linkHover"
              target="_blank"
            >
              {company}
            </a>
          </h3>

          {date && (
            <p className="dark:text-text-dark text-text-light text-md font-semibold">
              {date}
            </p>
          )}
          {description && (
            <div className="description mt-3">
              <Markdown
                children={description}
                components={{
                  h2: ({ node, ...props }) => (
                    <h2
                      {...props}
                      className="text-3xl font-normal dark:text-text-dark text-text-light"
                    ></h2>
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      {...props}
                      className="text-2xl font-normal dark:text-text-dark text-text-light"
                    ></h3>
                  ),
                  strong: ({ node, ...props }) => (
                    <strong
                      {...props}
                      className="dark:text-orange text-background2"
                    ></strong>
                  ),
                  li: ({ node, ...props }) => (
                    <li
                      {...props}
                      className="flex dark:text-text-dark text-text-light "
                    >
                      <RightArrow
                        width={10}
                        height={10}
                        className="mr-2 mt-2 "
                      />
                      {props.children}
                    </li>
                  ),
                }}
                className="Markdown dark:text-text-dark text-text-light "
              />
            </div>
          )}

          <div className="flex mt-2 flex-wrap">
            {teches &&
              teches.map((item: any, index: number) => (
                <p
                  key={index}
                  className="text-sm dark:text-gray-300 bg-background-light dark:bg-background-dark w-min h-full px-2 py-1 mr-2 mb-2 rounded-lg whitespace-nowrap"
                >
                  {item.name}
                </p>
              ))}
          </div>

          {link && <Button text="See project" blank link={link} />}
        </div>
      </div>
    </WorkExperienceCardContainer>
  );
};
const WorkExperienceCardContainer = styled.div`
  @media (min-width: 640px) {
    min-height: 200px;
  }
  .WorkExperienceCard {
    &__imageContainer {
      width: 100%;
      @media (min-width: 640px) {
        max-height: 200px;
      }
    }
    &__image {
      width: 100%;
      @media (min-width: 640px) {
        max-height: 200px;
      }
    }
  }

  .Markdown {
    li {
    }
  }
`;
