import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet"

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site(siteMetadata: {title: {}, siteUrl: {}}) {
      siteMetadata {
        title, siteUrl
      }
    }
  }
`)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>{pageTitle} | {data.site.siteMetadata.title}</h1>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout