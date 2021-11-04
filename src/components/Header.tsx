import React, { useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ThemeContext } from "../context/themeContext";

const items = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/blog", title: "Blog" },
];

const Header = () => {
  const { theme, setMode } = useContext(ThemeContext);
  return (
    <HeaderContainer className="Header">
      <nav className="Header__nav">
        <ul className="Header__itemsList">
          {items.map((item, index) => (
            <li className="Header__item" key={index}>
              <Link to={item.link} className="Header__link body">
                <a className="Header__linkItem">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>

        <button onClick={() => setMode(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
  padding: 20px 0;
  transition: background 0.2s ease-out;
  background-color: ${(props) => props.theme.global.bg2};
  .Header {
    &__nav {
      display: flex;
    }
    &__itemsList {
      display: flex;
      padding: 0;
    }
    &__item {
      list-style-type: none;
      margin: 0 10px;
      &:hover {
        text-decoration: none;
        color: ${(props) => props.theme.global.linkHover};
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
  }
`;

Header.defaultProps = {
  theme: {
    font: "Slabo 13px",
  },
};

export default Header;
