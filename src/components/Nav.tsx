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
            <ul className="Nav__linksContainer flex flex-col sm:flex-row justify-center">
              {data.allStrapiCategory.edges.map((category: any) => (
                <li
                  key={`category__${category.node.slug}`}
                  className="Nav__links m-auto md:m-0 md:mr-5"
                >
                  <Link
                    to={`/category/${category.node.slug}`}
                    className="Nav__links flex-initial hover:text-gray-500"
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

    &__links {
      color: ${(props) => props.theme.global.color};
    }
  }
`;

export default Nav;
