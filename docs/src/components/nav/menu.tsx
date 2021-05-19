import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';
import { IconChevronDown, IconChevronRight } from '@heathmont/moon-assets';

import { Frontmatter } from '../../types';

type MenuItemProps = Frontmatter & {
  section?: boolean;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  pages?: any;
};

type MenuListProps = {
  title?: string;
  nested?: boolean;
  isActive?: boolean;
};

type MenuProps = {
  items: [MenuItemProps];
};

const MenuListItem = styled.li<{ section?: boolean }>(
  ({ theme: { color, fontWeight, space }, section }) => [
    {
      display: 'block',
      marginTop: rem(space.small),
    },
    section && {
      fontSize: rem(16),
      fontWeight: fontWeight.semibold,
      color: color.trunks[100],
    },
  ],
);

const Link = styled(GatsbyLink)(({ theme: { color } }) => ({
  fontSize: rem(16),
  color: color.trunks[100],
  textDecoration: 'none',
  '&:hover, &:active, &[aria-current=page]': {
    color: color.bulma[100],
  },
}));

/**
 * Components: Private
 */
const MenuSection = styled.li<{ isOpen?: boolean }>(({ theme }) => [
  {
    borderRadius: theme.radius.small,
    paddingTop: rem(16),
    paddingBottom: rem(16),
    // '&:hover': {
    //   backgroundColor: theme.color.goku[100],
    // },
  },
  // isOpen && {
  //   backgroundColor: theme.color.goku[100],
  // },
]);

const Heading = styled.li(({ theme: { color, fontWeight } }) => ({
  display: 'block',
  fontSize: rem(16),
  fontWeight: fontWeight.semibold,
  color: color.bulma[100],
}));

export const MenuList = styled.ul({
  margin: 0,
  listStyleType: 'none',
});

const HeadingWrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
});

const SubMenu = ({ items, title, isActive }: MenuListProps & MenuProps) => {
  const [isOpen, setIsOpen] = React.useState(isActive);
  return items ? (
    <MenuSection isOpen={isOpen}>
      {title && (
        <HeadingWrapper
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Heading>{title}</Heading>
          {isOpen ? (
            <IconChevronDown color="bulma.100" fontSize="0.5rem" />
          ) : (
            <IconChevronRight color="bulma.100" fontSize="0.5rem" />
          )}
        </HeadingWrapper>
      )}
      {isOpen && (
        <MenuList>
          {items.map((item: MenuItemProps) => (
            <MenuItem key={item.name} route={item.route} name={item.name} />
          ))}
        </MenuList>
      )}
    </MenuSection>
  ) : (
    <MenuSection isOpen={isOpen}>
      <Heading>{title}</Heading>
    </MenuSection>
  );
};

/**
 * Components: Exported
 */
export const MenuItem = ({ route, name, section }: MenuItemProps) => (
  <MenuListItem section={section}>
    <Link to={route}>{name}</Link>
  </MenuListItem>
);

export const Menu = ({ items }: MenuProps) => (
    <>
      {items.map((item) => (
        <SubMenu
          key={item.name}
          title={item.name}
          items={item.pages}
          isActive={false}
        />
      ))}
    </>
);
