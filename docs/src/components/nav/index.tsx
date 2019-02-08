/** @jsx jsx */ jsx;
import { StaticQuery, graphql } from 'gatsby';
import { jsx, css } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
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
  }
`;

const nav = css({
  backgroundColor: colors.neutral[90],
  padding: spacing(),
});

export const Nav = () => (
  <StaticQuery
    query={sidebar}
    render={(data: PagesData) => (
      <nav css={nav}>
        <Logo />
        <Divider />
        <MenuList>
          <MenuItem route={`/`} name="Introduction" section />
          <Menu items={transformSections(data)} />
        </MenuList>
      </nav>
    )}
  />
);
