/** @jsx jsx */ jsx;
import { css, jsx, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/tag';
import { styles } from '@heathmont/sportsbet-global';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { Children } from '../types';
import { mdxComponents } from '../config';
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
  <MDXProvider components={mdxComponents}>
    <Global styles={styles} />
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Sportsbet.io Design</title>
    </Helmet>
    <div css={grid}>
      <Nav />
      <Main>{children}</Main>
    </div>
  </MDXProvider>
);
