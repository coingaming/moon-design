/** @jsx jsx */ jsx;
import { Fragment } from 'react';
import { css, jsx, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { styles } from '@heathmont/sportsbet-global';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { Children } from '../types';
import { Nav } from './nav';
import { Meta } from './meta';

const grid = css({
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateColumns: '16rem minmax(0, 1fr)',
    gridTemplateAreas: `
      "nav main"
    `,
    minHeight: '100vh',
    width: '100vw',
  },
});

const Main = styled.main({
  padding: `${spacing('large')} ${spacing()}`,
  [mq(breakpoints.medium)]: {
    margin: '0 auto',
    padding: spacing('large'),
    maxWidth: '900px',
    width: '100%',
  },
});

export default ({ children }: Children) => (
  <Fragment>
    <Global styles={styles} />
    <Meta />
    <div css={grid}>
      <Nav />
      <Main>{children}</Main>
    </div>
  </Fragment>
);
