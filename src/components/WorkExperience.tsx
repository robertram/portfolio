import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { WorkExperienceCard } from "./WorkExperienceCard";

interface Props {
  workData: any;
}

const WorkExperience = (props: Props) => {
  const { workData } = props;
  const [workArray, setWorkArray] = useState<any>([]);
  const [activeCompany, setActiveCompany] = useState(
    workArray.length > 0 && workArray[0]
  );

  const sortByDate = (data: any) => {
    const sorted = data.sort((a: any, b: any) => {
      const date1: any = new Date(b.raw_date);
      const date2: any = new Date(a.raw_date);
      return date1 - date2;
    });

    setWorkArray(sorted);
  };

  useEffect(() => {
    sortByDate(workData);
    setActiveCompany(workData[0]);
  }, []);

  return (
    <WorkContainer id="work" style={{ scrollMarginTop: "60px" }}>
      <div className="WorkCard__parent m-auto py-8 pb-12 flex justify-center items-center">
        <div className="w-full">
          <h3 className="text-5xl mb-6">Where I have worked</h3>

          <div className="flex flex-col md:flex-row border-red border-2 max-w-4xl m-auto">
            <div className="flex flex-row md:flex-col md:mb-0 mb-5 md:overflow-hidden overflow-x-scroll md:border-0 border-b-2 border-solid border-lightBlue">
              {workArray &&
                workArray.map((item: any) => {
                  return (
                    <div
                      className={`company cursor-pointer hover:text-linkHover md:mb-2 text-xl mr-4 md:mr-0 whitespace-nowrap md:p-0 p-4 ${
                        activeCompany.company == item.company
                          ? "md:text-linkHover md:border-0 border-b-2 border-linkHover border-solid"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveCompany(item);
                      }}
                    >
                      {item.company}
                    </div>
                  );
                })}
            </div>

            <div className="activeCompany md:ml-10">
              {activeCompany && <WorkExperienceCard cardData={activeCompany} />}
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
          </div> */}
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

export default WorkExperience;
