import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { ThemeContext } from "../context/themeContext";
import tw from "twin.macro";
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
    <HeaderContainer className="Header" openMobile={openMobile}>
      <nav className="Header__nav">
        <div className="Header__logoLinkContainer">
          <a href="/" title="Home" className="Header__logoLink">
            <Logo className="Header__logo" />
          </a>
        </div>

        <div className="Header__menu">
          <ul className="Header__itemsList">
            {items.map((item, index) => (
              <li className="Header__item" key={index}>
                <Link
                  to={item.link}
                  className="Header__link body"
                  title={item.title}
                >
                  <a className="Header__linkItem">{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div className="Header__modeButtonContainer">
            <button
              onClick={() => setMode(theme === "dark" ? "light" : "dark")}
              className="Header__modeButton"
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="Header__mobileToggle"
        >
          <div className="Header__hamburguerLineContainer">
            <span className="Header__hamburguerLine"></span>
            <span className="Header__hamburguerLine"></span>
            <span className="Header__hamburguerLine"></span>
            <span className="Header__hamburguerLine"></span>
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
  background-color: ${(props) => props.theme.global.bg2};
  .Header {
    &__nav {
      ${tw`flex justify-between max-w-5xl pr-10 pl-10`}
      width: 100%;
    }
    &__logoLinkContainer {
      width: 45%;
      @media only screen and (max-width: 640px) {
        width: auto;
      }
    }
    &__itemsList {
      ${tw`flex flex-col sm:flex-row`}
      padding: 0;
      margin: 0;

      @media only screen and (max-width: 640px) {
        margin-bottom: 20px;
      }
    }
    &__item {
      ${tw`flex-initial`}
      list-style-type: none;
      margin-right: 20px;
      &:hover {
        text-decoration: none;
        color: ${(props) => props.theme.global.linkHover};
      }

      @media only screen and (max-width: 640px) {
        margin: auto;
        margin-bottom: 30px;
      }
    }
    &__link {
      color: black;
      text-decoration: none;
    }
    &__linkItem {
      text-decoration: none;
      color: ${(props) => props.theme.global.link};
      &:hover {
        color: ${(props) => props.theme.global.linkHover};
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
            background: ${(props) => props.theme.global.bg2};
            transition: background 0.2s ease-out;
            height: 100%;
            padding-top: 80px;
          `}
      }
    }

    &__modeButtonContainer {
      display: flex;
      justify-content: center;
      @media only screen and (max-width: 640px) {
        width: 100%;
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
      background-color: ${(props) => props.theme.global.color};
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

Header.defaultProps = {
  theme: {
    font: "Slabo 13px",
  },
};

export default Header;
