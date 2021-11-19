import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { ThemeContext } from "../context/themeContext";
import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";
import Logo from "../images/logo.svg";

export interface Props {
  openMobile: boolean;
}

const items = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/blog", title: "Blog" },
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
      className="Header dark:bg-background-dark bg-background-light"
      openMobile={openMobile}
    >
      <nav className="Header__nav flex justify-between max-w-5xl pr-10 pl-10 w-full">
        <div className="Header__logoLinkContainer">
          <a href="/" title="Home" className="Header__logoLink">
            <Logo className="Header__logo" />
          </a>
        </div>

        <div className="Header__menu dark:bg-background-dark bg-background-light">
          <ul className="Header__itemsList flex flex-col sm:flex-row p-0 mb-5 sm:m-0">
            {items.map((item, index) => (
              <li
                className="Header__item flex-initial m-auto mb-6 sm:mb-0 sm:mr-6 list-none no-underline hover:text-linkHover"
                key={index}
              >
                <Link
                  to={item.link}
                  className="Header__link body no-underline dark:text-link-dark text-link-light"
                  title={item.title}
                >
                  <a className="Header__linkItem no-underline dark:text-link-dark text-link-light hover:text-linkHover">
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="Header__modeButtonContainer flex justify-center w-full sm:w-0 ">
            <button
              onClick={() => setMode(theme === "dark" ? "light" : "dark")}
              className="Header__modeButton"
            >
              {theme === "dark" ? (
                <Sun className="Header__Sun" />
              ) : (
                <Moon className="Header__Moon" />
              )}
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
  display: flex;
  justify-content: center;
  margin: auto 0;
  padding: 20px 0;
  transition: background 0.2s ease-out;
  .Header {
    &__logoLinkContainer {
      width: 45%;
      @media only screen and (max-width: 640px) {
        width: auto;
      }
    }
    &__item {
      &:hover {
        //color: ${(props) => props.theme.global.linkHover};
      }
    }
    &__link {
      color: black;
    }
    &__linkItem {
      //color: ${(props) => props.theme.global.link};
      &:hover {
        //color: ${(props) => props.theme.global.linkHover};
      }
    }
    &__menu {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 65%;

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
            transition: background 0.2s ease-out;
            height: 100%;
            padding-top: 80px;
          `}
      }
    }

    &__modeButton {
      border: none;
      background: none;
      height: 20px;
      cursor: pointer;

      svg {
        width: 20px;
      }
      &:hover {
        svg {
          stroke: ${(props) => props.theme.global.linkHover};
          path {
            fill: ${(props) => props.theme.global.linkHover};
          }
        }
      }
    }

    &__logo {
      path {
        stroke: ${(props) => props.theme.global.color};
        fill: ${(props) => props.theme.global.color};
      }
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
