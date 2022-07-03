// @ts-nocheck
import React from 'react';
import {
  GenericClose,
  GenericMenu,
  GenericSearch,
} from '@heathmont/moon-icons';
import { mq, rem } from '@heathmont/moon-utils';
import styled from 'styled-components';
import Button from '../../../button/Button';
import { inputConfig, zIndex } from './settings';

const { borderWidth, padding } = inputConfig;

export type SearchInputSize = 'small' | 'medium';

export const SearchClearButton = styled<any>(Button)(({ theme: { colorNew } }) => ({
  position: 'absolute',
  top: 0,
  right: rem(borderWidth),
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `0 ${rem(12)}`,
  border: 'none',
  background: 'transparent',
  appearance: 'none',
  zIndex: zIndex.searchIcon,
  ':focus svg': {
    color: colorNew.bulma,
  },
  '[dir=rtl] &': {
    right: 'auto',
    left: rem(borderWidth),
  },
}));

export const SearchClearIcon = styled(GenericClose)<
  React.SVGProps<SVGSVGElement>
>(({ theme: { colorNew } }) => ({
  color: colorNew.trunks,
  fontSize: rem(20),
}));

export const SearchInputIcon = styled(GenericSearch)<
  React.SVGProps<SVGSVGElement> & { $size: SearchInputSize }
>(({ $size, theme: { colorNew } }) => ({
  position: 'absolute',
  top: '50%',
  left: rem(padding[$size] + borderWidth),
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(20),
  color: colorNew.trunks,
  pointerEvents: 'none',
  '[dir=rtl] &': {
    left: 'auto',
    right: rem(padding[$size] + borderWidth),
  },
}));

export const SearchMenuIcon = styled(GenericMenu)<
  React.SVGProps<SVGSVGElement>
>(({ theme: { colorNew } }) => ({
  position: 'absolute',
  top: '50%',
  right: rem(16),
  color: colorNew.trunks,
  transform: 'translateY(-50%)',
  zIndex: zIndex.searchIcon,
  fontSize: rem(20),
  '[dir=rtl] &': {
    left: rem(16),
    right: 'auto',
  },
}));

export const SearchInput = styled.input<
  React.InputHTMLAttributes<HTMLInputElement> & {
    hasBorder: boolean;
    $size: SearchInputSize;
  }
>(({ $size, hasBorder, theme: { breakpoint, colorNew, newTokens } }) => ({
  fontWeight: newTokens.font.weight.normal,
  fontSize: rem(14),
  width: '100%',
  lineHeight: 1,
  position: 'relative',
  paddingTop: 0,
  paddingRight: `calc(${rem(padding[$size])} + ${rem(16)})`,
  paddingBottom: 0,
  paddingLeft: `calc(${rem(2 * padding[$size])} + ${rem(16)})`,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  backgroundColor: colorNew.goku,
  color: colorNew.trunks,
  borderRadius: newTokens.borderRadius.surface.small,
  border: hasBorder ? `${rem(borderWidth)} solid transparent` : 'none',
  outline: 0,
  zIndex: zIndex.searchInput,
  transition: `color ${newTokens.transition.default}, background-color ${newTokens.transition.default}`,
  '[dir=rtl] &': {
    paddingLeft: `calc(${rem(padding[$size])} + ${rem(16)})`,
    paddingRight: `calc(${rem(2 * padding[$size])} + ${rem(16)})`,
  },
  '&::placeholder': {
    color: 'inherit',
  },
  '&:hover': {
    backgroundColor: colorNew.gohan,
    borderColor: colorNew.beerus,
  },
  '&:active, &:focus': {
    backgroundColor: colorNew.gohan,
    borderColor: colorNew.piccolo,
    color: colorNew.bulma,
  },
  [mq(breakpoint.medium, 'max-width')]: {
    [':focus:not(:placeholder-shown)']: {
      borderColor: colorNew.piccolo,
    },
  },
}));

export const SearchBox = styled.span<{
  $size: SearchInputSize;
}>(({ $size }) => ({
  display: 'flex',
  position: 'relative',
  fontSize: rem(14),
  overflow: 'visible',
  width: '100%',
  height: rem(inputConfig.height[$size]),
}));
