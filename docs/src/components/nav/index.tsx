import * as React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { rem } from '@heathmont/moon-utils';

import { PagesData } from '../../types';

import { transformSections } from './transform';
import { Divider } from './divider';
import { Logo } from './logo';
import { Menu, MenuList, MenuItem } from './menu';

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

const NavContainer = styled.nav(({ theme: { space } }) => ({
  padding: rem(space.default),
}));

export const Nav = () => (
  <StaticQuery
    query={sidebar}
    render={(data: PagesData) => (
      <NavContainer>
        <Logo />
        <Divider />
        <MenuList>
          <MenuItem route="/" name="Introduction" section />
          {/* TODO: Investigate IDE type issue highlighting */}
          <Menu items={transformSections(data)} />
        </MenuList>
      </NavContainer>
    )}
  />
);
