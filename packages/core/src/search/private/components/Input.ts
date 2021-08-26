import React from 'react';
import styled from 'styled-components';

import { Button } from '@heathmont/moon-components';
import {
  GenericClose,
  GenericMenu,
  GenericSearch,
} from '@heathmont/moon-icons';
import { mq, rem } from '@heathmont/moon-utils';

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
  '[dir=rtl] &': {
    right: 'auto',
    left: borderWidth,
  },
}));

export const SearchClearIcon = styled(GenericClose)<
  React.SVGProps<SVGSVGElement>
>(({ theme: { base, color } }) => ({
  color: color.trunks[100],
  fontSize: rem(base.lineHeight),
}));

export const SearchInputIcon = styled(GenericSearch)<
  React.SVGProps<SVGSVGElement> & { inputSize: SearchInputSize }
>(({ inputSize, theme: { base, color } }) => ({
  position: 'absolute',
  top: '50%',
  left: rem(padding[inputSize] + borderWidth),
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(base.lineHeight),
  color: color.trunks[100],
  pointerEvents: 'none',
  '[dir=rtl] &': {
    left: 'auto',
    right: rem(padding[inputSize] + borderWidth),
  },
}));

export const SearchMenuIcon = styled(GenericMenu)<
  React.SVGProps<SVGSVGElement>
>(({ theme: { base, color, space } }) => ({
  position: 'absolute',
  top: '50%',
  right: rem(space.default),
  color: color.trunks[100],
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(base.lineHeight),
  '[dir=rtl] &': {
    left: rem(space.default),
    right: 'auto',
  },
}));

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement> & {
    hasBorder: boolean;
    inputSize: SearchInputSize;
  }
>(
  ({
    hasBorder,
    inputSize,
    theme: { breakpoint, color, fontSize, fontWeight, radius, space },
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
    '[dir=rtl] &': {
      paddingLeft: rem(padding[inputSize] + space.default),
      paddingRight: rem(2 * padding[inputSize] + space.default),
    },
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
    [mq(breakpoint.medium, 'max-width')]: {
      '.popup-open &': {
        borderColor: color.piccolo[100],
      },
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
  ({ size }) =>
    !!size && {
      height: rem(inputConfig.height[size]),
    }
);
