import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SharedCard as EducationCard } from "./SharedCard";

interface Props {
  educationData: any;
}

const Education = (props: Props) => {
  const { educationData } = props;
  const [educationArray, setEducationArray] = useState([]);

  const sortByDate = (data: any) => {
    data.sort((a: any, b: any) => {
      const date1: any = new Date(b.realDate);
      const date2: any = new Date(a.realDate);
      return date1 - date2;
    });
    setEducationArray(data);
  };

  useEffect(() => {
    sortByDate(educationData);
  }, []);
  return (
    <EducationContainer id="education" style={{ scrollMarginTop: "60px" }}>
      <div className="EducationCard__parent m-auto py-8 pb-12 flex justify-center items-center">
        <div className="w-full">
          <h3 className="text-5xl mb-6">My Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {educationArray &&
              educationArray.map((item: any, index: number) => {
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
