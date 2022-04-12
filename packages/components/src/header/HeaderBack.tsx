import React from 'react';
import { rem } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';

import IconArrowLeft from '../private/icons/IconArrowLeft';
/**
 * Types
 *
 * 1. String or React Component.
 * 2. Allows us to pass in any props associated to the `element`.
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
type HeaderBackProps = {
  element?: any /* [1] */;
  [key: string]: any /* [2] */;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const HeaderBackLink = styled.a(({ theme: { color, space } }) => ({
  margin: `0 ${rem(space.small)} 0 0`,
  padding: 0,
  alignSelf: 'center',
  verticalAlign: 'middle',
  backgroundColor: 'transparent',
  border: 0,
  appearance: 'none',
  [`> ${IconArrowLeft}`]: {
    color: color.piccolo[100],
    fontSize: rem(space.medium),
  },
}));

/**
 * Component
 */
const HeaderBack: React.FC<HeaderBackProps> = ({
  children,
  element = 'a',
  ...props
}) => (
  <HeaderBackLink as={element} {...props}>
    <IconArrowLeft />
    <span style={hideVisually()}>{children}</span>
  </HeaderBackLink>
);

export default HeaderBack;
