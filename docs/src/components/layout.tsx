/** @jsx jsx */ jsx;
import { Fragment } from 'react';
import { css, jsx, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { fontUrls } from '@heathmont/sportsbet-assets';
import { styles } from '@heathmont/sportsbet-global';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { Children } from '../types';
import { Nav } from './nav';

const grid = css({
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateColumns: '16rem auto',
    gridTemplateAreas: `
      "nav main"
    `,
    minHeight: '100vh',
  },
});

const Main = styled.main({
  padding: `${spacing('large')} ${spacing()}`,
  [mq(breakpoints.medium)]: {
    padding: spacing('large'),
  },
});

export default ({ children }: Children) => (
  <Fragment>
    <Global styles={styles} />
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Sportsbet.io Design</title>
      <link rel="preload" href={fontUrls.AvertaStd.regular} as="font" />
      <link rel="preload" href={fontUrls.AvertaStd.semibold} as="font" />
      <link rel="preload" href={fontUrls.AvertaStd.bold} as="font" />
    </Helmet>
    <div css={grid}>
      <Nav />
      <Main>{children}</Main>
    </div>
  </Fragment>
);
