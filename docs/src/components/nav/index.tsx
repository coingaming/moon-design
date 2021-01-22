import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { rem } from '@heathmont/moon-utils';
import { moonDesignDark, ThemeProvider } from '@heathmont/moon-themes';

import { PagesData } from '../../types';

import { transformSections } from './transform';
import { Logo } from './logo';
import { Menu, MenuList } from './menu';

const sidebar = graphql`
  query {
    pages: allMdx {
      edges {
        node {
          frontmatter {
            name
            menu
            route
          }
        }
      }
    }
    config: allDocsJson {
      edges {
        node {
          menuSections
        }
      }
    }
  }
`;

const NavContainer = styled.nav({
  paddingTop: rem(24),
  paddingBottom: rem(24),
  paddingLeft: rem(32),
  paddingRight: rem(32),
  backgroundColor: 'red',
  minWidth: rem(272),
});

const NavContainerWrapper = styled.div({
  padding: rem(32),
});

export const Nav = () => (
  <>
    <ThemeProvider theme={moonDesignDark}>
      <StaticQuery
        query={sidebar}
        render={(data: PagesData) => (
          <NavContainer>
            <NavContainerWrapper>
              <Logo />
              <MenuList>
                {/* TODO: Investigate IDE type issue highlighting */}
                <Menu items={transformSections(data)} />
              </MenuList>
            </NavContainerWrapper>
          </NavContainer>
        )}
      />
    </ThemeProvider>
  </>
);
