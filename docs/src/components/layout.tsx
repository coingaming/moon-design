import React from 'react';
import styled from 'styled-components';
import { Global } from '@heathmont/moon-global';
import { mq, rem } from '@heathmont/moon-utils';

import { Children } from '../types';

import { Nav } from './nav';
import { Meta } from './meta';
import { ThemeToggle } from './theme-toggle';

const Grid = styled.div(({ theme: { breakpoint } }) => ({
  [mq(breakpoint.medium)]: {
    display: 'grid',
    gridTemplateColumns: '16rem minmax(0, 1fr)',
    gridTemplateAreas: `
      "nav main"
    `,
    minHeight: '100vh',
    width: '100vw',
  },
}));

const Main = styled.main(({ theme: { breakpoint, space } }) => ({
  padding: `${rem(space.large)} ${rem(space.default)}`,
  [mq(breakpoint.medium)]: {
    padding: '3rem 2rem',
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },
}));

export default ({ children }: Children) => (
  <React.Fragment>
    <Global />
    <Meta />
    <Grid>
      <ThemeToggle />
      <Nav />
      <Main>{children}</Main>
    </Grid>
  </React.Fragment>
);
