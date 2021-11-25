import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export interface SEOProps {
  seo?: { Props: any };
}

export interface Props {
  title: string;
  description: string;
  image: string;
  article: boolean;
}

const SEO = ({ seo = {} }) => {
  const { strapiGlobal } = useStaticQuery(query);
  const { defaultSeo, siteName } = strapiGlobal; //favicon

  // Merge default and page-specific SEO values
  const fullSeo = { ...defaultSeo, ...seo };

  const getMetaTags = () => {
    const tags = [];

    if (fullSeo.metaTitle) {
      tags.push(
        {
          property: "og:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "twitter:title",
          content: fullSeo.metaTitle,
        },
        {
          name: "author",
          content: "Robert Ramirez",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://robertramdev.com/",
        }
      );
    }
    if (fullSeo.metaDescription) {
      tags.push(
        {
          name: "description",
          content: fullSeo.metaDescription,
        },
        {
          property: "og:description",
          content: fullSeo.metaDescription,
        },
        {
          name: "twitter:description",
          content: fullSeo.metaDescription,
        }
      );
    }
    if (fullSeo.shareImage) {
      const imageUrl = fullSeo.shareImage.img[0].url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          name: "image",
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        },
        {
          name: "twitter:image:url",
          content: imageUrl,
        }
      );
    }
    if (fullSeo.article) {
      tags.push({
        property: "og:type",
        content: "article",
      });
    }
    tags.push(
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:site",
        content: "@robertramdev",
      },
      {
        name: "twitter:url",
        content: "https://robertramdev.com/",
      }
    );

    return tags;
  };

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={fullSeo.metaTitle}
      titleTemplate={`%s`}
      link={[
        {
          rel: "icon",
          href: fullSeo.favicon && fullSeo.favicon.img.url,
        },
      ]}
      meta={metaTags}
    />
  );
};

export default SEO;

const query = graphql`
  query {
    strapiGlobal {
      siteName
      defaultSeo {
        metaTitle
        metaDescription
        shareImage {
          img {
            url
          }
        }
      }
      favicon {
        img {
          url
        }
      }
    }
  }
`;
