import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const items = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/blog", title: "Blog" },
];

const Header = () => {
  return (
    <HeaderContainer className="Header">
      <nav className="">
        <ul className="Header__itemsList">
          {items.map((item, index) => (
            <li className="Header__item" key={index}>
              <Link to={item.link} className="Header__link body">
                <a className="Header__linkItem">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
  padding: 20px 0;
  background-color: ${(props) => props.theme.global.bg2};

  .Header {
    background-color: ${(props) => props.theme.global.bg2};
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
