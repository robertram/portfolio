import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

interface Props {
  workData: any;
}

interface CardProps {
  title: string;
  description?: string;
  picture?: any;
  date?: string;
  link?: string;
  company?: string;
  teches?: any;
}

const WorkCard = (props: CardProps) => {
  const { title, description, picture, date, link, company, teches } = props;
  return (
    <WorkCardContainer className="h-full mb-4 bg-background2-light dark:bg-background2-dark rounded-xl shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="flex flex-col">
        {picture && (
          <div className="WorkCard__imageContainer sm:mr-6 mb-4 rounded-xl rounded-tl-xl rounded-tr-xl">
            <img
              src={picture.img[0].url}
              alt={title}
              className="WorkCard__image w-full object-cover object-center rounded-tl-xl rounded-tr-xl "
            />
          </div>
        )}
        <div className="w-full flex flex-col justify-center sm:m-0 border-2 p-6 pt-0">
          <h4 className="dark:text-text-dark text-text-light text-4xl sm:text-4xl mb-2">
            {title}
          </h4>
          {company && (
            <p className="dark:text-text-dark text-text-light text-3xl sm:text-2xl font-semibold mb-2 ">
              {company}
            </p>
          )}
          {description && (
            <p className="dark:text-text-dark text-text-light text-xl sm:text-base mb-2 ">
              {description}
            </p>
          )}
          {date && (
            <p className="dark:text-text-dark text-text-light text-md font-semibold">
              {date}
            </p>
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
    </WorkCardContainer>
  );
};
const WorkCardContainer = styled.div`
  @media (min-width: 640px) {
    min-height: 250px;
  }
  .WorkCard {
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
`;

const Work = (props: Props) => {
  const { workData } = props;
  const [workArray, setWorkArray] = useState([]);

  const sortByDate = (data: any) => {
    data.sort((a: any, b: any) => {
      const date1: any = new Date(b.realDate);
      const date2: any = new Date(a.realDate);
      return date1 - date2;
    });
    setWorkArray(data);
  };

  useEffect(() => {
    sortByDate(workData);
  }, []);

  return (
    <WorkContainer id="work">
      <div className="WorkCard__parent m-auto py-8 flex justify-center items-center">
        <div className="w-full">
          <h3 className="text-5xl font-medium mb-6">My Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {workArray &&
              workArray.map((item: any, index: number) => {
                const {
                  title,
                  description,
                  picture,
                  date,
                  link,
                  company,
                  teches,
                } = item;
                return (
                  <div key={index}>
                    <WorkCard
                      title={title}
                      description={description}
                      picture={picture}
                      date={date}
                      link={link}
                      company={company}
                      teches={teches}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  .Work {
    &__parent {
      min-height: calc(100vh - 60px);
    }
  }
`;

export default Work;
