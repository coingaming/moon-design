import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { spacing } from '@heathmont/sportsbet-utils';

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
          designSections
        }
      }
    }
  }
`;

export const Nav = () => (
  <StaticQuery
    query={sidebar}
    render={(data: PagesData) => (
      <nav
        css={{
          padding: spacing(),
        }}
      >
        <Logo />
        <Divider />
        <MenuList>
          <MenuItem route="/" name="Introduction" section />
          {/* TODO: Investigate IDE type issue highlighting */}
          <Menu items={transformSections(data)} />
        </MenuList>
      </nav>
    )}
  />
);
