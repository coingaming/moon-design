/** @jsx jsx */ jsx;
import { Helmet } from 'react-helmet';
import { jsx } from '@emotion/core';
import { withPrefix } from 'gatsby';

import { fontUrls } from '@heathmont/sportsbet-assets';

export const Meta = () => (
  <Helmet>
    <html lang="en" />
    <meta charSet="utf-8" />
    <title>Sportsbet.io Design</title>
    <link
      rel="preload"
      href={withPrefix(fontUrls.AvertaStd.regular)}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={withPrefix(fontUrls.AvertaStd.semibold)}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={withPrefix(fontUrls.AvertaStd.bold)}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  </Helmet>
);
