import * as React from 'react';

/**
 * Currently configured as assets in the Gatsby static directory.
 */
export const cdnUrl: string = '/assets';

/**
 * Partial to preconnect to the CDN for speedier access
 */
export const CdnLink = () => (
  <React.Fragment>
    <link rel="preconnect" href={cdnUrl} />
    <link rel="dns-prefetch" href={cdnUrl} />
  </React.Fragment>
);
