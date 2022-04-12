import { SpaceProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import styled, { CSSObject } from 'styled-components';

import stackMixin from '../stackMixin/stackMixin';

type StackSpace = CSSObject['marginTop'] | CSSObject['gridGap'];

export type StackProps = {
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<Stack space="large" />` returns `space.large` as a rem unit.
   */
  space?: SpaceProps | StackSpace;
};

const Stack = styled.div<StackProps>(({ theme, space = 'default' }) =>
  stackMixin(themed('space', space)(theme))
);

export default Stack;
