import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

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
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">{data.strapiGlobal.siteName}</Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <button
            className="uk-button uk-button-default uk-margin-right"
            type="button"
          >
            Categories
          </button>
          <div uk-dropdown="animation: uk-animation-slide-top-small; duration: 1000">
            <ul className="uk-nav uk-dropdown-nav">
              {data.allStrapiCategory.edges.map((category, i) => (
                <li key={`category__${category.node.slug}`}>
                  <Link to={`/category/${category.node.slug}`}>
                    {category.node.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
