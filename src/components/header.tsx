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
              <Link to={item.link} className="Header__link">
                <a>{item.title}</a>
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
  .Header {
    &__itemsList {
      display: flex;
      padding: 0;
    }
    &__item {
      list-style-type: none;
      margin: 0 10px;
      &:hover {
        text-decoration: underline;
      }
    }
    &__link {
      color: black;
      text-decoration: none;
    }
  }
`;

Header.defaultProps = {
  theme: {
    font: "Slabo 13px",
  },
};

export default Header;
