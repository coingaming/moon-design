import React from 'react';
import styled from 'styled-components';
import { Button } from '@heathmont/moon-components';
import { rem } from '@heathmont/moon-utils';

import IconClose from '../../../private/icons/IconErrorCircle';
import IconMenu from '../../../private/icons/IconMenu';
import IconSearch from '../../../private/icons/IconSearch';
import { inputConfig, zIndex } from './settings';

const { borderWidth, padding } = inputConfig;

export type SearchInputSize = 'small' | 'medium';

export type SearchBoxProps = {
  size?: SearchInputSize;
};

export const SearchClearButton = styled(Button)(({ theme: { space } }) => ({
  position: 'absolute',
  top: 0,
  right: borderWidth,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `0 ${rem(space.small)}`,
  border: 'none',
  background: 'transparent',
  appearance: 'none',
  zIndex: zIndex.searchIcon,
}));

export const SearchClearIcon = styled(IconClose)<React.SVGProps<SVGSVGElement>>(
  ({ theme: { color, fontSize, space } }) => ({
    color: color.trunks[100],
    fontSize: rem(fontSize.body),
    width: space.default,
    height: space.default,
  })
);

export const SearchInputIcon = styled(IconSearch)<
  React.SVGProps<SVGSVGElement> & { inputSize: SearchInputSize }
>(({ inputSize, theme: { color, fontSize, space } }) => ({
  position: 'absolute',
  top: '50%',
  left: rem(padding[inputSize] + borderWidth),
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(fontSize.body),
  color: color.trunks[100],
  pointerEvents: 'none',
  width: space.default,
  height: space.default,
}));

export const SearchMenuIcon = styled(IconMenu)<React.SVGProps<SVGSVGElement>>(
  ({ theme: { color, fontSize, space } }) => ({
    position: 'absolute',
    top: '50%',
    right: rem(space.default),
    color: color.trunks[100],
    fontSize: rem(fontSize.body),
    transform: 'translateY(-50%)',
    zIndex: zIndex.searchIcon,
    width: space.default,
    height: space.default,
  })
);

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement> & { hasBorder: boolean, inputSize: SearchInputSize }
>(
  ({
    hasBorder,
    inputSize,
    theme: { color, fontSize, fontWeight, radius, space, transitionDuration },
  }) => ({
    fontWeight: fontWeight.normal,
    fontSize: rem(fontSize.body),
    width: '100%',
    lineHeight: 1,
    position: 'relative',
    paddingTop: 0,
    paddingRight: rem(padding[inputSize] + space.default),
    paddingBottom: 0,
    paddingLeft: rem(2 * padding[inputSize] + space.default),
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    backgroundColor: hasBorder ? color.goku[100] : color.gohan[100],
    color: color.trunks[100],
    borderRadius: rem(radius.default),
    border: hasBorder ? `${rem(borderWidth)} solid transparent` : 'none',
    outline: 0,
    zIndex: zIndex.searchInput,
    '&::placeholder': {
      color: 'inherit',
    },
    '&:hover': {
      backgroundColor: color.gohan[100],
      borderColor: color.beerus[100],
    },
    '&:active, &:focus': {
      backgroundColor: color.gohan[100],
      borderColor: color.piccolo[100],
      color: color.bulma[100],
    },
  })
);

export const SearchBox = styled.span<SearchBoxProps>(
  ({ theme: { fontSize } }) => ({
    display: 'flex',
    position: 'relative',
    fontSize: rem(fontSize.body),
    overflow: 'visible',
    width: '100%',
  }),
  ({ size }) => !!size && ({
    height: rem(inputConfig.height[size]),
  })
);
