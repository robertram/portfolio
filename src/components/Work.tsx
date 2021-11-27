import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SharedCard as WorkCard } from "./SharedCard";

interface Props {
  workData: any;
}

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
          <h3 className="text-5xl mb-6">My Work</h3>
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
