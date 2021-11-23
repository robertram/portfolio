import * as React from "react";
import styled from "styled-components";

interface Props {
  text: string;
  blank: boolean;
  link?: string;
  action?: () => void;
}

const Button = (props: Props) => {
  const { text, blank, link, action } = props;

  const buttonClass =
    "rounded-3xl py-2 px-4 w-min bg-background-light hover:bg-orange dark:bg-background-dark ";
  const buttonTextClass =
    "text-orange hover:text-text-dark dark:hover:text-text-dark dark:text-orange font-semibold";
  return (
    <ButtonContainer className="my-4">
      {action && !link && (
        <button
          onClick={action}
          className={`${buttonClass} ${buttonTextClass}`}
        >
          {text}
        </button>
      )}
      {link && !action && (
        <a
          href={link}
          className={`${buttonClass} ${buttonTextClass}`}
          target={blank ? "_blank" : "_self"}
        >
          {text}
        </a>
      )}
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  .Button {
    &__parent {
      min-height: calc(100vh - 60px);
    }
  }
`;

export default Button;