import * as React from 'react';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconArrowLeft } from '@heathmont/sportsbet-icons';
import styled from 'styled-components';

/**
 * Types
 *
 * 1. String or React Component.
 * 2. Allows us to pass in any props associated to the `element`.
 */
/* @TODO Revisit post-EPL */
/* eslint-disable @typescript-eslint/no-explicit-any */
type HeaderBackProps = {
  element?: any /* [1] */;
  [key: string]: any /* [2] */;
};
/* eslint-enable @typescript-eslint/no-explicit-any */

const HeaderBackLink = styled.a({
  margin: `0 ${spacing()} 0 0`,
  padding: 0,
  alignSelf: 'center',
  verticalAlign: 'middle',
  backgroundColor: 'transparent',
  border: 0,
  appearance: 'none',
});

/**
 * Component
 */
const HeaderBack: React.FC<HeaderBackProps> = ({
  children,
  element = 'a',
  ...props
}) => (
  <HeaderBackLink as={element} {...props}>
    <IconArrowLeft fontSize={spacing('medium')} color={colors.brand} />
    <span css={hideVisually()}>{children}</span>
  </HeaderBackLink>
);

export { HeaderBack };
