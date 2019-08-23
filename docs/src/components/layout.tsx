import * as React from 'react';
import styled, { CSSObject } from '@emotion/styled';
import padding from 'polished/lib/shorthands/padding';
import { Global } from '@heathmont/sportsbet-global';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';

import { Children } from '../types';

import { Nav } from './nav';
import { Meta } from './meta';

const grid: CSSObject = {
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateColumns: '16rem minmax(0, 1fr)',
    gridTemplateAreas: `
      "nav main"
    `,
    minHeight: '100vh',
    width: '100vw',
  },
};

const Main = styled.main({
  padding: `${spacing('large')} ${spacing()}`,
  [mq(breakpoints.medium)]: {
    ...padding(
      spacing('large'),
      spacing('large'),
      spacing('xlarge'),
      spacing('large')
    ),
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },
});

export default ({ children }: Children) => (
  <React.Fragment>
    <Global />
    <Meta />
    <div css={grid}>
      <Nav />
      <Main>{children}</Main>
    </div>
  </React.Fragment>
);
