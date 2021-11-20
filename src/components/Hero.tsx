import * as React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface Props {
  title: string;
  description: string;
  image?: any;
}

const Hero = (props: Props) => {
  const { title, description, image } = props;
  return (
    <HeroContainer>
      <div className="m-auto h-full py-14">
        <div className="flex flex-col sm:flex-row sm:m-auto">
          <div className="w-full sm:w-1/2 flex flex-col justify-center mb-6 sm:m-0">
            <h1 className="dark:text-text-dark text-text-light text-6xl sm:text-7xl mb-2 sm:mb-6">
              {title}
            </h1>
            <h2 className="dark:text-text-dark text-text-light text-4xl sm:text-4xl">
              {description}
            </h2>
          </div>
          <div className="w-full sm:w-1/2 ">
            <img src={image} alt={title} className="w-full" />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.div``;

export default Hero;
