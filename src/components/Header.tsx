import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { ThemeContext } from "../context/themeContext";
import Sun from "../images/Sun";
import Moon from "../images/Moon";
import Logo from "../images/Logo";
import LinkedIn from "../images/LinkedIn";
import GitHub from "../images/Github";

export interface Props {
  openMobile: boolean;
}

const items = [
  { link: "/", title: "Home" },
  { link: "#work", title: "Work" },
  { link: "#education", title: "Education" },
];

const Header = () => {
  const { theme, setMode } = useContext(ThemeContext);
  const [openMobile, setOpenMobile] = useState(false);
  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobile]);
  return (
    <HeaderContainer
      className="Header dark:bg-background2-dark bg-background2-light flex justify-center mx-auto fixed w-full z-50"
      openMobile={openMobile}
    >
      <nav className="Header__nav flex justify-between max-w-screen-2xl pr-10 pl-10 w-full">
        <div className="Header__logoLinkContainer my-auto">
          <a href="/" title="Home" className="Header__logoLink">
            <Logo />
          </a>
        </div>

        <div className="Header__menu dark:bg-background2-dark bg-background2-light">
          <ul className="Header__itemsList flex flex-col sm:flex-row p-0 mb-5 sm:m-0 sm:my-auto">
            {items.map((item, index) => (
              <li
                className="Header__item flex-initial m-auto mb-6 sm:mb-0 sm:mr-6 list-none no-underline"
                key={index}
                onClick={() => setOpenMobile(!openMobile)}
              >
                <Link
                  to={item.link}
                  className="Header__link body no-underline dark:text-link-dark text-link-light hover:text-linkHover dark:hover:text-linkHover "
                  title={item.title}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="Header__modeButtonContainer flex justify-center sm:justify-end w-full flex-col sm:flex-row sm:w-0 ">
            <div className="m-auto sm:mx-0 mb-8 sm:mb-0 flex flex-col sm:flex-row">
              <a
                href="https://www.linkedin.com/in/robert-ramirez-marin/"
                className="cursor-pointer block mb-4 sm:mb-0 sm:mr-2"
                target="_blank"
              >
                <LinkedIn />
              </a>
              <a
                href="https://github.com/robertram"
                className="cursor-pointer block"
                target="_blank"
              >
                <GitHub />
              </a>
            </div>
            <button
              onClick={() => setMode(theme === "dark" ? "light" : "dark")}
              className="Header__modeButton text-grey-darker text-base text-center leading-normal hover:text-red m-auto sm:mr-0 sm:ml-6"
            >
              {/* theme == "light" &&  <Sun />*/}
              {/* theme == "dark" &&  <Moon />*/}
              {theme != "dark" ? <Moon /> : <Sun />}
            </button>
          </div>
        </div>
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="Header__mobileToggle"
        >
          <div className="Header__hamburguerLineContainer">
            <span className="Header__hamburguerLine dark:bg-background-light bg-background-dark"></span>
            <span className="Header__hamburguerLine dark:bg-background-light bg-background-dark"></span>
            <span className="Header__hamburguerLine dark:bg-background-light bg-background-dark"></span>
            <span className="Header__hamburguerLine dark:bg-background-light bg-background-dark"></span>
          </div>
        </button>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<Props>`
  margin: auto 0;
  padding: 20px 0;
  .Header {
    &__logoLinkContainer {
      width: 40%;
      @media only screen and (max-width: 640px) {
        width: auto;
      }
    }
    &__menu {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 60%;

      @media only screen and (max-width: 640px) {
        display: none;
        ${(props) =>
          props.openMobile &&
          css`
            display: block;
            flex-direction: column;
            justify-content: start;
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100vh;
            padding-top: 80px;
          `}
      }
    }
    &__modeButtonContainer {
      width: 20%;
      @media only screen and (max-width: 640px) {
        width: 100%;
      }
    }

    &__modeButton {
      border: none;
      background: none;
      height: 26px;
      cursor: pointer;
      width: 30px;
      padding: 0;
    }

    &__mobileToggle {
      padding: 0;
      border: none;
      background: none;
      display: none;
      @media only screen and (max-width: 640px) {
        display: block;
      }
    }

    &__hamburguerLineContainer {
      width: 25px;
      height: 20px;
      position: relative;
      margin: 0px auto;
      transform: rotate(0deg);
      transition: 0.5s ease-in-out;
      cursor: pointer;
      display: block;
    }

    &__hamburguerLine {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }

    &__hamburguerLine:nth-child(1) {
      top: 0;
    }

    &__hamburguerLine:nth-child(2) {
      top: 10px;
    }

    &__hamburguerLine:nth-child(3) {
      top: 10px;
    }

    &__hamburguerLine:nth-child(4) {
      top: 20px;
    }

    ${(props) =>
      props.openMobile &&
      css`
        &__hamburguerLine:nth-child(1) {
          top: 18px;
          width: 0;
          left: 50%;
        }

        &__hamburguerLine:nth-child(2) {
          transform: rotate(45deg);
        }

        &__hamburguerLine:nth-child(3) {
          transform: rotate(-45deg);
        }

        &__hamburguerLine:nth-child(4) {
          top: 18px;
          width: 0;
          left: 50%;
        }
      `}
  }
`;

export default Header;
