import React from 'react';
import styled from 'styled-components';
import { ThemeProvider, moonDesignDark } from '@heathmont/moon-themes';
import { Global } from '@heathmont/moon-global';
import { mq, rem } from '@heathmont/moon-utils';

import { Children } from '../types';

import { Nav } from './nav';
import { Meta } from './meta';
import { ThemeToggle } from './theme-toggle';

const Grid = styled.div({
  [mq(800)]: {
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
  padding: `${rem(32)} ${rem(16)}`,
  [mq(800)]: {
    padding: '3rem 2rem',
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },
});

export default ({ children }: Children) => (
  <React.Fragment>
    <Global />
    <Meta />
    <ThemeProvider theme={moonDesignDark}>
      <Grid>
        <ThemeToggle />
        <Nav />
        <Main>{children}</Main>
      </Grid>
    </ThemeProvider>
  </React.Fragment>
);
