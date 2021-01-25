import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { cdnUrl } from '@heathmont/sportsbet-cdn';
import { avertaStd } from '@heathmont/moon-fonts';

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
    render={(data) => {
      const config = data.allDocsJson.edges[0].node;
      return (
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.description} />
          <meta name="author" content={config.author} />
          <link rel="preconnect" href={cdnUrl} crossOrigin="true" />
          <link rel="dns-prefetch" href={cdnUrl} />
          <link
            rel="preload"
            href={`${avertaStd.fontFilePath.regular}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${avertaStd.fontFilePath.semibold}.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Helmet>
      );
    }}
  />
);
