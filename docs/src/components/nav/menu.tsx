import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { Frontmatter } from '../../types';

type MenuItemProps = Frontmatter & {
  section?: boolean;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  pages?: any;
};

type MenuListProps = {
  title?: string;
  nested?: boolean;
};

type MenuProps = {
  items: [MenuItemProps];
};

/**
 * Styles
 */
const MenuListItem = styled.li<{ section?: boolean }>(
  ({ theme: { color, fontWeight, space }, section }) => [
    {
      display: 'block',
      marginTop: rem(space.small),
    },
    section && {
      fontSize: '1.2rem',
      fontWeight: fontWeight.semibold,
      color: color.trunks[100],
    },
  ]
);

const Link = styled(GatsbyLink)(({ theme: { color, fontWeight } }) => ({
  // @ts-ignore: &[aria-current=page]
  color: color.bulma[100],
  textDecoration: 'none',
  '&[aria-current=page]': {
    fontWeight: fontWeight.semibold,
  },
  '&:hover, &:active, &[aria-current=page]': {
    color: color.piccolo[100],
  },
}));

/**
 * Components: Private
 */
const SubMenu = ({ items, title }: MenuListProps & MenuProps) => (
  <MenuListItem>
    {title && (
      <MenuListItem as="span" section>
        {title}
      </MenuListItem>
    )}
    <MenuList nested>
      {items.map(item => (
        <MenuItem key={item.name} route={item.route} name={item.name} />
      ))}
    </MenuList>
  </MenuListItem>
);

/**
 * Components: Exported
 */
export const MenuList = styled.ul<{ nested?: boolean & MenuListProps }>(
  ({ theme: { space }, nested }) => ({
    margin: 0,
    marginLeft: nested ? rem(space.default) : 0,
    listStyleType: 'none',
  })
);

export const MenuItem = ({ route, name, section }: MenuItemProps) => (
  <MenuListItem section={section}>
    <Link to={route}>{name}</Link>
  </MenuListItem>
);

export const Menu = ({ items }: MenuProps) =>
  items.map(item =>
    item.pages ? (
      <SubMenu key={item.name} title={item.name} items={item.pages} />
    ) : (
      <MenuItem key={item.name} route={item.route} name={item.name} section />
    )
  );
