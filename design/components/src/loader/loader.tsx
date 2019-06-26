/** @jsx jsx */
import * as React from 'react';
import { CSSObject, jsx, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';

jsx;

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled('div')({
  display: 'inline-block',
  position: 'relative',
  width: spacing(),
  height: spacing(),
});

const common: CSSObject = {
  boxSizing: 'border-box',
  display: 'block',
  position: 'absolute',
  width: spacing(),
  height: spacing(),
  borderRadius: '50%',
  animation: `${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
};

const getBorder = (color: string) => ({
  border: `2px solid ${color}`,
  borderColor: `${color} transparent transparent transparent`,
});

type LoaderProps = {
  color: string;
};

export const Loader: React.FC<LoaderProps> = ({ color }) => (
  <Wrapper>
    <div css={[common, getBorder(color), { animationDelay: '-0.45s' }]} />
    <div css={[common, getBorder(color), { animationDelay: '-0.3s' }]} />
    <div css={[common, getBorder(color), { animationDelay: '-0.15s' }]} />
    <div css={[common, getBorder(color)]} />
  </Wrapper>
);
