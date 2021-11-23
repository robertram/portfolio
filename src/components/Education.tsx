import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "./Button";

interface Props {
  educationData: any;
}

interface CardProps {
  title: string;
  description?: string;
  picture?: any;
  date?: string;
  link?: string;
  provider?: string;
}

const EducationCard = (props: CardProps) => {
  const { title, description, picture, date, link, provider } = props;
  return (
    <EducationCardContainer className="border-2 rounded-xl mb-4 bg-background2-light dark:bg-background2-dark p-6">
      <div className="flex flex-col sm:flex-row ">
        {picture && (
          <div className="EducationCard__imageContainer sm:mr-6 mb-4">
            <img
              src={picture.img[0].url}
              alt={title}
              className="EducationCard__image w-full object-cover object-center"
            />
          </div>
        )}
        <div className="w-full sm:w-4/6 flex flex-col justify-center sm:mb-6 sm:m-0">
          <h1 className="dark:text-text-dark text-text-light text-4xl sm:text-5xl mb-2 sm:mb-2">
            {title}
          </h1>
          {description && (
            <h2 className="dark:text-text-dark text-text-light text-2xl sm:text-xl">
              {description}
            </h2>
          )}
          {provider && (
            <h2 className="dark:text-text-dark text-text-light text-2xl sm:text-xl">
              {provider}
            </h2>
          )}
          {date && (
            <p className="dark:text-text-dark text-text-light text-1xl">
              {date}
            </p>
          )}
          {link && <Button text="See project" blank link={link} />}
        </div>
      </div>
    </EducationCardContainer>
  );
};
const EducationCardContainer = styled.div`
  @media (min-width: 640px) {
    min-height: 250px;
    max-height: 250px;
  }
  .EducationCard {
    &__imageContainer {
      width: 100%;
      @media (min-width: 640px) {
        min-width: 400px;
        max-width: 400px;
        min-height: 200px;
        max-height: 200px;
      }
    }
    &__image {
      width: 100%;
      @media (min-width: 640px) {
        min-width: 400px;
        max-width: 400px;
        min-height: 200px;
        max-height: 200px;
      }
    }
  }
`;
const Education = (props: Props) => {
  const { educationData } = props;
  return (
    <EducationContainer id="education">
      <div className="EducationCard__parent m-auto py-8 flex justify-center items-center">
        <div className="w-full">
          <h2 className="text-5xl mb-6">My Education</h2>
          <div className="">
            {educationData &&
              educationData.map((item: any, index: number) => {
                const { title, description, picture, date, provider, link } =
                  item;
                return (
                  <div key={index}>
                    <EducationCard
                      title={title}
                      description={description}
                      picture={picture}
                      date={date}
                      link={link}
                      provider={provider}
                    />
                    {console.log(item)}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </EducationContainer>
  );
};

const EducationContainer = styled.div`
  .Education {
    &__parent {
      min-height: calc(100vh - 60px);
    }
  }
`;

export default Education;
