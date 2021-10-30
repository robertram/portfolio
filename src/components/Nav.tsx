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
      <nav className="uk-navbar-container Nav" data-uk-navbar>
        <div className="uk-navbar-right">
          <button
            className="uk-button uk-button-default uk-margin-right Nav__button"
            type="button"
          >
            Categories
          </button>
          <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
            <ul className="uk-nav uk-dropdown-nav">
              {data.allStrapiCategory.edges.map((category, i) => (
                <li key={`category__${category.node.slug}`}>
                  <Link to={`/category/${category.node.slug}`}>
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
  background-color: ${(props) => props.theme.global.bg};
  .Nav {
    background-color: ${(props) => props.theme.global.bg} !important;
    transition: background 0.2s ease-out;
    color: ${(props) => props.theme.global.color} !important;
    &__button {
      color: ${(props) => props.theme.global.color};
    }
  }
`;

export default Nav;
