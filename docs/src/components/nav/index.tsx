/** @jsx jsx */
import { StaticQuery, graphql } from 'gatsby';
import { jsx, CSSObject } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { PagesData } from '../../types';
import { transformSections } from './transform';
import { Divider } from './divider';
import { Logo } from './logo';
import { Menu, MenuList, MenuItem } from './menu';

jsx;

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

const nav: CSSObject = {
  backgroundColor: colors.neutral[90],
  padding: spacing(),
};

export const Nav = () => (
  <StaticQuery
    query={sidebar}
    render={(data: PagesData) => (
      <nav css={nav}>
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
