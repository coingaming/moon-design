import React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

export type ListItemProps = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  elementLeft?: React.ReactElement;
  elementRight?: React.ReactElement;
  isMeta?: boolean;
  subtext?: React.ReactElement;
  size?: 'medium' | 'large';
};

const StyledListItem = styled.div<ListItemProps>(
  ({ theme: { radius }, isMeta }) => ({
    display: 'grid',
    gridTemplateAreas: isMeta
      ? `
      "icon main meta"
      "icon description description"
    `
      : `
      "icon main meta"
      "icon description meta"
    `,
    gridTemplateColumns: `min-content 1fr max-content`,
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: rem(24),
    borderRadius: rem(radius.default),
  }),
  ({ size }) => ({
    fontSize: size === 'medium' ? rem(14) : rem(16),
    padding: size === 'medium' ? `${rem(8)}` : rem(12),
  }),
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.color.bulma[100],
    backgroundColor: themed('color', backgroundColor)(theme),
  })
);

const MainWrapper = styled.div<ListItemProps>({
  gridArea: 'main',
});

const ElementLeftWrapper = styled.span<ListItemProps>({
  gridArea: 'icon',
  marginRight: rem(8),
});

const ElementRightWrapper = styled.span<ListItemProps>({
  gridArea: 'meta',
  marginLeft: rem(8),
});

const MetaWrapper = styled.span<ListItemProps>(({ theme }) => ({
  gridArea: 'meta',
  color: theme.color.trunks[100],
  fontSize: rem(12),
  lineHeight: rem(16),
  marginLeft: rem(8),
  alignSelf: 'center',
}));

const SubtextWrapper = styled.div<ListItemProps>(({ theme }) => ({
  gridArea: 'description',
  fontSize: rem(12),
  lineHeight: rem(16),
  color: theme.color.trunks[100],
  display: 'flex',
  flex: 1,
  minWidth: 0,
}));

const SubtextInner = styled.div<ListItemProps>({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const ListItem: React.FC<ListItemProps> = ({
  children,
  color,
  backgroundColor,
  elementLeft,
  elementRight,
  isMeta,
  subtext,
  size,
}) => (
  <StyledListItem
    size={size}
    color={color}
    backgroundColor={backgroundColor}
    isMeta={isMeta}
  >
    {elementLeft && (
      <ElementLeftWrapper size={size}>{elementLeft}</ElementLeftWrapper>
    )}
    <MainWrapper>{children}</MainWrapper>
    {elementRight &&
      (isMeta ? (
        <MetaWrapper>{elementRight}</MetaWrapper>
      ) : (
        <ElementRightWrapper size={size}>{elementRight}</ElementRightWrapper>
      ))}
    {subtext && (
      <SubtextWrapper>
        <SubtextInner>{subtext}</SubtextInner>
      </SubtextWrapper>
    )}
  </StyledListItem>
);

export default ListItem;
