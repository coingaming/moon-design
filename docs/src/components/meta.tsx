/** @jsx jsx */ jsx;
import { Helmet } from 'react-helmet';
import { jsx } from '@emotion/core';
import { graphql, StaticQuery, withPrefix } from 'gatsby';

import { CdnLink, avertaStd } from '@heathmont/sportsbet-assets';

const metaQuery = graphql`
  query {
    allDocsJson {
      edges {
        node {
          siteTitle
          description
          author
        }
      }
    }
  }
`;

export const Meta = () => (
  <StaticQuery
    query={metaQuery}
    render={data => {
      const config = data.allDocsJson.edges[0].node;
      return (
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.description} />
          <meta name="author" content={config.author} />
          <CdnLink />
          <link
            rel="preload"
            href={withPrefix(`${avertaStd.fontFilePath.regular}.woff2`)}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={withPrefix(`${avertaStd.fontFilePath.semibold}.woff2`)}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={withPrefix(`${avertaStd.fontFilePath.bold}.woff2`)}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Helmet>
      );
    }}
  />
);
