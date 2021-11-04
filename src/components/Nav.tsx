import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        siteName
      }
      allStrapiCategory {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);
  return (
    <NavContainer>
      <nav className="Nav">
        <div className="">
          <div>
            <ul className="Nav__linksContainer">
              {data.allStrapiCategory.edges.map((category, i) => (
                <li
                  key={`category__${category.node.slug}`}
                  className="Nav__links"
                >
                  <Link
                    to={`/category/${category.node.slug}`}
                    className="Nav__links"
                  >
                    {category.node.name.charAt(0).toUpperCase() +
                      category.node.name.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .Nav {
    transition: background 0.2s ease-out;
    background-color: ${(props) => props.theme.global.bg} !important;
    color: ${(props) => props.theme.global.color} !important;

    &__button {
      color: ${(props) => props.theme.global.color};
    }
    &__linksContainer {
      display: flex;
      justify-content: center;
    }
    &__links {
      color: ${(props) => props.theme.global.color};
      margin-right: 10px;
    }
  }
`;

export default Nav;
